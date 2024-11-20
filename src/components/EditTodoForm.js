import React, { useState } from "react";

function EditTodoForm({ todo, updateTodo, toggleEdit }) {
  const [input, setInput] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      updateTodo(todo.id, input); // Update the todo text
      toggleEdit(); // Exit the edit mode
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Edit your todo"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={toggleEdit}>
        Cancel
      </button>
    </form>
  );
}

export default EditTodoForm;
