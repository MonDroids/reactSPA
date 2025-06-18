import React from "react";
import "./Header.css";
import logo from "/src/assets/react.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header_left">
                <a href="#home" className="logo">
                    <img src={logo} alt="logo"></img>
                </a>
            </div>
        <nav className="header_nav">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Gallery">Gallery</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
        </header>

    )
}
export default Header;