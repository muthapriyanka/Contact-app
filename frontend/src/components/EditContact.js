import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditContact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/contacts`).then(res => {
      const contact = res.data.find(c => c.id === parseInt(id));
      setForm(contact);
    });
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:3001/contacts/${id}`, form).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Contact</h2>
      <input name="name" value={form.name} onChange={handleChange} /><br/>
      <input name="email" value={form.email} onChange={handleChange} /><br/>
      <input name="phone" value={form.phone} onChange={handleChange} /><br/>
      <button type="submit">Update</button>
    </form>
  );
}

export default EditContact;