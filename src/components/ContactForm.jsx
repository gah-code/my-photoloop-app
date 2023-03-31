import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className='contaniner'>
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value='contact' />
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name='message'
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </label>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
