import { Link } from 'react-router-dom';
import { IoMenuSharp, IoCart, IoClose } from 'react-icons/io5';
import { useState } from 'react';

const Navbar = () => {

    const [sidebarOpen, setSidebar] = useState(false);
    
    return (
        <nav className='bg-red-700 flex justify-between px-8 py-6 text-white'>
            <section className='flex item-center gap-4'>
                {/* Menu Icon */}
                <IoMenuSharp className='text-3xl'></IoMenuSharp>
                {/* Logo */}
                <a href="/" className='text-2xl font-bold'>
                    React Cart
                </a>
            </section>

            {/* Sidebar mobile menu */}
            <div className='fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0'>
                <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-56">
                    <IoClose className='text-3xl cursor-pointer mb-5'/>
                    <a href="">Home</a>
                    <a href="">Products</a>
                    <a href="">Contact</a>
                </section>
            </div>

            <section className="">
                {/* Cart Icon */}
                <IoCart className='text-2xl'></IoCart>
            </section>
        </nav>
    )
}

export default Navbar
