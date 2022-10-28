    import React from 'react'
    import { Col, Row } from 'react-bootstrap'
    import TextField from '@mui/material/TextField';
    import Nav from 'react-bootstrap/Nav';
    import FormValidation from '../components/FormValidation'

    
    const Form = () => {
      return (
   <>
            <Row style={{backgroundColor: 'white', margin: 'auto', width: '90%', fontFamily: 'sans-serif', borderRadius: '20px' }}>
                <Col style={{marginLeft: '150px', marginTop: '30px'}}>
                    <br/>
                    <p>CERAMIC-STUDIO</p>
                    <br/>
                    <p>A:   500 Terry Francois St.</p>
                    <p>San Francisco, CA 94158</p>
                    <p>T:   123-456-7890</p>
                    <p>E:  info@my-domain.com</p>
                    <br/><br/>
                    <p>MON - FRI:  7am - 10pm</p>
                    <p>SATURDAY:   8am - 10pm</p>
                    <p>SUNDAY:   8am - 11pm</p>
                    <br /><br />
                    <p><Nav.Link href="/FAQ" style={{display:'inline', marginBottom:'16px'}}>FAQ / <Nav.Link href="/shipping" style={{display:'inline'}}>Shipping & Returns / </Nav.Link></Nav.Link></p>
                    <p><Nav.Link href="/shipping" style={{display:'inline'}}>Store Policy / </Nav.Link></p>
                    <p><Nav.Link href="/shipping" style={{display:'inline'}}>Payment Methods </Nav.Link></p>
                </Col>
                <Col style={{marginLeft: '50px', marginTop: '30px', marginRight: '150px'}} >
                    <br /><br /><br />
                    <Row>
                        <Col>
                            <TextField id="standard-basic" label="Name" variant="standard" style={{ margin: 'auto', width: '100%', fontFamily: 'fantasy'}} />
                        </Col>
                        <Col>
                            <TextField id="standard-basic" label="Email" variant="standard" style={{ margin: 'auto', width: '100%'}} />
                        </Col>
                    </Row>

                    <TextField id="standard-basic" label="Subject" variant="standard" style={{ margin: 'auto', width: '100%'}} />
                    <br /><br /><br /><br /><br />
                    <textarea cols="60" rows="5" id="" placeholder="Your message" style={{border: 'none', resize: 'none'}}></textarea>  
                    <button className='mygtukas1' style={{border: 'none', borderColor: '#c9c9c9', backgroundColor: 'white', borderTop: 'solid', margin: 'auto', width: '100%'}}>SEND</button> 
                    <br /><br /><br />
                    <p style={{margin: '0px'}}>Get our Newsletters</p>
                    <FormValidation></FormValidation>
                </Col>
            </Row>
            


            
   </>
      )
    }
    
    export default Form