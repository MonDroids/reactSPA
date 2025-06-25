import "./CeoMessage.css";

const CeoMessage = () => {
    return (
        <section className="ceo-message">
            <div className="ceo-message_content">
                <h2 className="ceo-message_title">Message from the CEO</h2>
                <p className="ceo-message_text">
                    Welcome to our website! As the CEO, I am thrilled to share our vision and mission with you. We are committed to delivering excellence in everything we do, and we believe in the power of innovation and teamwork. Thank you for being a part of our journey.
                </p>
                <p className="ceo-message_signature">- John Doe, CEO</p>
            </div>
            <div className="ceo-message_image">
                <img src="/src/assets/ceo.jpg" alt="CEO" className="ceo-message_img" />
            </div>
        </section>
    );
}
export default CeoMessage;
// This component displays a message from the CEO, including a title, text, signature, and an image of the CEO.
// The CSS file "CeoMessage.css" is used to style the component, ensuring it has a professional and polished appearance.
// The image source is set to "/src/assets/ceo.jpg", which should be replaced with the actual path to the CEO's image in your project structure.
// The component is structured to be responsive and visually appealing, with a clear layout that highlights the CEO's message.
// The class names used in the JSX correspond to the styles defined in "CeoMessage.css", ensuring that the component is styled consistently with the rest of the website.
// The text content can be customized to reflect the actual message from your CEO, and the image can be updated to feature the current CEO of your organization.
// This component can be imported and used in your main application file or any other component where you want to display the CEO's message.
// Make sure to adjust the image path and text content as needed to fit your specific use case and branding requirements.
// The component is designed to be reusable, so you can easily integrate it into different parts of your website or application as needed.
// It serves as a great way to connect with your audience and provide a personal touch from the leadership of your organization.