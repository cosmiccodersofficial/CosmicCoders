import React, { useEffect } from 'react';
import { Form, Button, Container} from 'react-bootstrap';

import './Contact.css';
import ContactField from './ContactField';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="bg-light p-4 d-flex flex-column  align-items-center contact-container my-5">
      <span className="mt-5 pt-3 fw-bold text-blue-800 contact-heading">Let's Have a Talk</span>
      <span className='fw-medium text-muted fs-5 d-flex text-wrap mb-5 pb-3'>Our door is always open for a good cup of coffee</span>
      <Form className="max-w-sm d-flex flex-column">
        {/* Name */}
        <ContactField controlId = "formName" name = "Name" type = "text" placeholder = "Your Name"/>
         {/* Email Field */}
        <ContactField controlId="formEmail" name="Email Address" type='email' placeholder="Your Email Address"/>
        {/* Phone Number Field */}
        <ContactField controlId="formPhone" name="Phone Number" type='tel' placeholder="Your Phone Number"/>
        {/* Message Field */}
        <ContactField controlId="formMessage" name="Message" placeholder="Drop Your Message" as="textarea" rows={4}/>
        {/* Buttons */}
        <div className="d-flex justify-content-between gap-4">
          <Button variant="primary" type="submit" className="w-100 bg-blue-700 rounded-4"> Submit </Button>
          <Button variant="secondary" type="reset" className="w-100 bg-gray-600 rounded-4 reset-btn">Reset</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
