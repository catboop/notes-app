import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Card({ note, openNote }) {
  function select() {
    openNote(note);
  }

  return (
    <div className="card" onClick={select}>
      <div className="title">{note.title}</div>
      <div className="preview">{note.text.slice(note.title.length)}</div>
      <div className="time">
        Last updated {moment(note.updated_at).fromNow()}
      </div>
    </div>
  );
}
