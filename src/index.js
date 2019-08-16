import React, { useState } from "react";
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
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <div key={note.title}>
          <h4>{note.title} </h4>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}> X</button>
        </div>
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

ReactDOM.render(<NoteApp />, document.getElementById("root"));

serviceWorker.unregister();
