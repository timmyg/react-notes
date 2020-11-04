import "./List.css";
import Note from "./Note";

const List = (props) => {
  if (props.notes.length) {
    return props.notes.map((note) => (
      <Note
        key={note.id}
        note={note}
        onHandleEdit={props.onHandleEdit}
        onHandleDelete={props.onHandleDelete}
      />
    ));
  } else {
    return <div className="empty">No notes yet</div>;
  }
};

export default List;
