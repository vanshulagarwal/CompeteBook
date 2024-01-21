import React from 'react';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="navbar-center">
                <div className="navbar-option">
                    <GoHomeFill className='icon' />
                    <span className='text'>Dashboard</span>
                </div>
                <div className="navbar-option">
                    <MdLeaderboard className="icon" />
                    <span className='text'>Leaderboard</span>
                </div>
                <div className="navbar-option">
                    <IoSearchSharp className='icon' />
                    <span className='text'>Search</span>
                </div>
            </div>
            {/* conditional rendering login and profile button */}
            <div className="navbar-right">
                <div className="navbar-option">
                    <FaUser className='icon' />
                    <span className='text'>Profile</span>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
