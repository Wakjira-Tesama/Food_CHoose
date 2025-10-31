import React from "react";
import "./../Style/contact.css";
import contact from "./../assets/images/contact.jpg";

function Contact() {
  return (
    <div className="contact" style={{ backgroundImage: `url(${contact})` }}>
      <div className="contact-pages">
        <h1>Contact Us</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
