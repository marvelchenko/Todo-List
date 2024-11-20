import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function Todo({ todo, deleteTodo, toggleEdit }) {
  return (
    <div className="todo">
      <p>{todo.text}</p>
      <button onClick={toggleEdit}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button onClick={() => deleteTodo(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default Todo;
