import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// CREATE
export async function createNote(note: any) {
  return (await api.post("/api/v1/ne", note)).data;
}

// READ
export async function getNotes() {
  return (await api.get("/api/v1/ne")).data;
}

// UPDATE
export async function updateNote(id: string, note: any) {
  return (await api.put(`/api/v1/ne/${id}`, note)).data;
}

// DELETE
export async function deleteNote(id: string) {
  return (await api.delete(`/api/v1/ne/${id}`)).data;
}