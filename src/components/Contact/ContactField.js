import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const ContactField = ({controlId, label, name, type , placeholder, as, rows, onChange}) => {
  return (
    <Form.Group as={Row} controlId={controlId} className="mb-4">
          <Form.Label as={Col}  
            className="text-start fw-bold">{label}
          </Form.Label>
          <Form.Control type={type} name={name} placeholder={placeholder} as={as} rows={rows} required  onChange={onChange}
            className='input' style={{resize: 'none'}}/>
    </Form.Group>
  );
}

export default ContactField;
