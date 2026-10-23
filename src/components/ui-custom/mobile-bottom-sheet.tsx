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
 * Drag-to-dismiss bottom sheet drawer for mobile devices.
 * Adapts between dark and light themes with clean, formal styling.
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
        <Drawer.Overlay className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm transition-opacity" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-[101] flex max-h-[90vh] flex-col rounded-t-2xl border-t border-border bg-card text-card-foreground shadow-2xl focus:outline-none">
          {/* Drag Handle */}
          <div className="mx-auto my-3 h-1 w-10 shrink-0 rounded-full bg-muted-foreground/30" />

          {/* Header */}
          {(title || category) && (
            <div className="flex items-center justify-between border-b border-border px-5 pb-3 pt-1">
              <div>
                {category ? (
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {category}
                  </span>
                ) : null}
                {title ? (
                  <Drawer.Title className="text-base font-bold text-foreground leading-tight">
                    {title}
                  </Drawer.Title>
                ) : null}
              </div>

              <Drawer.Close className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted">
                <X className="h-3.5 w-3.5" />
              </Drawer.Close>
            </div>
          )}

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-5 pb-8 text-foreground">
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
