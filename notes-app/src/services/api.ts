import axios from "axios";
import { setupMockAdapter } from "./mockAdapter";

export const api = axios.create({
  baseURL: "/api"
});

// Setup mock adapter for development
setupMockAdapter(api);

export const NoteService = {
  getNotes: () => api.get("/notes").then(res => res.data),
  createNote: (note: any) => api.post("/notes", note).then(res => res.data),
  updateNote: (id: string, note: any) => api.put(`/notes/${id}`, note).then(res => res.data),
  deleteNote: (id: string) => api.delete(`/notes/${id}`).then(res => res.data)
};
