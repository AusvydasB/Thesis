import React from 'react'
import {useState} from 'react';
import { Col, Row } from 'react-bootstrap';

export default function App() {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();

    if (message.trim().length !== 0) {
      alert('Thank you, you have successfully subscribed');
    } else {
      alert('Please write your email');
    }
  };

  return (
<Row>
 
   <Col sm={8} style={{display: 'flex', alignItems: 'flex-end', marginBottom: '15px'}}>
      <input
        style={{ resize: 'none', width: '350px', height: '40px', textAlign: 'center'}}
        id="message"
        name="message"
        onChange={handleChange}
        autoComplete="off"
        placeholder='Enter your email here'
      />
    </Col>



    <Col sm={4} style={{ marginBottom: '15px'}}>
      <button className='mygtukas' onClick={handleClick}>Subscribe Now</button>
    </Col>  
</Row>
  );
}
