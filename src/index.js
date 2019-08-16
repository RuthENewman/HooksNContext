import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  const addNote = event => {
    event.preventDefault();
    setNotes([...notes, { title }]);
    setTitle("");
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <div>
          <h3>{note.title}</h3>
        </div>
      ))}
      <p>Add a note</p>
      <form onSubmit={addNote}>
        <input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

ReactDOM.render(<NoteApp />, document.getElementById("root"));

serviceWorker.unregister();
