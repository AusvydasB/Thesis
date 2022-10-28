import React from 'react'
import Carousel from '../../components/Carousel'
import Card from '../../components/Card'
import { Row} from 'react-bootstrap'
import Form from '../../components/Form'






const home = () => {
  return (
 <>
  <Carousel/>
      <div style={{ fontFamily: 'serif', margin: 'auto',  marginTop: '10px', width: '90%', paddingTop: '75px', backgroundColor: 'white', borderRadius: '20px'}}>
        <Row style={{ textAlign: 'center'}}>
          <h1 >OUR COLLECTION</h1>
        </Row> 
        <Row>
          <p style={{ textAlign: 'center', width: '700px', height: '100px', display: 'flex', margin: 'auto', paddingBottom: '95px', paddingTop: '45px', alignItems: 'center' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </Row>
      </div>
  <Card/>    
  <Form/>
  <iframe id='frame' title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.9836000007276!2d25.29012821572499!3d54.70991168028732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96ae1dedd637%3A0x73978617430c730c!2sUlon%C5%B3%20g.%205%2C%20Vilnius%2008240!5e0!3m2!1sen!2slt!4v1659617153775!5m2!1sen!2slt" style={{margin: 'auto', width: '90%', marginLeft: '72px', height: '400px', marginTop: '10px'}}></iframe>
  <Row style={{ textAlign: 'center', marginTop: '10px'}}>
          <h6 > &#9400; 2022 by Ceramic-Studio.</h6>
  </Row> 
 
    


  

  
</>   
  )
}

export default home