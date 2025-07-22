import React, { useState } from 'react';
import axios from 'axios';

const BookClass = () => {
  const [formData, setFormData] = useState({
    class_id: '',
    client_name: '',
    client_email: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/book/', formData)
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage(err.response.data.error));
  };

  return (
    <div>
      <h2>Book a Class</h2>
      <form onSubmit={handleSubmit}>
        <input name="class_id" placeholder="Class ID" onChange={handleChange} required />
        <br/>
        <br/>
        <input name="client_name" placeholder="Your Name" onChange={handleChange} required />
        <br/>
        <br/>
        <input name="client_email" type="email" placeholder="Your Email" onChange={handleChange} required />
        <br/>
        <br/>
        <button type="submit">Book</button>
        <br/>
        <br/>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default BookClass;
