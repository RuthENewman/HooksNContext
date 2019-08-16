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
        <div key={note.title}>
          <h4>{note.title} </h4>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>X</button>
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

// const CounterApp = props => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState("");
//
//   useEffect(() => {
//     console.log("this should only run once");
//   }, []);
//
//   useEffect(
//     () => {
//       console.log("useEffect ran");
//       document.title = count;
//     },
//     [count]
//   );
//
//   return (
//     <div>
//       <p>
//         {" "}
//         The current {text || "count"} is {count}.
//       </p>
//       <div>
//         <button onClick={() => setCount(count + 1)}>+1</button>
//         <button onClick={() => setCount(count - 1)}>-1</button>
//         <button onClick={() => setCount(props.count)}>Reset</button>
//       </div>
//       <div>
//         <label htmlFor="text">Change the text from '{text || "count"}' </label>
//         <input
//           id="text"
//           type="text"
//           value={text}
//           onChange={event => setText(event.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

ReactDOM.render(<NoteApp />, document.getElementById("root"));

serviceWorker.unregister();
