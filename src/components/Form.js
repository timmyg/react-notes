import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Form.css";

const Form = (props) => {
  const availableColors = [
    { hex: "#e53935" },
    { hex: "#d81b60" },
    { hex: "#8e24aa" },
    { hex: "#5e35b1" },
    { hex: "#005cb2" },
    { hex: "#00acc1" },
    { hex: "#fdd835" },
    { hex: "#fb8c00" },
  ];
  const hasNoteText = props.note.text.length;
  const hasColor = props.note.color.length;
  // console.log(props.note.color);
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
        <div>
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
              <button type="submit" className="ready">
                Update
              </button>
              <button type="reset" onClick={props.onCancel}>
                Cancel
              </button>
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
