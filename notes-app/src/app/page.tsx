"use client";
import React, { useEffect, useState } from "react";
import { NotesGrid } from "@/components/notes/NotesGrid";
import { NoteModal } from "@/components/notes/NoteModal";
import { Note } from "@/types";
import { createNote, getNotes, updateNote, deleteNote } from "@/services/api";
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
      const data = await getNotes();
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

  const handleCreateOrUpdate = async (
    note: Omit<Note, "id" | "date"> & { id?: string; date?: string }
  ) => {
    setIsModalOpen(false);
    setIsLoading(true);

    try {
      if (selectedNote) {
        const updatedNote: Note = {
          id: selectedNote.id,
          title: note.title,
          content: note.content,
          tags: note.tags,
          date: note.date ?? selectedNote.date,
        };

        await updateNote(selectedNote.id, updatedNote);
      } else {
        await createNote(note);
      }

      await fetchNotes();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setIsModalOpen(false);
    setIsLoading(true);

    try {
      await deleteNote(id);
      await fetchNotes();
    } catch (e) {
      console.error(e);
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