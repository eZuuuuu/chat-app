import React from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
    <Contact
      name="Jorge Cole"
      avatar="https://randomuser.me/api/portraits/men/45.jpg"
      texte="Online"
      good   
    />
    <Contact
      name="Lauren Sims"
      avatar="https://randomuser.me/api/portraits/women/31.jpg"
      texte="Offline"
    />
    <Contact
      name="Dianne Holt"
      avatar="https://randomuser.me/api/portraits/women/26.jpg"
      texte="Online"
      good
    />
    <ContactList />
    </div>
  );
}

export default App;
