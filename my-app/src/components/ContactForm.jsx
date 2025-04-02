import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_xynyeur",  // Replace with your actual Service ID
            "template_qtkcb9a", // Replace with your actual Template ID
            form.current,
            "D0V8ORrzpKUX8B70_"   // Replace with your actual Public Key
        ).then(
            (result) => {
                console.log("Email sent successfully:", result.text);
                alert("Email sent!");
            },
            (error) => {
                console.log("Error sending email:", error.text);
                alert("Failed to send email.");
            }
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send Email</button>
        </form>
    );
};

export default ContactForm;
