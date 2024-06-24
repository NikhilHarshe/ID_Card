import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/opretions/userApi';

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.auth)
    console.log("User in navbar ", user)
    return (
        <div className=' text-white  bg-blue-600'>
            <div className=' h-[4rem] w-11/12 mx-auto flex justify-between items-center align-middle'>
                <div onClick={() => navigate("/")}>
                    <p>Shriram ID Cards</p>
                </div>
                <div>
                    <ul className=' flex gap-5'>
                        <li onClick={() => navigate("/")}>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Templets</li>
                    </ul>
                </div>
                <div>
                    {
                        user ? (<button onClick={() => logout(navigate, dispatch)} className=' bg-white px-4 py-1 rounded-xl text-gray-900'>LogOut</button>) : (<button onClick={() => navigate("/#login")} className=' bg-white px-4 py-1 rounded-xl text-gray-900'>Login</button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
