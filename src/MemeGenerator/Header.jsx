import React from 'react'
import face from '/troll-face.png'

const Header = () => {
  return (
    <div className='h-[65px] w-[550px] bg-gradient-to-r from-[rgb(102,35,138)] to-[rgb(166,39,210)] flex justify-between items-center px-8'>
        <div className='flex justify-center items-center'>
        <img src={face} className='h-[31.31px] w-[26.22px]'/>
        <p className='text-white text-xl pl-2 font-medium'>Meme Generator</p>
        </div>
        <p className='text-white'>React Course - Project 3</p>
    </div>
  )
}

export default Header
