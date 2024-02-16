import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const TodoItem = ({ item, deleteItem, editItem, itemsList }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(item);
  const [todo, setTodo] = useState(true);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    editItem(item, editedText);
    setEditMode(false);
    setEditedText(editedText);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="w-full text-[0.8rem]">
      <div className="my-1 flex justify-around items-center">
        <div className="w-1/12 pt text-center font-semibold">
          {itemsList.indexOf(item) + 1}
        </div>

        {editMode ? (
          <div className="h-full w-[70%] border-none p-2 overflow-hidden text-lg">
            <input
              type="text"
              className="outline-dashed w-[80%]"
              value={editedText.length > 0 ? editedText : "Enter Something"}
              onChange={handleChange}
              autoFocus
              onBlur={handleSave}
              onKeyDown={handleKeyDown}
            />
            <button
              className="border shadow-md shadow-yellow-900 border-sky-400 font-semibold px-2 mx-2 rounded-md hover:bg-sky-100 text-basepy "
              onClick={() => setEditMode(false)}
            >
              Done
            </button>
          </div>
        ) : (
          <div className="w-7/12 pt text-center font-semibold text-base">
            {editedText}
          </div>
        )}
        {todo ? (
          <button
            className="w-2/12 pt text-center border shadow-md shadow-yellow-700 border-yellow-500 font-semibold text-md py-1  rounded px-4 hover:bg-yellow-200"
            onClick={() => {
              setTodo(!todo);
            }}
          >
            Todo
          </button>
        ) : (
          <button
            className="w-2/12 pt text-center shadow-md shadow-green-700  border border-green-500 font-semibold text-md py-1 rounded px-4 hover:bg-green-200"
            onClick={() => {
              setTodo(!todo);
            }}
          >
            Completed
          </button>
        )}
        <div className="w-1/12 pt text-center px-3">
          <button
            className="border py-1 px-2 flex justify-center border-sky-300 shadow-sky-900 rounded-sm text-blue-600 shadow-md hover:bg-sky-200"
            onClick={handleEdit}
          >
            <MdEdit size={20} />
          </button>
        </div>
        <div className="w-1/12 text-center px-3">
          <button
            className="border py-1 flex justify-center border-gray-400 rounded-sm text-gray-400 shadow-md text-center cursor-pointer hover:bg-gray-300 px-2 shadow-gray-500"
            onClick={() => deleteItem(item)}
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TodoItem;
