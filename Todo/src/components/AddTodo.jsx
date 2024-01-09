import { useState } from "react";

function AddTodo({ onNewItem, onDeleteAllItem }) {
  const [TodoName, setTodoName] = useState();
  const [TodoDate, setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(TodoName, TodoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="row p-1" id="row1">
      <div className="col-4">
        <input
          type="text"
          placeholder="Enter the task"
          id="t1"
          value={TodoName}
          onChange={handleNameChange}
        ></input>
      </div>
      <div className="col-2">
        <input
          type="date"
          id="d1"
          onChange={handleDateChange}
          value={TodoDate}
        ></input>
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success"
          id="b1"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          id="b1"
          onClick={onDeleteAllItem}
        >
          DeleteAll
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
