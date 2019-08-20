import React, { useContext, useState, useEffect } from "react";
import NotesContext from "../context/notes-context";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = event => {
      setPosition({
        x: event.pageX,
        y: event.pageY
      });
    };

    console.log("Setting up event");
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
};

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
