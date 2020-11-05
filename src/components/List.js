import "./List.css";
import Note from "./Note";

const List = (props) => {
  if (Object.keys(props.notes).length) {
    return Object.keys(props.notes).map((key) => (
      <Note
        key={key}
        note={props.notes[key]}
        onHandleEdit={props.onHandleEdit}
        onHandleDelete={props.onHandleDelete}
        isLoading={props.isLoading}
      />
    ));
  } else {
    return (
      <div className="empty">
        {props.isLoading ? "Loading..." : "No notes yet"}
      </div>
    );
  }
};

export default List;
