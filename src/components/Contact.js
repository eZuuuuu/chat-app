import React from 'react';
import './Contact.css';


function Contact(props) {
    return (
      <figure className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name}/>
        <div>
        <div className="name">{props.name}</div>
        <div className="status">
        <div className={props.good ? 'status-online' : 'status-offline'}></div>
        <var>{props.texte}</var>
        </div>
        </div>
      </figure>
    );
  }

  export default Contact;