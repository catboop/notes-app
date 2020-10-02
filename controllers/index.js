const express = require("express");
const router = express.Router();
const knex = require("../models/index");

/* fetch all notes from db */
router.get("/notes", (req, res) => {
  knex
    .raw("select * from notes")
    .then((notes) => {
      res.json(notes.rows);
    })
    .catch((err) => console.log(err));
});

// add new note
router.post("/notes", (req, res) => {
  knex
    .raw("insert into notes (title, text) values (?, ?)", [
      req.body.title,
      req.body.text,
    ])
    .then(() => {
      knex.raw("select * from notes").then((notes) => {
        res.json(notes.rows);
      });
    })
    .catch((err) => console.log(err));
});

// delete note
router.delete("/notes/:id", (req, res) => {
  knex
    .raw("delete from notes where id = ?", [req.params.id])
    .then(() => {
      knex.raw("select * from notes").then((notes) => {
        res.json(notes.rows);
      });
    })
    .catch((err) => console.log(err));
});

// update note
router.patch("/notes/:id", (req, res) => {
  knex
    .raw("update notes set title = ?, text = ?, updated_at = ? where id = ?", [
      req.body.title,
      req.body.text,
      req.body.updated_at,
      req.params.id,
    ])
    .then(() => {
      knex.raw("select * from notes").then((notes) => {
        res.json(notes.rows);
      });
    })
    .catch((err) => console.log(err));
});

// serve html file
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html")).catch((err) => {
    res.json({ err });
  });
});

module.exports = router;
