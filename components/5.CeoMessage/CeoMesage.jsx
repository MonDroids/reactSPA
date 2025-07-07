import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./CeoMessage.css";

const CeoMessage = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash === "#ceo-message") {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
} , [location]);
return (
    <section className="ceo-message" id="ceo-message">
        <div className="ceo-message__content">
            <div className="ceo-mesage_image">
                <img src="/src/assets/images/account.png" alt="CEO message" className="ceo-image" />
                <p className="ceo-name">John Doe</p>
                <p className="ceo-signature">PullDash</p>
            </div>
        </div>
        <div className="ceo-message_text">
            <h2 className="ceo-message__title">Message from the CEO</h2>
            <p className="ceo-message_description">
                Welcome to our website! As the CEO of PullDash, I am thrilled to share our
                vision and mission with you. <br />Our team is dedicated to delivering innovative solutions that
                empower individuals and businesses to achieve their goals.<br /> We believe in the power of technology
                to transform lives and create opportunities. <br /><strong>Thank you for being a part of our journey.</strong>
            </p>
            <button className="ceo-message_button">
                onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }}
                Contact Us
            </button>
        </div>

    </section>
);
};
// CeoMessage.jsx
// This component displays a message from the CEO, including an image and a brief description.
export default CeoMessage;
