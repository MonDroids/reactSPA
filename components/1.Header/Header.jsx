import React from "react";
import "./Header.css";

const Header = () => {
    const [ismenuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setMenuOpen(!ismenuOpen);
    };

    const hadleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_logo">
                    <a href="#home">MyWebsite</a>
                </div>
                <nav className={`header_nav ${ismenuOpen ? "open" : ""}`}>
                    <ul>
                        <li><a href="#home" onClick={() => hadleScroll("home")}>Home</a></li>
                        <li><a href="#about" onClick={() => hadleScroll("about")}>About</a></li>
                        <li><a href="#services" onClick={() => hadleScroll("services")}>Services</a></li>
                        <li><a href="#projects" onClick={() => hadleScroll("projects")}>Projects</a></li>
                        <li><a href="#contact" onClick={() => hadleScroll("contact")}>Contact</a></li>
                    </ul>
                </nav>
                <button className="header_menu_toggle" onClick={toggleMenu}>
                    {ismenuOpen ? "Close Menu" : "Open Menu"}
                </button>
            </div>
        </header>
    );
};

export default Header;
