import { easeIn, easeInOut, motion } from 'motion/react'
import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = (
        <div className="flex flex-col md:flex-row gap-6 font-medium text-lg">
            {[
                { to: "/", label: "Home" },
                { to: "/allproducts", label: "All Products" },
                { to: "/contact", label: "Contact" },
                { to: "/dashboard", label: "Dashboard" }
            ].map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className="relative"
                >
                    {({ isActive }) => (
                        <span className="relative inline-block pb-1">
                            {item.label}
                            <motion.div
                                className="absolute left-0 bottom-0 h-0.75 bg-black rounded-md"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{
                                    width: isActive ? '100%' : 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: easeInOut
                                }}

                            />
                        </span>
                    )}
                </NavLink>
            ))}
        </div>
    );
    return (
        <div>
            <div className='shadow-sm bg-white fixed top-0 z-100 w-full'>
                <div className="navbar max-w-[90%] mx-auto ">
                    <Link to="/" className="flex items-center gap-2">
                        <motion.img
                            src="/src/assets/logo.PNG"
                            alt="CEleven Logo"
                            className="w-12 h-12 object-contain rounded-3xl"
                            initial={{ opacity: 0, y: -8, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        />

                        <motion.span
                            className="text-xl font-bold tracking-wide text-gray-800"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                        >
                            CElevenBd
                        </motion.span>
                    </Link>



                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div>
                            <img className='w-24' alt="" />
                        </div>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end flex gap-3">
                        {/* <Link to="/dashboard">
                            <img className='w-10 h-10 object-cover rounded-full' src={user ? user.photoURL : userIcon} alt="" />
                        </Link> */}
                        {
                            // user ? (
                            //     <button  className='btn border-secondary border-2 shadow-none text-sm bg-white text-secondary'>
                            //         Logout
                            //     </button>
                            // ) : (
                            //     <Link to="/login" className='btn border-secondary border-2 shadow-none text-sm bg-white text-secondary'>
                            //         Login
                            //     </Link>
                            // )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;