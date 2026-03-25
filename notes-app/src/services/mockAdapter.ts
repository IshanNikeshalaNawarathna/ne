import { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { Note } from "@/components/notes/NoteCard";

let mockNotes: Note[] = [
  {
    id: "1",
    title: "Project Antigravity",
    content: "Initialize Next.js app with Tailwind v4, add dark mode, set up glassmorphism themes utilizing deep blurred backgrounds. Integrate framer-motion for buttery smooth interactions. The design must be clean, legible, and futuristic.",
    date: "Mar 25, 2026",
    tags: ["Development", "UI/UX"]
  },
  {
    id: "2",
    title: "Weekly Log: Cybernetics",
    content: "Discovered an interesting pattern in the way the latest neural network weights align with human cognitive bias. Need to investigate the gradient clipping impact.",
    date: "Mar 24, 2026",
    tags: ["AI", "Research", "Log"]
  },
  {
    id: "3",
    title: "Shopping List for the Orbital Station",
    content: "- Freeze-dried coffee\n- Microgravity pens\n- Spare CO2 scrubbers\n- Hydroponic seeds (Basil, Mint)",
    date: "Mar 23, 2026",
    tags: ["Personal"]
  }
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function setupMockAdapter(api: AxiosInstance) {
  api.defaults.adapter = async (config) => {
    await delay(1200); // Simulate network latency to show off skeletons
    const url = config.url || "";
    const method = config.method?.toLowerCase();
    
    let data: any = null;
    let status = 200;

    if (url.match(/^\/notes$/) && method === "get") {
        data = [...mockNotes].reverse();
    } 
    else if (url.match(/^\/notes$/) && method === "post") {
        const newNote = JSON.parse(config.data as string);
        newNote.id = Date.now().toString();
        // Just mock a current date
        newNote.date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
        mockNotes.push(newNote);
        data = newNote;
    }
    else if (url.match(/^\/notes\/(.+)$/) && method === "put") {
        const id = url.split("/").pop();
        const updatedNote = JSON.parse(config.data as string);
        mockNotes = mockNotes.map(n => n.id === id ? { ...n, ...updatedNote } : n);
        data = updatedNote;
    }
    else if (url.match(/^\/notes\/(.+)$/) && method === "delete") {
        const id = url.split("/").pop();
        mockNotes = mockNotes.filter(n => n.id !== id);
        data = { success: true };
    } else {
        status = 404;
        data = { error: "Not found" };
    }

    const response: AxiosResponse = {
        data,
        status,
        statusText: status === 200 ? "OK" : "Error",
        headers: {},
        config: config as InternalAxiosRequestConfig,
        request: {}
    };
    return response;
  };
}
