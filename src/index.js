import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = event => {
    event.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle("");
    setBody("");
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem("notes"));

    if (notesData) {
      setNotes(notesData);
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

const Note = ({ note, removeNote }) => {
  useEffect(() => {
    console.log("Setting up effect");

    return () => {
      console.log("Cleaning up effect");
    };
  }, []);

  return (
    <div>
      <h4>{note.title} </h4>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>X</button>
    </div>
  );
};

ReactDOM.render(<NoteApp />, document.getElementById("root"));

serviceWorker.unregister();
