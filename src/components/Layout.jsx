import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import {  FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Layout = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-[#5c5c4c] opacity-50 p-5 border-bottom-2 border-white fixed top-0 right-0 left-0 z-10">
                <nav className="border-spacing-2">
                    <div className='flex justify-between p-5'>
                        <img src={logo} alt="" className='w-36 rounded-md   md:ml-20 bg-[rgb(252,250,247)]' />

                        {/* <div className='flex'>
                            <FaSearchDollar className="md:ml-20 mr-5 font-bold opacity-100 text-[#2CE584] text-5xl" />
                            <Link to="/" className="font-bold opacity-100 text-[#2CE584] text-3xl"> SHEBASTOCK</Link>
                        </div>  */}
                        <div className='hidden lg:flex space-x-8  mt-10'>
                            <Link to="/" className="text-white hover:text-[#2CE584] text-xl">Home</Link>
                            <Link to="/about" className="text-white hover:text-[#2CE584] text-xl">About Us</Link>
                            <Link to="/contact" className="text-white hover:text-[#2CE584] text-xl">Contact Us</Link>
                            <Link to="/team" className="text-white hover:text-[#2CE584] text-xl">Team</Link>
                        </div>
                        <div className='hidden lg:flex mr-16 space-x-10 mt-10'> 
                            
                            <Link to="/login" className="text-white hover:text-[#2CE584] rounded-md text-xl">Login</Link>
                            <Link to="/register" className="hover:text-[#2CE584] text-xl text-white">Sign-up</Link>
                        </div>
                        {/* Hamburger Menu Icon */}
                        <div className="lg:hidden flex items-center mr-0 md:mr-20">
                            <button onClick={toggleNav} className="text-[#727574] ">
                                {isNavOpen ? <FaTimes size={36} /> : <FaBars size={36} />}
                            </button>
                        </div>
                    </div>
                    {/* Mobile Navigation Menu */}
                    <div className={`lg:hidden ${isNavOpen ? 'block' : 'hidden'}`}>
                        <div className="flex flex-col bg-[#00180c] p-4  ">
                            <Link to="/" className="text-white hover:text-[#2CE584] text-xl py-2">Home</Link>
                            <Link to="/about" className="text-white hover:text-[#2CE584] text-xl py-2">About Us</Link>
                            <Link to="/contact" className="text-white hover:text-[#2CE584] text-xl py-2">Contact Us</Link>
                            
                            <Link to="/register" className="text-white hover:text-[#2CE584] text-xl py-2">Sign-up</Link>
                            <Link to="/login" className="text-white hover:text-[#2CE584]   text-xl">Login</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="flex-grow p-4 bg-gray-100">
                {children}
            </main>
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
