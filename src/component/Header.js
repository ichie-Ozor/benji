import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        // <div className='bg-gradient-to-r from-[#00004d] from-60% via-gray-400 via-75% to-pink-500 to-90% h-[17vh] w-full'>
        <div className='bg-gradient-to-r from-[#88a890] from-60% via-[#a4a890]  via-75% to-[#ad9490] to-90% h-[17vh] w-full'>
            <div className='flex space-x-2 sm:space-x-4 text-white font-bold justify-end items-center mr-2 sm:mr-5 h-full text-sm sm:text-lg'>
                <NavLink to={'/home'} className='no-underline'>
                    <div className='hover:ring-[#a95b4c]/50 hover:ring-1 text-black cursor-pointer m-2 px-3 py-2 rounded hover:scale-110 transition hover:duration-700 hover:gray-500 ease-in-out'>Create Bio</div>
                </NavLink>
                <NavLink to={'/home/manual'} className='no-underline'>
                    <div className='hover:ring-[#a95b4c]/50 hover:ring-1 text-black cursor-pointer m-2 px-3 py-2 rounded hover:scale-110 transition hover:duration-700 hover:gray-500 ease-in-out'>Manual</div>
                </NavLink>
                <NavLink to={'/home/event'} className='no-underline'>
                    <div className='hover:ring-[#a95b4c]/50 hover:ring-1 text-black cursor-pointer m-2 px-3 py-2 rounded hover:scale-110 transition hover:duration-700 hover:gray-500 ease-in-out'>Event</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header


