import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
function App() {
  // const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDate) => {
    console.log(`New item Added: ${itemName} and Date: ${itemDate}`);
    const newTdoItems = [
      ...todoItems,
      {
        name: itemName,
        date: itemDate,
      },
    ];
    setTodoItems(newTdoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };
  const handleDeleteAllItem = () => {
    setTodoItems([]);
  };
  return (
    <>
      <center className="Todo Container">
        <AppName />
        <AddTodo
          onNewItem={handleNewItem}
          onDeleteAllItem={handleDeleteAllItem}
        />
      </center>
      <center className="Todo Container" id="c2">
        <TodoItems
          todoItems={todoItems}
          onDeleteItem={handleDeleteItem}
        ></TodoItems>
      </center>
    </>
  );
}

export default App;
