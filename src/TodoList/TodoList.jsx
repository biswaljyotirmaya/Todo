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
            className="mt-10 pt text-center shadow-md   border border-black font-semibold text-base py-1 rounded px-4  text-black hover:shadow-black"
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
