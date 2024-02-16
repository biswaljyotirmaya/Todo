// TodoInput.js
import React from 'react';

const TodoInput = ({ item, setItem, addItem }) => {
  return (
    <>
      <input
        type="text"
        className="w-80 h-10 ml-4 placeholder:text-center rounded focus:outline-none focus:caret-pink-500 pl-3 placeholder:text-xl"
        placeholder="Enter task to add in the list"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      {item && (
        <button
          className="border rounded items-center text-sky-400 text-sm border-sky-400 px-2 py-1"
          onClick={addItem}
        >
          Add Task
        </button>
      )}
    </>
  );
}

export default TodoInput;
