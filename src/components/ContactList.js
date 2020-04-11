import React from 'react';
import Contact from './Contact';



const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      good: false,
      texte: "Offline"
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      good: true,
      texte: "Online"
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      good: true,
      texte: "Online"
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      good: false,
      texte: "Offline"
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      good: true,
      texte: "Online"
    }
  ];

  const ContactList = () => (
    <div>
      {users.map(e => (
        <Contact
          name={e.name}
          avatar={e.avatar}
          texte={e.texte}
          good={e.good}
        />
      ))}
    </div>
  );

  export default ContactList;