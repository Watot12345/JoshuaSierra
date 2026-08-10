"use client";

import React from "react";
import { Drawer } from "vaul";
import { X } from "lucide-react";

interface MobileBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  category?: string;
  children: React.ReactNode;
}

/**
 * Native iOS/Android style drag-to-dismiss bottom sheet drawer for mobile devices.
 * Uses `vaul` for smooth 60fps drag physics and backdrop dimming.
 */
export function MobileBottomSheet({
  open,
  onOpenChange,
  title,
  category,
  children,
}: MobileBottomSheetProps) {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm transition-opacity" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-[101] flex max-h-[90vh] flex-col rounded-t-[32px] border-t border-white/10 bg-[#121212] focus:outline-none">
          {/* Drag Handle */}
          <div className="mx-auto my-3 h-1.5 w-12 shrink-0 rounded-full bg-white/20" />

          {/* Header */}
          {(title || category) && (
            <div className="flex items-center justify-between border-b border-white/10 px-6 pb-4 pt-1">
              <div>
                {category ? (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-crimson" style={{ color: "#dc2626" }}>
                    {category}
                  </span>
                ) : null}
                {title ? (
                  <Drawer.Title className="text-lg font-bold text-white leading-tight">
                    {title}
                  </Drawer.Title>
                ) : null}
              </div>

              <Drawer.Close className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10">
                <X className="h-4 w-4" />
              </Drawer.Close>
            </div>
          )}

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-6 pt-4 pb-10 text-slate-300">
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
