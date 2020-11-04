import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Note = (props) => {
  const onHandleEdit = () => {
    return props.onHandleEdit(props.note);
  };
  const onHandleDelete = () => {
    return props.onHandleDelete(props.note);
  };
  return (
    <div
      className="note"
      style={{
        background: props.note.color,
        maxWidth: "140px",
        display: "inline-block",
        color: "white",
        padding: "16px",
        borderRadius: "4px",
      }}
    >
      <FontAwesomeIcon icon={faTrash} onClick={onHandleDelete} />
      <FontAwesomeIcon icon={faEdit} onClick={onHandleEdit} />

      {props.note.text}
    </div>
  );
};

export default Note;
