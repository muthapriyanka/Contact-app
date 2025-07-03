import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/contacts').then(res => setContacts(res.data));
  }, []);

  const deleteContact = (id) => {
    axios.delete(`http://localhost:3001/contacts/${id}`).then(() => {
      setContacts(contacts.filter(contact => contact.id !== id));
    });
  };

  return (
    <div>
      <h2>Contact List</h2>
      <Link to="/add">Add New Contact</Link>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
            <Link to={`/edit/${contact.id}`}>Edit</Link>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;