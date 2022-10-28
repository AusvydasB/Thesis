import Accordion from 'react-bootstrap/Accordion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Nav from 'react-bootstrap/Nav';
import {  Col } from 'react-bootstrap';


function BasicExample() {
  return (
    <Accordion defaultActiveKey="0" style={{textAlign: 'left', fontFamily: 'sans-serif'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is an FAQ section?</Accordion.Header>
        <Accordion.Body>
            <p style={{marginBottom: '0'}}>An FAQ section can be used to quickly answer common questions about you or your business, such as “Where do you ship to?”,</p>
            <p style={{marginBottom: '0'}}>“What are your opening hours?” or “How can I book a service?”</p>
            <p style={{marginBottom: '0'}}>It’s a great way to help people navigate your site and can even boost your site’s SEO.</p>
            <img src="https://static.wixstatic.com/media/452dfd_cebd1429c8454ae9a61bf85247a07391~mv2.jpeg/v1/fill/w_700,h_399,al_c,q_90,usm_0.66_1.00_0.01/452dfd_cebd1429c8454ae9a61bf85247a07391~mv2.webp" alt="" style={{height: '200px', width: '370px', marginTop: '25px', marginBottom: '25px'}} />
            <Col>
                <Nav.Link style={{display: 'inline'}} href="https://facebook.com" target="_blank"><FacebookIcon className='icon' href="www.google.com"></FacebookIcon></Nav.Link>
                <Nav.Link style={{display: 'inline'}} href="https://twitter.com" target="_blank"><TwitterIcon className='icon'></TwitterIcon></Nav.Link>
                <Nav.Link style={{display: 'inline'}} href="https://linkedin.com" target="_blank"><LinkedInIcon className='icon'></LinkedInIcon></Nav.Link>
            </Col>   
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




  );
}

export default BasicExample;