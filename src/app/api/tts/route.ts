import { NextRequest, NextResponse } from "next/server";

const MAX_TTS_CHARS = 1200;
const GOOGLE_CHUNK_LIMIT = 180;

function splitTextIntoChunks(text: string, maxLen: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const chunks: string[] = [];
  let current = "";

  for (const word of words) {
    if (word.length > maxLen) {
      if (current) {
        chunks.push(current);
        current = "";
      }
      for (let i = 0; i < word.length; i += maxLen) {
        chunks.push(word.slice(i, i + maxLen));
      }
      continue;
    }

    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxLen) {
      chunks.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }

  if (current) {
    chunks.push(current);
  }

  return chunks;
}

async function tryGroqTts(text: string): Promise<Response | null> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch("https://api.groq.com/openai/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "canopylabs/orpheus-v1-english",
        input: text,
        voice: "troy",
        response_format: "wav",
      }),
    });

    if (!res.ok) return null;
    const buffer = await res.arrayBuffer();
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/wav",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return null;
  }
}

async function fetchGoogleTtsAudio(text: string): Promise<Uint8Array | null> {
  const chunks = splitTextIntoChunks(text, GOOGLE_CHUNK_LIMIT);
  if (chunks.length === 0) return null;

  try {
    const buffers = await Promise.all(
      chunks.map(async (chunk) => {
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(chunk)}`;
        const res = await fetch(url, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          },
        });
        if (!res.ok) {
          throw new Error(`Google TTS failed with status ${res.status}`);
        }
        return new Uint8Array(await res.arrayBuffer());
      })
    );

    const totalLength = buffers.reduce((sum, buf) => sum + buf.byteLength, 0);
    const merged = new Uint8Array(totalLength);
    let offset = 0;
    for (const buf of buffers) {
      merged.set(buf, offset);
      offset += buf.byteLength;
    }

    return merged;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const rawText = typeof body?.text === "string" ? body.text.trim() : "";

    if (!rawText) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const text = rawText.slice(0, MAX_TTS_CHARS);

    const groqResponse = await tryGroqTts(text);
    if (groqResponse) {
      return groqResponse;
    }

    const mp3Bytes = await fetchGoogleTtsAudio(text);
    if (mp3Bytes) {
      return new NextResponse(Buffer.from(mp3Bytes), {
        status: 200,
        headers: {
          "Content-Type": "audio/mpeg",
          "Cache-Control": "no-store",
        },
      });
    }

    return NextResponse.json(
      { error: "TTS service unavailable" },
      { status: 503 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid TTS request" },
      { status: 400 }
    );
  }
}
