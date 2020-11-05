import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [note, setNote] = useState({ text: "", color: "", key: "" });
  const [notes, setNotes] = useState({});
  const [isEditMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((response) => {
        let notes = {};
        response.map((note) => {
          return (notes[note.key] = note);
        });
        setNotes(notes);
        setIsLoading(false);
      });
  }, []);

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
    let notesTemp = { ...notes };
    delete notesTemp[note.key];
    setNotes(notesTemp);
    setEditMode(false);
    fetch(`/api/notes`, {
      method: "DELETE",
      body: JSON.stringify(note),
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let notesTemp = { ...notes };
    if (isEditMode) {
      notesTemp[note.key] = note;
      fetch(`/api/notes`, {
        method: "PUT",
        body: JSON.stringify(note),
      });
    } else {
      note.key = Math.random().toString(36).substring(7);
      notesTemp[note.key] = note;
      setNotes(notesTemp);
      resetNote();
      const response = await fetch(`/api/notes`, {
        method: "POST",
        body: JSON.stringify(note),
      });
      const newNote = await response.json();
      notesTemp[note.key] = newNote;
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
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;
