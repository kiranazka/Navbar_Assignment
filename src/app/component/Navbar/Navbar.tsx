import React from 'react'
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
      <nav className='bg-red-300 h-12 px-4 flex justify-evenly items-center'>
        <div >
          <h1 className='text-2xl font-bold'>
            <a href='#!'>AzkaKiran</a>
          </h1>
        </div>
        <div>
          <ul className='flex space-x-16 font-blod' >
            <li><Link href="/" className='hover:text-red-900'>Home</Link></li>
            <li><Link href="/aboutUs"className='hover:text-red-900'>About Us</Link></li>
            <li><Link href="/project" className='hover:text-red-900'>Project</Link></li>
            <li><Link href="/contectUs"className='hover:text-red-900'>Contect Us</Link></li>

            
          </ul>
        </div>
        <div>
          <ul className='flex space-x-9 text-black-800 font-bold text-1x ' >
            <li><Link href="/Login"className='hover:text-red-900'> Login</Link> </li>
            <li><Link href="/Signup"className='hover:text-red-900'> Signup </Link> </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
