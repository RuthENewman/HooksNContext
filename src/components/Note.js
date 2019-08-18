import React from "react";

const Note = ({ note, removeNote }) => {
  return (
    <div>
      <h4>{note.title} </h4>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>X</button>
    </div>
  );
};

export { Note as default };
