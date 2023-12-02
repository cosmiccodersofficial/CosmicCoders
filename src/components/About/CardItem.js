import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';


const CardItem = ({emoji, subheading, text}) => {
  return (
        <Card.Text className="fs-5 mt-1">
            <span className='fw-bold'> {' '}
                <span className='fs-4'>{emoji}</span> {subheading}
            </span> {' '}
            <span className='text-wrap'>{text}</span>
        </Card.Text>
  );
}

export default CardItem;
