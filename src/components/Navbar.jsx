import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, InputGroup, Form} from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import FaceIcon from '@mui/icons-material/Face';

function ColorSchemesExample() {
  return (
    <>
 
  <Navbar className='sticky-top' style={{padding: '0', paddingBottom: '10px'}}>
      <Container fluid> 
        <Col className="pagrindinis">
              <InputGroup className="lengvas2">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    <SearchIcon/>Your search
                  </InputGroup.Text>
                  <Form.Control className='kontrole'
                    aria-label="small"
                    aria-describedby="inputGroup-sizing-small"
                  />
                   <FaceIcon fontSize='large' style={{marginLeft: '10px'}}/>
              
                  <Nav.Link href="#/LogIn"><button style={{marginTop: '7px', border: 'none', backgroundColor: '#f2f1f0'}} className='searchtext'>Log In </button></Nav.Link>
                   
              </InputGroup>
            
              <Nav className='lengvas' style={{margin: 'auto', width: '70%'}} >
                    <Navbar.Brand className='Yesim'>Ceramic-Studio</Navbar.Brand>
                    <Nav.Link href="/#">Home</Nav.Link>
                    <Nav.Link href="/#/About">About</Nav.Link>
                    <Nav.Link href="/#/FAQ">FAQ</Nav.Link>
                    <Nav.Link href="/#/Shipping">Shipping</Nav.Link>      
              </Nav>
          </Col>
     </Container>    
  </Navbar>
    </>
  );
}

export default ColorSchemesExample;