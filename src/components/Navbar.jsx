import { NavLink } from 'react-router-dom';
import { FaShoppingBag } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
    
    return (
        <nav className='text-white bg-red-700 max-w-screen-2xl mx-auto'>
            <div className="mx-auto max-w-screen-xl">
                <div className="flex justify-between">
                    <div className="py-4">
                        <a href="" className="text-2xl mx-3">
                            React Cart
                        </a>
                    </div>
                    <div className=" py-5">
                        <a href="" className="text-lg mx-5">Home</a>
                        <a href="" className="text-lg mx-5">Products</a>
                        <a href="" className="text-lg">Contact</a>
                    </div>
                    <div className=" mx-4">
                        <a href="" className="text-lg mx-5"><FaShoppingBag /></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
