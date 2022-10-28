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
        <Accordion.Header>How do I add a new question & answer?</Accordion.Header>
        <Accordion.Body style={{width:'50%'}}>
            <p style={{paddingLeft:'15px'}}>To add a new FAQ follow these steps:</p>
            <ol>
                <li>Click “Manage FAQs” button</li>
                <li>From your site’s dashboard you can add, edit and manage all your questions and answers</li>
                <li>Each question and answer should be added to a category</li>
                <li>Save and publish.</li>
            </ol>
            <Col>
                <Nav.Link style={{display: 'inline'}} href="https://facebook.com" target="_blank"><FacebookIcon className='icon' href="www.google.com"></FacebookIcon></Nav.Link>
                <Nav.Link style={{display: 'inline'}} href="https://twitter.com" target="_blank"><TwitterIcon className='icon'></TwitterIcon></Nav.Link>
                <Nav.Link style={{display: 'inline'}} href="https://linkedin.com" target="_blank"><LinkedInIcon className='icon'></LinkedInIcon></Nav.Link>
            </Col>   
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I insert an image, video, or gif in my FAQ?</Accordion.Header>
        <Accordion.Body>
        <p style={{paddingLeft:'15px'}}>Yes. To add media follow these steps:</p>
            <ol>
                <li>Enter the app’s Settings</li>
                <li>Click on the “Manage FAQs” button</li>
                <li>Select the question you would like to add media to</li>
                <li>When editing your answer click on the camera, video, or GIF icon</li>
                <li>Add media from your library.</li>
            </ol>
            <Col>
                <Nav.Link style={{display: 'inline'}} href="https://facebook.com" target="_blank"><FacebookIcon className='icon' href="www.google.com"></FacebookIcon></Nav.Link>
                <Nav.Link style={{display: 'inline'}} href="https://twitter.com" target="_blank"><TwitterIcon className='icon'></TwitterIcon></Nav.Link>
                <Nav.Link style={{display: 'inline'}} href="https://linkedin.com" target="_blank"><LinkedInIcon className='icon'></LinkedInIcon></Nav.Link>
            </Col>   
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I edit or remove the “FAQ” title?</Accordion.Header>
        <Accordion.Body>
        <p style={{margin: '0'}}>You can edit the title from the Settings tab in the app. </p>
        <p>If you don’t want to display the title, simply disable the Title under “Info to Display”.</p>
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