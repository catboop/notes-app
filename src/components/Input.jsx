import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Input({ updateNotes, selectedNote }) {
  // add new note
  async function addNewNote() {
    const notes = await axios.post("/api/notes", { title: "", text: "" });
    updateNotes(notes.data.sort((a, b) => b.id - a.id));
  }

  // delete a note
  async function deleteNote() {
    const notes = await axios.delete(`/api/notes/${selectedNote.id}`);
    updateNotes(notes.data.sort((a, b) => b.id - a.id));
  }

  return (
    <div id="input-section">
      <div className="icon">
        <FontAwesomeIcon
          icon={faPlusCircle}
          size="lg"
          color="darkslategrey"
          onClick={addNewNote}
        />
      </div>
      <div className="icon">
        <FontAwesomeIcon
          icon={faMinusCircle}
          size="lg"
          color="lightslategrey"
          onClick={deleteNote}
        />
      </div>
    </div>
  );
}
