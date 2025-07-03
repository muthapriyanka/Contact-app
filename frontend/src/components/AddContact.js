import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddContact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3001/contacts', form).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      <input name="name" placeholder="Name" onChange={handleChange} /><br/>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/>
      <input name="phone" placeholder="Phone" onChange={handleChange} /><br/>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddContact;