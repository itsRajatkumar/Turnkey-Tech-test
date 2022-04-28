import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {

    return <div className="navbar">
        <div className="searchbox">
            <i className="bi bi-search"></i>
            <input type="text" />
        </div>
        <a className='navlinks' href="/">Home</a>
        <a className='navlinks' href="/">Courses</a>
        <a className='navlinks' href="/"><i className="bi bi-cart3"></i></a>
        <a className='navlinks nav_login' href="/">Login</a>
    </div>
};

export default Header;
