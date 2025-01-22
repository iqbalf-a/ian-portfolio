import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className='flex justify-between pt-4 items-center px-20'>
            <div className='flex items-center gap-2'>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-yellow-500 transition-colors text-white rounded-full">
                    <p className='font-semibold'>i</p>
                </div>
                <div className='text-sm'>
                    <p className='font-semibold text-gray-800'>iann</p>
                    <p className='text-gray-700'>Banyuwangi</p>
                </div>
            </div>

            <ul className='flex justify-center font-semibold gap-16 text-gray-600 text-sm items-center'>
                <li><Link to="/" className='hover:text-gray-800'>About</Link></li>
                <li><Link to="/portfolio" className='hover:text-gray-800'>Projects</Link></li>
                <li><Link to="/journey" className='hover:text-gray-800'>Journey</Link></li>
                <li><Link to="/contact" className='hover:text-gray-800'>Contact</Link></li>
                <li>
                    <Link to="/hire" className='px-6 py-3 rounded-lg text-white text-sm hover:bg-yellow-500 hover:text-white transition-colors hover:border-yellow-500 bg-blue-500'>
                        Hire Me
                    </Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar
