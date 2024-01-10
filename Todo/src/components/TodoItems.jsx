import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteItem }) => {
  console.log("TodoItems: ", todoItems);

  return (
    <>
      {todoItems.length !== 0 ? (
        <div className="container" id="con">
          {todoItems.map((items) => (
            <TodoItem
              key={items.name}
              TodoName={items.name}
              TodoDate={items.date}
              onDeleteItem={onDeleteItem}
            ></TodoItem>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default TodoItems;
