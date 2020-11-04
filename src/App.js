import React, { useState } from "react";
import Note from "./components/Note";
import "./App.css";

function App() {
  const [note, setNote] = useState({ text: "", color: "" });
  const [notes, setNotes] = useState([]);
  const [isEditMode, setEditMode] = useState(false);

  const availableColors = [
    { hex: "#1DE9B6" },
    { hex: "#0097A7" },
    { hex: "#7C4DFF" },
    { hex: "#E65100" },
    { hex: "#455A64" },
  ];

  const handleColorChange = (event) => {
    setNote({ ...note, color: event.currentTarget.value });
  };

  const handleNewNote = (event) => {
    setNote({ ...note, text: event.currentTarget.value });
  };

  const onHandleEdit = (note) => {
    setNote({ ...note });
    setEditMode(true);
  };

  const onCancel = () => {
    setEditMode(false);
    setNote({ text: "", color: "" });
  };

  const onHandleDelete = (note) => {
    let notesTemp = [...notes];
    const i = notesTemp.findIndex((n) => n.id === note.id);
    notesTemp.splice(i, 1);
    setNotes(notesTemp);
    setEditMode(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let notesTemp = [...notes];
    if (isEditMode) {
      const i = notesTemp.findIndex((n) => n.id === note.id);
      notesTemp[i] = note;
    } else {
      note.id = Math.random().toString(36).substring(7);
      notesTemp.push(note);
    }
    setNotes(notesTemp);
    setNote({ text: "", color: "" });
    setEditMode(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isEditMode ? "Edit Note" : "Add a Note"}
      </header>
      <form onSubmit={onSubmit}>
        <input
          autoFocus={true}
          type="text"
          name="note"
          placeholder="Grab some mustard"
          value={note.text}
          onChange={handleNewNote}
          required
        />
        {availableColors.map((color) => (
          <div key={color.hex}>
            <input
              type="radio"
              id={color.hex}
              name="color"
              checked={color.hex === note.color}
              value={color.hex}
              onChange={handleColorChange}
              required
            />
            <label
              style={{
                background: color.hex,
                height: "35px",
                width: "35px",
                display: "inline-block",
              }}
              htmlFor={color.hex}
            ></label>
          </div>
        ))}
        {isEditMode ? (
          <div>
            <button onClick={onCancel}>Cancel</button>
            <button type="submit">Update</button>
          </div>
        ) : (
          <button type="submit">Add</button>
        )}
      </form>
      <section className="notes">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onHandleEdit={onHandleEdit}
            onHandleDelete={onHandleDelete}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
