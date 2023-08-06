import React, { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa';

import { Link } from "react-scroll";


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    }
  ]
  return (
    <>

      <div className='flex justify-between px-4 bg-black items-center w-full h-20 text-white fixed'>
        <div>
          <h1 className='font-signature text-5xl ml-2'>Abhay <span className='hidden md:inline'>Gautam</span></h1>
        </div>
        <ul className=' hidden md:flex'>
          {links.map(({id,link}) => (
            <li key={id} className='cursor-pointer px-4 capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
              
             <Link to={link} smooth duration={500}>{link}</Link>
              
              
              </li>
          ))}
        </ul>



        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>



        {nav && (
          <ul className='flex flex-col justify-center items-center absolute text-gray-500 bg-gradient-to-b from-black to-gray-800 left-0 top-0 w-full h-screen'>


            {links.map(({id,link}) => (
              <li key={id} className='px-4 cursor-pointer py-6 capitalize text-4xl hover:scale-105 duration-200'>
               <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
              </li>
            ))}






          </ul>
        )


        }








      </div >
    </>
  )
}

export default Navbar;
