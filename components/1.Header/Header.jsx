import "./Header.css";

const Header = () =>{
    return (
        <header className="header">
            <div className="header_left">
                <a href="#home" className="logo">
                    <img src="/src/assets/react.svg" alt="react logo" className="header_logo"></img>
                </a>
            </div>
            <nav className="header_nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;