import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
        <nav className='fixed w-full bg-[#131e2a] m-auto p-5 flex justify-between items-center'>
            <NavLink to='/'><div className='overflow-hidden'><h1 className='nav1 text-3xl text-white font-bold leading-8 tracking-tight'>Deliver <br /> Ease</h1></div></NavLink>
            <ul className='flex gap-10 text-[17px]'>
                {/* <li>Product</li>
                <li>Features</li> */}
                {/* <li>About</li>
                <li>Pricing</li>
                <li>Contact</li> */}
            </ul>
            <div className='nav2 flex gap-2'>
                {isloggedin ? (
                    <>
                        <img src="" alt="" />
                        <button onClick={handleLogout} className='bg-red-500 border-[1px] rounded-[1px] border-black text-white px-10 py-2 font-bold transition ease-in-out delay-150'>Logout</button>
                    </>
                ) : (<>
                    <button className='bg-white border-[1px] rounded-[1px] border-black px-10 py-2 font-bold
                  transition ease-in-out delay-150 text-[#304C6B]'><NavLink to="/login">Login</NavLink></button>
                    <button className='bg-[#304b6b] border-[1px] rounded-[1px] border-black text-white px-10 py-2 font-bold transition ease-in-out delay-150'><NavLink to="/register">Register</NavLink></button>
                </>)}

            </div>
        </nav >
    );
};

export default Navbar;
