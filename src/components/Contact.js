import React from 'react';
import './Contact.css';


function Contact() {
    return (
      <figure className="Contact">
        <img className="avatar"
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="Jorge Cole"
        />
        <div>
        <name className="name">Jorge Cole</name>
        <div className="status">
        <button class="status-online"></button>
        <a>online</a>
        </div>
        </div>
      </figure>
    );
  }

  export default Contact;