import React, { useState } from 'react';
import navLogo from '../../../assets/Book Vibe logo with sparkles-Photoroom.png'
import { NavLink } from 'react-router';
import '../../../App.css'
import { RiCloseLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const links = (
        <>
            <li>
                <NavLink to='/' className={({isActive}) => isActive ? 'text-green-500 border border-green-500 rounded-2xl px-4 py-2' : 'text-gray-600 px-4 py-2'}>Home</NavLink>
            </li>
            <li>
                <NavLink to='/books' className={({isActive}) => isActive ? 'text-green-500 border border-green-500 rounded-2xl px-4 py-2' : 'text-gray-600 px-4 py-2'}>Listed Books</NavLink>
            </li>
            <li>
                <NavLink to='/read' className={({isActive}) => isActive ? 'text-green-500 border border-green-500 rounded-2xl  px-4 py-2' : 'text-gray-600 px-4 py-2'}>Page to Read</NavLink>
            </li>
        </>
    )
    return (
        <header className='custom-font'>
            <nav className='flex justify-between items-center w-11/12 lg:w-10/12 mx-auto'>
                <div className='flex gap-3 items-center'>
                    {
                        open ? <RiCloseLine onClick={()=> setOpen(!open)} className='md:hidden text-2xl cursor-pointer text-gray-600'></RiCloseLine> : <GiHamburgerMenu onClick={()=> setOpen(!open)} className='md:hidden cursor-pointer text-2xl text-gray-600'></GiHamburgerMenu>
                    }
                    <ul className={`lg:hidden absolute top-24 shadow-[0_2px_7px_rgba(0,0,0,0.1)] p-5 rounded-2xl space-y-4 ${open ? 'block' : 'hidden'}`}>
                        {
                            links
                        }
                    </ul>
                    <img className='w-40 cursor-pointer' src={navLogo} alt={navLogo}/>
                </div>
                <ul className='md:flex hidden gap-6'>
                    {
                        links
                    }
                </ul>
                <div className='flex items-center gap-4'>
                    <button className='bg-green-500 px-2 py-1 md:px-4 md:py-2 rounded-2xl text-white hover:bg-green-700 transition duration-300 cursor-pointer'>Sign In</button>
                    <button className='bg-cyan-500 rounded-2xl text-white px-2 py-1 md:px-4 md:py-2 hover:bg-cyan-700 transition duration-300 cursor-pointer'>Sign Up</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;