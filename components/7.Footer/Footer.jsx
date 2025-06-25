import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_content">
                    <p className="footer_text">© 2023 Your Company. All rights reserved.</p>
                    <ul className="footer_links">
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;

// This code defines a Footer component for a React application. It includes a footer element with a container that holds the footer content, including a copyright notice and links to privacy policy, terms of service, and contact information. The component is styled using an external CSS file named "Footer.css". The component can be imported and used in other parts of the application to display the footer at the bottom of the page.
