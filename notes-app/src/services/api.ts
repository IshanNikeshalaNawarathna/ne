import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api/v1',
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// CREATE
export async function createNote(note: any) {
  return (await api.post("/ne", note)).data;
}

// READ
export async function getNotes() {
  return (await api.get("/ne")).data;
}

// UPDATE
export async function updateNote(id: string, note: any) {
  return (await api.put(`/ne/${id}`, note)).data;
}

// DELETE
export async function deleteNote(id: string) {
  return (await api.delete(`/ne/${id}`)).data;
}