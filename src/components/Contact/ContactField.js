import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const ContactField = ({controlId, name, type , placeholder, as, rows}) => {
  return (
    <Form.Group as={Row} controlId={controlId} className="mb-4">
          <Form.Label as={Col}  className="text-start fw-bold">{name}</Form.Label>
          <Form.Control type={type} placeholder={placeholder} as={as} rows={rows} required  className='input' style={{resize: 'none'}}/>
    </Form.Group>
  );
}

export default ContactField;
