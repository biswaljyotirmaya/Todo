import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";


const Todo = () => {
    const [itemsList, setItemsList] = useState(['Thing 1', 'Thing 2']);
    const [item, setItem] = useState("");
    const addItem = () => {
        setItemsList(prevState => [...prevState, item]);
        setItem("");
    };
    const deleteItem = (item) => {
        setItemsList(prevState => prevState.filter(existingItem => existingItem !== item));
    };
    const list = itemsList.map(item => (
        <p key={item} className='text-white text-xl mb-2 font-semibold flex justify-between'>
            {item}<RxCross2 className='mr-6 hover:h-6 w-6 cursor-pointer' onClick={() => deleteItem(item)}/>
        </p>
    ));

    return (
        <div className='grid place-items-center  h-[100vh] bg-black'>
        <div className='bg-blue-600 w-96 p-4 rounded-xl'>
            <h3 className='text-4xl font-bold text-white text-center mt-4'>TO DO LIST</h3>
            <p className='text-center text-white font-bold mb-4'>It will help you to remember things</p>
            <input
                type="text"
                className='w-80 h-10 ml-4 placeholder:text-center rounded focus:outline-none focus:caret-pink-500 caret:ml-4 pl-3'
                placeholder='Enter task to add in the list'
                value={item}
                onChange={(e) => {
                    setItem(e.target.value);
                }}
            />
            
    {item && <button
    className='text-white bg-black rounded-lg text-xl mt-4 text-center w-full h-8 font-semibold'
    onClick={item ? addItem : undefined}>
    Add item into list
     </button>}
          

            <hr className='bg-white mt-6' />
            {list.length !=0 ? <p className='text-white font-bold text-2xl mt-4 text-center'>Task to do</p> : <p className='text-white font-bold text-xl mt-4 text-center'>You don't have any task to do</p>}
            <div className='mt-2'>{list}</div>
        </div>
        </div>
    );
};

export default Todo;
