import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_id', 'template_id', form.current, 'user_id')
            .then((result) => {
                console.log(result.text);
                setStatus("Message sent successfully!");
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus("Failed to send message. Please try again.");
            });
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <h2 className="contact_title">Contact Us</h2>
            <p className="contact_description">
                If you have any questions or feedback, please fill out the form below.
            </p>
            <form ref={form} onSubmit={sendEmail} className="contact_form">
                <label htmlFor="name" className="contact_label">Name</label>
                <input type="text" name="name" required className="contact_input" />
                
                <label htmlFor="email" className="contact_label">Email</label>
                <input type="email" name="email" required className="contact_input" />
                
                <label htmlFor="message" className="contact_label">Message</label>
                <textarea name="message" required className="contact_textarea"></textarea>
                
                <button type="submit" className="submit-button">Send Message</button>
            </form>
            {status && <p className="contact_status">{status}</p>}
            <div className="contact_info">
                <h3 className="contact_info_title">Company Information</h3>
                <div className="contact_item">
                    <FaMapMarkerAlt />
                    <span>123 Main St, Anytown, USA</span>
                </div>
                <div className="contact_item">
                    <FaPhoneAlt />
                    <span>(123) 456-7890</span>
                </div>
                <div className="contact_item">
                    <FaEnvelope />
                    <span>
                        contact@pulldash.com
                    </span>
                </div>
            </div>
            </form>
            </div>
        </section>
    );
};

export default Contact;
// This code defines a Contact component that renders a contact form with fields for name, email, and message.
// The form includes labels for each field, and a submit button to send the message.
// The component is styled using the "Contact.css" file, which should contain styles for the contact section, including the title, subtitle, description, form, labels, inputs, textarea, and button.
// The form is designed to be user-friendly and accessible, with required fields to ensure that users provide necessary information before submitting.
// The component can be imported and used in your main application file or any other component where you want to display the contact form.
// Make sure to adjust the styles in "Contact.css" to fit your design requirements and branding guidelines.
// The form does not include any functionality for handling form submission, so you may want to implement a function to handle the form data when the user submits the form.
// You can also add validation or error handling as needed to improve the user experience.