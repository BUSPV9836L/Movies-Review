import React, { useState } from 'react'
import {FcSearch} from 'react-icons/fc';
import {RxCross2} from 'react-icons/rx';
import {GiHamburgerMenu} from 'react-icons/gi';

export const NavBar = () => {
    const [nav,setNav]=useState(false);
    const clickHandler =()=>{
        setNav(!nav);
    }
  return (
    <div className='flex justify-between  h-14 items-center px-1 sm:px-10 md:px-20'>

        <div>
            <h1 className='w-fit sm:text-2xl md:text-3xl font-extrabold text-red-700 shadow-sm shadow-white'>MOVIES REVIEW</h1>
        </div>
        <div>
            <ul className='flex items-center'>
                <li className='mx-2'>
                    <input className='bg-gray-700 rounded-sm  text-center items-center w-[100px] sm:w-[200px]' placeholder='search Movie'/>
                </li>
                <li className='mx-2 cursor-pointer'>
                    <FcSearch size={20}/>
                </li>
                <li className='mx-2 md:hidden'>
                    <GiHamburgerMenu onClick={clickHandler} size={20}/>
                </li>
            </ul>
        </div>
        <div onClick={clickHandler} className={
            nav?'hidden md:flex'
            :'flex bg-black/80 w-full h-screen absolute left-0 top-0 z-10'}>
             <ul className={nav?'flex text-xl':'flex-col mt-10 w-fit'}>
                <li className={nav?'hidden':'mx-4 text-xl cursor-pointer w-full text-red-700'}><RxCross2 size={30}/></li>
                <li className={nav?'mx-4 text-xl cursor-pointer':'mx-4 my-4 text-xl cursor-pointer'}>about</li>
                <li className={nav?'mx-4 text-xl cursor-pointer':'mx-4 my-4 text-xl cursor-pointer'}>hollywood</li>
                <li className={nav?'mx-4 text-xl cursor-pointer':'mx-4 my-4 text-xl cursor-pointer'}>bollywood</li>
             </ul>
        </div>
    </div>
  )
}
