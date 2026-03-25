"use client";
import React from "react";
import { Search, Plus, Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function Navbar({ onNewNote }: { onNewNote?: () => void }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 border-b border-border bg-background/70 backdrop-blur-xl sticky top-0 z-10 flex items-center justify-between px-4 lg:px-8 transition-colors duration-300 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors">
          <Menu className="w-5 h-5" />
        </button>
        <div className="relative max-w-md w-full hidden sm:block group">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
          <input 
            type="text" 
            placeholder="Search notes..." 
            className="w-full h-10 pl-9 pr-4 rounded-full bg-muted/50 border border-transparent focus:border-primary/50 focus:bg-background outline-none transition-all duration-300 text-sm shadow-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        <button 
          onClick={onNewNote}
          className="h-9 px-4 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_var(--color-primary)] opacity-90 hover:shadow-[0_0_20px_var(--color-primary)]"
        >
          <Plus className="w-4 h-4" />
          New Note
        </button>
      </div>
    </header>
  );
}
