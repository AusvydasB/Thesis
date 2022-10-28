import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Nav from 'react-bootstrap/Nav';
import {  Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
            <Col style={{display: 'flex', justifyContent: 'center'}}>
                <Nav.Link style={{display: 'inline'}} href="https://facebook.com" target="_blank"><FacebookIcon className='icon' href="www.google.com" fontSize='large'></FacebookIcon></Nav.Link>
                <Nav.Link style={{display: 'inline'}} href="https://twitter.com" target="_blank"><TwitterIcon className='icon' fontSize='large'></TwitterIcon></Nav.Link>
                <Nav.Link style={{display: 'inline'}} href="https://linkedin.com" target="_blank"><LinkedInIcon className='icon' fontSize='large'></LinkedInIcon></Nav.Link>
            </Col>  
    </div>
  )
}

export default Footer