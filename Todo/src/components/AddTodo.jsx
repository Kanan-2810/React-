import { useRef } from "react";
import { BiSolidMessageRoundedAdd } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function AddTodo({ onNewItem, onDeleteAllItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const TodoName = todoNameElement.current.value;
    const TodoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(TodoName, TodoDate);
  };

  return (
    <form className="row p-1" id="row1" onSubmit={handleAddButtonClicked}>
      <div className="col-4">
        <input
          type="text"
          placeholder="Enter the task"
          id="t1"
          ref={todoNameElement}
        ></input>
      </div>
      <div className="col-2">
        <input type="date" id="d1" ref={todoDateElement}></input>
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success" id="b1">
          <BiSolidMessageRoundedAdd />
        </button>
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-danger"
          id="b1"
          onClick={onDeleteAllItem}
        >
          <MdDelete />
        </button>
      </div>
    </form>
  );
}
export default AddTodo;
