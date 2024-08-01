import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='bg-gray-700 flex justify-between px-10 py-5 text-xl text-white'>
        <div>
            <h1>Brand</h1>
        </div>
        <div>
            <ul className='flex gap-10'>
                <li>home</li>
                <li>about</li>
                <li>serivce</li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar