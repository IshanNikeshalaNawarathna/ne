"use client";
import React, { useEffect, useState } from "react";
import { NotesGrid } from "@/components/notes/NotesGrid";
import { NoteModal } from "@/components/notes/NoteModal";
import { Note } from "@/components/notes/NoteCard";
import { NoteService } from "@/services/api";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const fetchNotes = async () => {
    setIsLoading(true);
    try {
      const data = await NoteService.getNotes();
      setNotes(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreateOrUpdate = async (note: Omit<Note, "id" | "date"> & { id?: string; date?: string }) => {
    // Optimistic close modal immediately
    setIsModalOpen(false);
    
    // Fallback ID/Date for immediate rendering before API responds (optimistic UI config if needed)
    // We will just show skeleton
    
    setIsLoading(true);
    try {
      if (selectedNote) {
        await NoteService.updateNote(note.id as string, note);
      } else {
        await NoteService.createNote(note);
      }
      await fetchNotes();
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setIsModalOpen(false);
    setIsLoading(true);
    try {
      await NoteService.deleteNote(id);
      await fetchNotes();
    } finally {
      setIsLoading(false);
    }
  };

  const openNewNote = () => {
    setSelectedNote(null);
    setIsModalOpen(true);
  };

  const openNote = (note: Note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar onNewNote={openNewNote} />
      <NotesGrid 
        notes={notes} 
        isLoading={isLoading} 
        onNoteClick={openNote} 
      />
      <NoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        note={selectedNote}
        onSave={handleCreateOrUpdate}
        onDelete={handleDelete}
      />
    </>
  );
}
