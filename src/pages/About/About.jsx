import React from 'react'
import { Row } from 'react-bootstrap'
import Form from '../../components/Form'


const About = () => {
  return (
<>
  <div style={{ fontFamily: 'serif', margin: 'auto',  marginTop: '10px', width: '90%', paddingTop: '75px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '25px'}}>
    <Row style={{ textAlign: 'center'}}>
      <h1 >OUR STORY & PHILOSOPHY</h1>
    </Row> 
    <Row>
      <p style={{ textAlign: 'center', width: '700px', height: '100px', display: 'flex', margin: 'auto', paddingBottom: '95px', paddingTop: '45px', alignItems: 'center' }}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      <br />
      <p style={{ textAlign: 'center', width: '700px', height: '100px', display: 'flex', margin: 'auto', paddingBottom: '95px', paddingTop: '45px', alignItems: 'center' }}>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
    </Row>
    <Row style={{paddingBottom: '25px'}}> 
      <img src="https://static.wixstatic.com/media/697bc8_ea854d6e97a547f2b65b64c80b307140~mv2_d_3000_2002_s_2.jpg/v1/fill/w_1960,h_1214,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/697bc8_ea854d6e97a547f2b65b64c80b307140~mv2_d_3000_2002_s_2.jpg" alt=""  style={{width: '980px', height: '607px', margin: 'auto'}} />
    </Row>
  </div>
  <Form></Form>
  <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.9836000007276!2d25.29012821572499!3d54.70991168028732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96ae1dedd637%3A0x73978617430c730c!2sUlon%C5%B3%20g.%205%2C%20Vilnius%2008240!5e0!3m2!1sen!2slt!4v1659617153775!5m2!1sen!2slt" style={{margin: 'auto', width: '90%', marginLeft: '72px', height: '400px', marginTop: '10px'}}></iframe>
  <Row style={{ textAlign: 'center', marginTop: '10px'}}>
          <h6 > &#9400; 2022 by Ceramic-Studio.</h6>
  </Row> 
</>
  )
}

export default About