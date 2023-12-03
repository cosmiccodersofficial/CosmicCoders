import React, { useEffect, useState, useRef } from 'react';
import { Form, Button, Container, Spinner, Alert} from 'react-bootstrap';

import './Contact.css';
import ContactField from './ContactField';

const Contact = () => {

  const form = useRef();
  const [sending, setSending] = useState(false);
  const[alert, setAlert] =  useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(()=>{
      setAlert(false);
    }, 1500);

  }, [alert]);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '',});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSending(true);
      const response = await fetch('https://email-backend-service-q6t4.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSending(false);
        setAlert(true);
        form.current.reset();
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container className="bg-light p-4 d-flex flex-column  align-items-center contact-container my-5">
      <span className="mt-5 pt-3 fw-bold text-blue-800 contact-heading">Let's Have a Talk</span>
      <span className='fw-medium text-muted fs-5 d-flex text-wrap mb-5 pb-3'>Our door is always open for a good cup of coffee</span>
      {alert && <Alert variant="success">Thanks for Contacting Us !!</Alert>}
      <div>
        {sending && <Spinner className='text-center my-5' animation="border" variant="primary"/>}
      </div>
      { !sending &&
      <Form ref={form} className="max-w-sm d-flex flex-column" onSubmit={handleSubmit}>
        {/* Name */}
        <ContactField controlId = "formName" label = "Name" name="name" type = "text" placeholder = "Your Name" onChange={handleChange}/>
         {/* Email Field */}
        <ContactField controlId="formEmail" label="Email Address" name="email" type='email' placeholder="Your Email Address" onChange={handleChange}/>
        {/* Phone Number Field */}
        <ContactField controlId="formPhone" label="Phone Number" name="phone" type='tel' placeholder="Your Phone Number" onChange={handleChange}/>
        {/* Message Field */}
        <ContactField controlId="formMessage" label="Message" name="message" placeholder="Drop Your Message" as="textarea" rows={4} onChange={handleChange}/>
        {/* Buttons */}
        <div className="d-flex justify-content-between gap-4">
          <Button variant="primary" type="submit" className="w-100 bg-blue-700 rounded-4"> Submit </Button>
          <Button variant="secondary" type="reset" className="w-100 bg-gray-600 rounded-4 reset-btn">Reset</Button>
        </div>
      </Form>
    }
    </Container>
  );
};

export default Contact;
