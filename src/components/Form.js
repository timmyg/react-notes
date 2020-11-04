import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Form.css";

const Form = (props) => {
  const availableColors = [
    { hex: "#2196F3" },
    { hex: "#0097A7" },
    { hex: "#6A1B9A" },
    { hex: "#E65100" },
    { hex: "#455A64" },
  ];
  const hasNoteText = props.note.text.length;
  const hasColor = props.note.color.length;
  console.log(props.note.color);
  return (
    <div>
      <header>
        <h3>
          {props.isEditMode ? "Edit Note" : "Add a Note"}
          {hasNoteText ? (
            <FontAwesomeIcon className="check" size="xs" icon={faCheck} />
          ) : (
            ""
          )}
        </h3>
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
        <header>
          <h3>
            Choose Color
            {hasColor ? (
              <FontAwesomeIcon className="check" size="xs" icon={faCheck} />
            ) : (
              ""
            )}
          </h3>
        </header>
        <div className="color-wrappers">
          {availableColors.map((color) => (
            <div key={color.hex} className="color-wrapper">
              <input
                type="radio"
                id={color.hex}
                name="color"
                checked={color.hex === props.note.color ? "checked" : ""}
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
            <button
              type="submit"
              data-testid="add"
              className={`${hasNoteText && hasColor ? "ready" : ""}`}
            >
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
