import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./components/Input";
import List from "./components/List";
import Note from "./components/Note";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({});

  // fetches all notes upon initial render
  useEffect(() => {
    async function fetch() {
      const res = await axios.get("/api/notes");
      setNotes(res.data.sort((a, b) => b.id - a.id));
      setSelectedNote(res.data[0]);
    }
    fetch();
  }, []);

  return (
    <div id="container">
      <header>
        <h1>Code Chrysalis Notes</h1>
      </header>

      <Input
        updateNotes={(notes) => {
          setNotes(notes);
          setSelectedNote(notes[0]);
        }}
        selectedNote={selectedNote}
      />

      <div id="notes-section">
        <div id="list">
          <List
            notes={notes}
            openNote={(selectedNote) => setSelectedNote(selectedNote)}
          />
        </div>

        <div id="note">
          {notes.map((note) => (
            <Note
              note={note}
              selectedNote={selectedNote}
              updateNotes={(notes) => {
                setNotes(notes);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
