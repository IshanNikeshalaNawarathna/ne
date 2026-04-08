import axios from "axios";
import { Note } from "@/types";

// const baseURL = typeof window === "undefined"
//   ? process.env.API_URL            // server-side: Docker hostname
//   : process.env.NEXT_PUBLIC_API_URL; // client-side: localhost

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export default api;

export async function createNote(note: any) : Promise<void> {
  console.log("Creating Note:", note);
  const response = await api.post("/api/v1/ne/", note);
  console.log("Create Note Response:", response.data);
  return response.data;
}
export async function getNotes() : Promise<Note[]> {
  const response = await api.get("/api/v1/ne/");
  console.log("Get Notes Response:", response.data);
  return response.data;
}
export async function updateNote(id: string, note: Note) : Promise<Note> {
  const response = await api.put(`/api/v1/ne/${id}`, note);
  console.log("Update Note Response:", response.data);
  return response.data;
}
export async function deleteNote(id: string) : Promise<void> {
  const response = await api.delete(`/api/v1/ne/${id}`);
  console.log("Delete Note Response:", response.data);
  return response.data;
}