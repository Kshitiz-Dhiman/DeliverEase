import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ className }) => {
    const [isloggedin, setIsloggedin] = useState(false);
    const handleLogout = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/logout", {
                method: "GET",
                credentials: "include",
            });
            window.location.href = "/login";
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        const checkLogin = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/userexist", {
                    method: "GET",
                    credentials: "include",
                });
                const data = await response.json();
                if (data.status === "ok") {
                    setIsloggedin(true);
                }
            } catch (error) {
                console.error(error);
            }
        };
        checkLogin();
    }, [])

    return (
        <nav className={`fixed w-full m-auto p-5 flex justify-between items-center bg-white z-50 ${className}`}>
            <NavLink to='/'><div className='overflow-hidden'><h1 className='nav1 text-3xl font-bold leading-7 tracking-tighter shadow-2xl'>Deliver <br /> Ease</h1></div></NavLink>
            <div className='flex font-bold gap-10 text-[17px] tracking-wider ml-[70px]'>
                <NavLink to='/dashboard' className='hover-underline-animation center'>Profile</NavLink> /
                <NavLink className='hover-underline-animation center'>About</NavLink> /
                <NavLink className='hover-underline-animation center'>Pricing</NavLink>
            </div>
            <div className='nav2 flex gap-2'>
                {isloggedin ? (
                    <>
                        <img src="" alt="" />
                        <button
                            onClick={handleLogout}
                            className='bg-[#f87171] rounded-[10px] border-black text-white px-7 py-3 font-bold transition ease-in-out delay-150 shadow-2xl hover:bg-[#e63946] focus:outline-none focus:ring-2 focus:ring-[#e63946]'>
                            Logout
                        </button>
                    </>
                ) : (<>
                    <NavLink to="/login">
                        <button
                            className='bg-white shadow-2xl border-[1px] rounded-[10px] border-black px-7 py-3 font-bold transition ease-in-out delay-150 hover:bg-[#f0f0f0] focus:outline-none focus:ring-2 focus:ring-[#304C6B]'>
                            Login
                        </button>
                    </NavLink>
                    <NavLink to="/register">
                        <button
                            className='bg-black shadow-2xl rounded-[10px] border-black text-white px-7 py-3 font-bold transition ease-in-out delay-150 hover:bg-[#1d3557] focus:outline-none focus:ring-2 focus:ring-[#1d3557]'>
                            Register
                        </button>
                    </NavLink>
                </>)}
            </div>
        </nav >
    );
};

export default Navbar;
