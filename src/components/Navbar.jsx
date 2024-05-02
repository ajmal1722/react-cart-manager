import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='text-white bg-red-700 max-w-screen-2xl mx-auto py-5'>
            <div className="mx-auto max-w-screen-xl bg-blue-400">
                <div className="d-flex">
                    <a href="" className="text-2xl mx-3">
                        React Cart
                    </a>
                    <div className="">
                        <a href="" className="text-lg mx-5">Home</a>
                        <a href="" className="text-lg">Products</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
