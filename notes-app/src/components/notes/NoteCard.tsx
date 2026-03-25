"use client";
import React from "react";
import { motion } from "framer-motion";

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
}

export function NoteCard({ note, onClick }: { note: Note; onClick: () => void }) {
  return (
    <motion.div
      layoutId={`note-${note.id}`}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-card text-card-foreground border border-border p-5 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-pointer flex flex-col group h-64"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {note.title}
        </h3>
      </div>
      <p className="text-muted-foreground text-sm flex-1 line-clamp-5 leading-relaxed">
        {note.content}
      </p>
      <div className="mt-4 flex items-center justify-between pt-4 border-t border-border/50">
        <span className="text-xs text-muted-foreground/70 font-medium">{note.date}</span>
        <div className="flex gap-2 font-medium">
          {note.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-accent text-accent-foreground text-[10px] rounded-md uppercase tracking-wider">
              {tag}
            </span>
          ))}
          {note.tags.length > 2 && (
            <span className="px-2 py-1 bg-accent text-accent-foreground text-[10px] rounded-md uppercase tracking-wider">
              +{note.tags.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
