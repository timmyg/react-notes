import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Note.css";

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
      }}
    >
      <FontAwesomeIcon
        className="action delete"
        size="xs"
        icon={faTrash}
        onClick={onHandleDelete}
      />
      <FontAwesomeIcon
        className="action edit"
        size="xs"
        icon={faEdit}
        onClick={onHandleEdit}
      />

      {props.note.text}
    </div>
  );
};

export default Note;
