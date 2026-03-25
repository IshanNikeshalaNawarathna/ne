"use client";
import React, { useEffect, useState } from "react";
import { X, Save, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Note } from "./NoteCard";

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  note: Note | null;
  onSave: (note: Omit<Note, "id" | "date"> & { id?: string; date?: string }) => void;
  onDelete?: (id: string) => void;
}

export function NoteModal({ isOpen, onClose, note, onSave, onDelete }: NoteModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      } else {
        setTitle("");
        setContent("");
      }
    }
  }, [note, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div 
            layoutId={note ? `note-${note.id}` : "new-note"}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-card w-full max-w-2xl h-[85vh] flex flex-col rounded-2xl shadow-2xl border border-border overflow-hidden z-10"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    onSave({ title: title || "Untitled Note", content, tags: note?.tags || [] });
                    onClose();
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity shadow-sm"
                >
                  <Save className="w-4 h-4" /> Save
                </button>
                {note && onDelete && (
                  <button 
                    onClick={() => { onDelete(note.id); onClose(); }}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 font-medium text-sm rounded-lg hover:bg-red-500/20 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                )}
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Note Title..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-3xl font-bold bg-transparent outline-none placeholder:text-muted-foreground/40 w-full"
              />
              <textarea 
                placeholder="Start writing your thoughts..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="flex-1 w-full text-base bg-transparent outline-none resize-none placeholder:text-muted-foreground/50 leading-relaxed font-sans"
              />
            </div>
            
            <div className="px-6 py-3 border-t border-border/50 text-xs text-muted-foreground flex items-center justify-between bg-muted/20">
              <span>{note ? `Editing existing note` : "New Note Draft"}</span>
              <span>{content.length} characters</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
