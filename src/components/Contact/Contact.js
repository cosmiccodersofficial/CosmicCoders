// import React from 'react';
// import { useEffect } from 'react';
// import './Contact.css';


// const Contact = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="bg-gray-50 p-8 flex flex-col items-center contact-container">
//       <h2 className="text-5xl mt-28 mt-28 fw-bold mb-6 text-blue-900 contact-heading">Get In Touch</h2>
//       <form className="w-full max-w-md contact-form">
//         {/* Name Field */}
//         <div className="mb-4">
//           <label htmlFor="Name" className="block text-lg fw-bold mb-2 text-start"> Name </label>
//           <input type="text" id="Name" name="Name"
//             className="w-full px-3 py-2 placeholder-gray-500 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:border-blue-900"
//             placeholder="Your Name" required />
//         </div>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-lg fw-bold mb-2 text-start">Email Address </label>
//           <input type="email" id="email" name="email"
//             className="w-full px-3 py-2 placeholder-gray-500 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
//             placeholder="Your Email Address" required />
//         </div>

//         {/* Phone Number Field */}
//         <div className="mb-4">
//           <label htmlFor="phone" className="block text-lg fw-bold mb-2 text-start"> Phone Number </label>
//           <input type="tel" id="phone" name="phone"
//             className="w-full px-3 py-2 placeholder-gray-500 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
//             placeholder="Your Phone Number" required />
//         </div>

//         {/* Message Field */}
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-lg fw-bold mb-2 text-start"> Message </label>
//           <textarea id="message" name="message"
//             className="w-full px-3 py-2 placeholder-gray-500 bg-gray-100 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
//             rows="4" placeholder="Your Message" required>
//           </textarea>
//         </div>

//         {/* Submit and Reset Buttons */}
//         <div className="flex justify-between mb-12 form-buttons">
//           <button type="submit"
//             className="w-2/5 bg-blue-800 hover text-white px-4 py-2 rounded-lg hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
//             Submit
//           </button>
//           <button type="reset"
//             className="w-2/5 bg-gray-400 hover text-white px-4 py-2 rounded-lg hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray active:bg-gray-600">
//             Reset
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;
import React, { useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="bg-light p-4 d-flex flex-column  align-items-center contact-container my-5">
      <h2 className="text-5xl my-5  pt-3 fw-bold mb-6 text-blue-800 contact-heading">Get In Touch</h2>
      <Form className="w-full max-w-md d-flex flex-column ">
        {/* Name Field */}
        <Form.Group as={Row} controlId="formName" className="mb-4 align-items-center align-content-center">
          <Col sm={3}>
            <Form.Label className="text-lg fw-bold text-start">Name</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control className='' type="text" placeholder="Your Name" required/>
          </Col>
        </Form.Group>

        {/* Email Field */}
        <Form.Group as={Row} controlId="formEmail" className="mb-4 align-items-center align-content-center">
          <Col sm={3}>
            <Form.Label className="text-lg fw-bold text-start" style={{ whiteSpace: 'nowrap' }}>Email Address</Form.Label>
          </Col>
          <Col sm={10} >
            <Form.Control className='' type="email" placeholder="Your Email Address" required/>
          </Col>
        </Form.Group>

        {/* Phone Number Field */}
        <Form.Group as={Row} controlId="formPhone" className="mb-4 align-items-center align-content-center">
          <Col sm={3}>
            <Form.Label className="text-lg fw-bold text-start" style={{ whiteSpace: 'nowrap' }}>Phone Number</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control className='' type="tel" placeholder="Your Phone Number" required/>
          </Col>
        </Form.Group>

        {/* Message Field */}
        <Form.Group as={Row} controlId="formMessage" className="mb-4 align-items-center align-content-center">
          <Col sm={3}>
            <Form.Label  className="text-lg fw-bold text-start">Message</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control className='' as="textarea" rows={4} placeholder="Your Message" required />
          </Col>
        </Form.Group>

        {/* Submit and Reset Buttons */}
        <Form.Group as={Row} className="d-flex justify-content-between gap-4 mb-12 form-buttons">
          <Col sm={5}>
            <Button variant="primary" type="submit" className="w-100" >Submit </Button>
          </Col>
          <Col sm={5}>
            <Button variant="secondary" type="reset" className="w-100"> Reset </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Contact;
