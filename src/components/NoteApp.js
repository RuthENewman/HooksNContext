import React, { useState, useEffect, useReducer } from "react";
import notesReducer from "../reducers/notes";
import Note from "./components/Note";

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = event => {
    event.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      title,
      body
    });
    setTitle("");
    setBody("");
  };

  const removeNote = title => {
    dispatch({
      type: "REMOVE_NOTE",
      title
    });
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes) {
      dispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(
    () => {
      localStorage.setItem("notes", JSON.stringify(notes));
    },
    [notes]
  );

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <Note key={note.title} note={note} removeNote={removeNote} />
      ))}
      <p>Add a note</p>
      <form onSubmit={addNote}>
        <input
          placeholder="Title"
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <textarea
          value={body}
          placeholder="Add your note"
          onChange={event => setBody(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export { NoteApp as default };
