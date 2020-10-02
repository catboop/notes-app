import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

export default function Note({ selectedNote, updateNotes, note }) {
  const [textArea, setTextArea] = useState("");

  useEffect(() => {
    setTextArea(`${note.text}`);
  }, [selectedNote]);

  // adds new note to db and returns all notes, passes all notes to parent App
  async function handleChange(e) {
    setTextArea(e.target.value);
    // takes first line of text and assigns to title
    const title = textArea.split("\n")[0];
    // takes remaining text and assigns to text
    const text = title + textArea.slice(title.length);
    const notes = await axios.patch(`/api/notes/${selectedNote.id}`, {
      title: title,
      text: text,
      updated_at: moment().format(),
    });
    updateNotes(notes.data.sort((a, b) => b.id - a.id));
  }

  return (
    <>
      {selectedNote.id === note.id && (
        <div className="note-section">
          <textArea
            className="text-area"
            value={textArea}
            onInput={handleChange}
          >
            {textArea}
          </textArea>
        </div>
      )}
    </>
  );
}
