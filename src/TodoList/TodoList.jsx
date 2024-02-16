// TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ itemsList, setItemsList, deleteItem }) => {
  return (
    <div>
      {itemsList.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          deleteItem={deleteItem}
          itemsList={itemsList}
        />
      ))}
      <div className="flex justify-center">
        {itemsList.length > 0 && (
          <button
            className="border rounded-md font-semibold mt-6 border-black p-2 shadow-md shadow-black"
            onClick={() => setItemsList([])}
          >
            Clear all task
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
