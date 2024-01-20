import React from 'react';
import './Navbar.scss'; // Import your styling file for Navbar
// import logo from './logo.png'; // Replace with the path to your logo image
import homeIcon from '../../assets/home.svg'; // Replace with the path to your Home icon image
import contestIcon from '../../assets/bar-chart.png'; // Replace with the path to your Content icon image
import searchIcon from '../../assets/search.svg'; // Replace with the path to your Search icon image
import friendsIcon from '../../assets/add-friend.png'; // Replace with the path to your Friends icon image
import medal from '../../assets/medal.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                {/* <img src={logo} alt="Logo" className="logo" /> */}
            </div>
            <div className="navbar-right">
                <div className="navbar-option">
                    {<img src={homeIcon} alt="Home" className="icon" />}
                    <span>Home</span>
                </div>
                <div className="navbar-option">
                    <img src={medal} alt="Content" className="icon" />
                    <span>Contest</span>
                </div>
                <div className="navbar-option">
                    <img src={contestIcon} alt="Content" className="icon" />
                    <span>Leaderboard</span>
                </div>
                <div className="navbar-option">
                    {<img src={searchIcon} alt="Search" className="icon" />}
                    <span>Search</span>
                </div>
                <div className="navbar-option">
                    {<img src={friendsIcon} alt="Friends" className="icon" />}
                    <span>Friends</span>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
