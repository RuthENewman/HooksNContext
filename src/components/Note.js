import React, { useContext } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();
  return (
    <div>
      <h4>{note.title} </h4>
      <p>{note.body}</p>
      <p>
        {position.x}, {position.y}
      </p>
      <button
        onClick={() => dispatch({ type: "REMOVE_NOTE", title: note.title })}
      >
        X
      </button>
    </div>
  );
};

export { Note as default };
