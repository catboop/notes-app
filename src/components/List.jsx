import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function List({ notes, openNote }) {
  return (
    <div id="list-section">
      <div id="search"></div>
      <div id="card-container">
        {notes.map((note) => (
          <Card
            note={note}
            openNote={(selectedNote) => {
              openNote(selectedNote);
            }}
          />
        ))}
      </div>
    </div>
  );
}
