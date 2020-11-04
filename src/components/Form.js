import "./Form.css";

const Note = (props) => {
  const availableColors = [
    { hex: "#1DE9B6" },
    { hex: "#0097A7" },
    { hex: "#6A1B9A" },
    { hex: "#E65100" },
    { hex: "#455A64" },
  ];
  return (
    <div>
      <header className="App-header">
        <h1>{props.isEditMode ? "Edit Note" : "Add a Note"}</h1>
      </header>
      <form onSubmit={props.onSubmit}>
        <input
          autoFocus={true}
          type="text"
          name="note"
          placeholder="Grab some mustard"
          value={props.note.text}
          onChange={props.handleNewNoteText}
          data-testid="note-input"
          required
        />
        <div className="color-wrappers">
          {availableColors.map((color) => (
            <div key={color.hex} className="color-wrapper">
              <input
                type="radio"
                id={color.hex}
                name="color"
                checked={color.hex === props.note.color}
                value={color.hex}
                onChange={props.handleColorChange}
                data-testid="color-input"
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
        </div>
        <div className="buttons">
          {props.isEditMode ? (
            <div>
              <button type="reset" onClick={props.onCancel}>
                Cancel
              </button>
              <button type="submit">Update</button>
            </div>
          ) : (
            <button type="submit" data-testid="add">
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Note;
