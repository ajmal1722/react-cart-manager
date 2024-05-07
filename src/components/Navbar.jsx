import { Link, NavLink } from 'react-router-dom';
import { IoMenuSharp, IoCart, IoClose } from 'react-icons/io5';
import { useState } from 'react';
import ViewCart from './ViewCart';
import { view_cart } from '../redux/cart/ViewCartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();
    const isViewCart = useSelector(state => state.viewCart.value);

    const displayCart = () => {
        console.log('button clicked..')
        dispatch(view_cart({ viewCart: !isViewCart }));
    }

    const [sidebarOpen, setSidebar] = useState(false);

    const toggleNavbar = () => {
        setSidebar(prevState => !prevState)
    };

    const activeLInkClass = ({ isActive }) => isActive ?
        'mx-4 text-xl underline underline-offset-[10px]' :
        'mx-4 text-xl'
    
    return (
        <nav className='bg-red-700 flex justify-between px-8 py-6 text-white'>
            <section className='flex item-center gap-4'>
                {/* Menu Icon */}
                <IoMenuSharp className='text-3xl cursor-pointer lg:hidden' onClick={toggleNavbar}>

                </IoMenuSharp>
                {/* Logo */}
                <a href="/" className='text-2xl font-bold'>
                    React Cart
                </a>
            </section>

            {/* Sidebar mobile menu */}
            {sidebarOpen && (
                <div className='fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 '>
                    <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-56">
                        <IoClose className='text-3xl cursor-pointer mb-5 ' onClick={toggleNavbar}/>
                        <a href="">Home</a>
                        <a href="">Products</a>
                        <a href="">Contact</a>
                    </section>
                </div>
            )}

            {/* desktop nav-items */}
            <div className='hidden lg:flex'>
                <NavLink to={'/'} className={activeLInkClass}>Home</NavLink>
                <NavLink to={'/products'} className={activeLInkClass}>Products</NavLink>
                <NavLink to={'/contact'} className={activeLInkClass}>Contact</NavLink>
            </div>

            <button>
                {/* Cart Icon */}
                <IoCart className='text-2xl cursor-pointer' onClick={displayCart}></IoCart>
            </button>

            { isViewCart && (
                <ViewCart/>
            )}
        </nav>
    )
}

export default Navbar
