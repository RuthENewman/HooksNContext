import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const position = useMousePosition();

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

  return (
    <>
      <p>
        Add a note {position.x} - {position.y}
      </p>
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
    </>
  );
};

export { AddNoteForm as default };
