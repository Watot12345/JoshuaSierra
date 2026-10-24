"use client";

import {
  Cpu,
  CircuitBoard,
  MemoryStick,
  HardDrive,
  Terminal,
  Tv,
  Keyboard,
  Mouse,
  Headphones,
  Smartphone,
  Wrench,
} from "lucide-react";

interface GearItem {
  name: string;
  category: string;
  spec: string;
  description?: string;
  icon: React.ComponentType<{ className?: string }>;
  tag?: string;
  image?: string;
}

const PC_SPECS: GearItem[] = [
  {
    name: "AMD A8-7650K APU",
    category: "Processor (CPU)",
    spec: "4 Cores / 4 Threads · 3.8 GHz Max Turbo",
    description: "Daily driver compute unit for full-stack engineering, compilation, and backend scripting.",
    icon: Cpu,
    tag: "CPU",
  },
  {
    name: "MSI A68HM-E33 V2 (MS-7721)",
    category: "Motherboard",
    spec: "Socket FM2+ · Military Class 4 · Version 9.0",
    description: "Reliable foundation providing stable power delivery and SATA III throughput.",
    icon: CircuitBoard,
    tag: "Mainboard",
  },
  {
    name: "Kingston 12 GB DDR3",
    category: "Memory (RAM)",
    spec: "Dual-channel setup (8GB + 4GB) @ 1800MHz",
    description: "High-frequency configuration optimized for multi-container Docker workflows and dev servers.",
    icon: MemoryStick,
    tag: "12GB RAM",
  },
  {
    name: "ADATA 256 GB SSD",
    category: "Storage",
    spec: "High-Speed Solid State Drive",
    description: "Hosts the root OS, Next.js build caches, local databases, and dev environments.",
    icon: HardDrive,
    tag: "Fast Storage",
  },
  {
    name: "Linux Mint 22.2 (Zara)",
    category: "Operating System",
    spec: "Based on Ubuntu 24.04 'Noble Numbat' LTS",
    description: "Lightweight, developer-centric POSIX environment with native zsh, Git, and Docker CLI.",
    icon: Terminal,
    tag: "Primary OS",
  },
];

const PERIPHERALS: GearItem[] = [
  {
    name: "Hanabishi HLED-22FHD (22″)",
    category: "Display & Monitor",
    spec: "22-inch 1080p Full HD Display · 16:9 Widescreen",
    description: "Primary 22-inch 1080p LED display with HDMI/PC input for dual-window code editing and live testing.",
    icon: Tv,
    tag: "1080p FHD",
    image: "/gear/hanabishi-tv.jpg",
  },
  {
    name: "Nexion KL-802 Mechanical Keyboard",
    category: "Typing & Input",
    spec: "Black & Red Edition · Tactile Blue Switches",
    description: "Compact ergonomic mechanical keyboard with clicky, tactile blue switches designed for rapid key response and typing cadence.",
    icon: Keyboard,
    tag: "KL-802 Blue Switch",
    image: "/gear/nexion-kl-802.jpg",
  },
  {
    name: "F1 Wireless Rechargeable Mouse",
    category: "Pointer & Ergonomics",
    spec: "500mAh Battery · Adjustable 1600 DPI · Silent Click",
    description: "Ergonomic wireless mouse with silent switches, built-in 500mAh rechargeable lithium battery, and 3-stage DPI control.",
    icon: Mouse,
    tag: "1600 DPI Silent",
    image: "/gear/inphic-f1-mouse.jpg",
  },
  {
    name: "Promate Spike Headset",
    category: "Audio & Comms",
    spec: "High-Definition Drivers + Noise-Isolating Mic",
    description: "Clear audio for remote standups, client meetings, technical consultations, and deep work focus.",
    icon: Headphones,
    tag: "HD Audio",
    image: "/gear/promate-spike.jpg",
  },
  {
    name: "itel RS4",
    category: "Mobile Test Device",
    spec: "120Hz Refresh Rate · Helio G99 Ultimate",
    description: "Dedicated physical handset for on-device testing of React Native, Expo, and responsive web PWAs.",
    icon: Smartphone,
    tag: "Mobile Testbed",
    image: "/gear/itel-rs4.jpg",
  },
];

export function BrylGear() {
  return (
    <section id="gear" className="py-12 border-b border-border">
      {/* Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          workspace &amp; gear
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          daily hardware &amp; setup
        </span>
      </div>

      {/* Intro Note */}
      <div className="mb-6 rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground leading-relaxed shadow-xs">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground mb-1">
          <Wrench className="h-3.5 w-3.5 text-foreground" />
          <span>Engineering Environment</span>
        </div>
        <p>
          A battle-tested workstation running an optimized Linux Mint environment. Every project, full-stack platform, WebRTC app, and AI pipeline in this portfolio was engineered, compiled, and deployed on this setup.
        </p>
      </div>

      <div className="space-y-8">
        {/* Workstation Rig / Compute */}
        <div>
          <div className="mb-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Workstation &amp; Rig Specs
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PC_SPECS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  data-sound="tick"
                  className="group rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-foreground/20 hover:bg-muted/40 shadow-xs cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground transition-colors group-hover:border-foreground/30">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                          {item.category}
                        </p>
                        <h4 className="font-mono text-xs sm:text-sm font-bold text-foreground truncate">
                          {item.name}
                        </h4>
                      </div>
                    </div>
                    {item.tag && (
                      <span className="shrink-0 rounded-md border border-border bg-muted/60 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2.5 font-mono text-[11px] text-foreground/80 font-medium">
                    {item.spec}
                  </p>
                  {item.description && (
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Peripherals & Mobile Testing */}
        <div>
          <div className="mb-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Peripherals &amp; Devices
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PERIPHERALS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  data-sound="tick"
                  className="group rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:border-foreground/20 hover:bg-muted/40 shadow-xs flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Visual Media Thumbnail */}
                    {item.image && (
                      <div className="mb-3.5 relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-border bg-white dark:bg-muted/30 p-2 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground transition-colors group-hover:border-foreground/30">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                            {item.category}
                          </p>
                          <h4 className="font-mono text-xs sm:text-sm font-bold text-foreground truncate">
                            {item.name}
                          </h4>
                        </div>
                      </div>
                      {item.tag && (
                        <span className="shrink-0 rounded-md border border-border bg-muted/60 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <p className="mt-2.5 font-mono text-[11px] text-foreground/80 font-medium">
                      {item.spec}
                    </p>
                    {item.description && (
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
