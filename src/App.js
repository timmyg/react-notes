import React, { useState } from "react";
import "./App.css";

function App() {
  const [newNote, setNewNote] = useState({ text: "" });
  const [notes, setNotes] = useState([]);

  const handleNewNote = (event) => {
    setNewNote({ text: event.currentTarget.value });
  };

  const onSubmit = (event) => {
    console.log("onsubnit");
    event.preventDefault();
    let notesTemp = [...notes];
    notesTemp.push({ text: newNote });
    setNotes(notesTemp);
    setNewNote({ text: "" });
    // event.currentTarget.reset();
  };

  // const toggleSelectedUser = (email) => {
  //   let userEmailsSelectedTemp = [...userEmailsSelected];
  //   const alreadySelected = userEmailsSelectedTemp.some((e) => e === email);
  //   if (alreadySelected) {
  //     userEmailsSelectedTemp = userEmailsSelectedTemp.filter((e) => e !== email);
  //   } else {
  //     userEmailsSelectedTemp.push(email);
  //   }
  //   setUserEmailsSelected(userEmailsSelectedTemp);
  // };

  return (
    <div className="App">
      <header className="App-header">Notes</header>
      <form onSubmit={onSubmit}>
        <input
          autofocus="true"
          type="text"
          name="note"
          placeholder="Add a note"
          value={newNote.text}
          onChange={handleNewNote}
        />
        <button>Save</button>
      </form>
      <section className="notes">
        {/* {Object.keys(notes).map((key) => (
          <div
            key={key}
            index={key}
            details={this.state.fishes[key]}
            addToOrder={this.addToOrder}
          />
        ))} */}
      </section>
    </div>
  );
}

export default App;
