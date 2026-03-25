"use client";
import React from "react";
import { Book, Hash, Settings, Star, Trash2 } from "lucide-react";
import clsx from "clsx";

export function Sidebar() {
  const navItems = [
    { icon: Book, label: "All Notes", active: true },
    { icon: Star, label: "Favorites" },
    { icon: Hash, label: "Tags" },
    { icon: Trash2, label: "Trash" },
  ];

  return (
    <aside className="w-64 h-full bg-muted/30 border-r border-border backdrop-blur-md flex-col pt-6 pb-4 hidden md:flex">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary shadow-[0_0_15px_var(--color-primary)] opacity-90 flex items-center justify-center">
          <Book className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="font-bold text-lg tracking-tight">Antigravity</span>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            className={clsx(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              item.active 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-3 mt-auto">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-all duration-200">
          <Settings className="w-4 h-4" />
          Settings
        </button>
      </div>
    </aside>
  );
}
