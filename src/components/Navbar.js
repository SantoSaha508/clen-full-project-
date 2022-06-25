import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar  px-20">
                    <div class="flex-1 px-2 mx-2 font-serif font-bold text-2xl text-orange-500">Clean Co Live</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="text-black font-bold menu menu-horizontal text-white">
                            {/* <!-- Navbar menu content here --> */}
                            <li><NavLink to="/" className='rounded-lg mx-2 border-2'>HOME</NavLink></li>
                            <li dropdown dropdown-hover dropdown-end><NavLink to="/services" className='rounded-lg border-2'>SERVICES</NavLink>
                            </li>
                            <li><NavLink to="/about" className='rounded-lg  mx-2 border-2'>ABOUT</NavLink></li>
                            <li><NavLink to="/contact" className='rounded-lg border-2 '>CONTACT</NavLink></li>
                            <li><NavLink to="/login" className='rounded-lg  mx-2 border-2'>LOGIN</NavLink></li>
                            <li><NavLink to="/signup" className='rounded-lg border-2 '>SIGNUP</NavLink></li>
                            <li>
                                <label tabindex="0" class="btn m-1">Book Now</label>
                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here  --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to="/" >HOME</NavLink></li>
                    <li><NavLink to="/services" >SERVICES</NavLink></li>
                    <li><NavLink to="/about" >ABOUT</NavLink></li>
                    <li><NavLink to="/contact" >CONTACT</NavLink></li>
                    <li><NavLink to="/login" >LOGIN</NavLink></li>
                    <li><NavLink to="/signup" >SIGNUP</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;