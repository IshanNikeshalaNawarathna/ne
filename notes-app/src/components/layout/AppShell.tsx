"use client";
import React from "react";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground animate-fade-in transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden shrink-0">
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
