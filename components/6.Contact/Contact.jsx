import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact_content">
                <h2 className="contact_title">Contact Us</h2>
                <h3 className="contact_subtitle">Get in Touch</h3>
                <p className="contact_description">
                    We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
                </p>
                <form className="contact_form">
                    <label className="contact_label">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                    <label className="contact_label">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                    <label className="contact_label">Your Message</label>
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit" className="contact_button">Send Message</button>
                </form>
            </div>
        </section>
    );
}
export default Contact;
// This code defines a Contact component that renders a contact form with fields for name, email, and message.
// The form includes labels for each field, and a submit button to send the message.
// The component is styled using the "Contact.css" file, which should contain styles for the contact section, including the title, subtitle, description, form, labels, inputs, textarea, and button.
// The form is designed to be user-friendly and accessible, with required fields to ensure that users provide necessary information before submitting.
// The component can be imported and used in your main application file or any other component where you want to display the contact form.
// Make sure to adjust the styles in "Contact.css" to fit your design requirements and branding guidelines.
// The form does not include any functionality for handling form submission, so you may want to implement a function to handle the form data when the user submits the form.
// You can also add validation or error handling as needed to improve the user experience.