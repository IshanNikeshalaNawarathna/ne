"use client";
import React from "react";
import { Note, NoteCard } from "./NoteCard";
import { NoteSkeleton } from "./NoteSkeleton";

interface NotesGridProps {
  notes?: Note[];
  isLoading: boolean;
  onNoteClick: (note: Note) => void;
}

export function NotesGrid({ notes, isLoading, onNoteClick }: NotesGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 lg:p-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <NoteSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!notes || notes.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center h-full text-center p-8">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6 opacity-50">
          <span className="text-4xl text-muted-foreground">📝</span>
        </div>
        <h3 className="text-xl font-medium mb-2">No notes found</h3>
        <p className="text-muted-foreground max-w-sm">
          Create your first note by clicking the 'New Note' button in the toolbar.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 lg:p-8">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onClick={() => onNoteClick(note)} />
      ))}
    </div>
  );
}
