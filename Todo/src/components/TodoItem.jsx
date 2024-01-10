function TodoItem({ TodoName, TodoDate, onDeleteItem }) {
  return (
    <div className="row" id="row">
      <div className="col-4" id="col1">
        {TodoName}
      </div>
      <div className="col-4" id="col2">
        {TodoDate}
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          id="b2"
          onClick={() => onDeleteItem(TodoName)}
        >
          Delete
        </button>
      </div>
      <div className="col-1">
        <button type="button" className="btn btn-secondary" id="b3">
          Update
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
