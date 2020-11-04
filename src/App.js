import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [note, setNote] = useState({ text: "", color: "" });
  const [notes, setNotes] = useState([]);
  const [isEditMode, setEditMode] = useState(false);

  const handleColorChange = (event) => {
    setNote({ ...note, color: event.currentTarget.value });
  };

  const handleNewNoteText = (event) => {
    setNote({ ...note, text: event.currentTarget.value });
  };

  const onHandleEdit = (note) => {
    setNote({ ...note });
    setEditMode(true);
  };

  const onCancel = () => {
    resetNote();
  };

  const resetNote = () => {
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
    resetNote();
  };

  return (
    <div className="row">
      <div className="column note-form">
        <Form
          isEditMode={isEditMode}
          onSubmit={onSubmit}
          note={note}
          handleNewNoteText={handleNewNoteText}
          handleColorChange={handleColorChange}
          onCancel={onCancel}
        />
      </div>
      <div className="column my-notes">
        <List
          notes={notes}
          onHandleEdit={onHandleEdit}
          onHandleDelete={onHandleDelete}
        />
      </div>
    </div>
  );
}

export default App;
