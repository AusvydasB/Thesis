import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from '../../components/Accordion'
import Accordion2 from '../../components/Accordion2'
import { Row } from 'react-bootstrap'
import Form from '../../components/Form'

function ControlledTabsExample() {
  const [key, setKey] = useState('home');

  return (
<>
<div style={{ fontFamily: 'serif', margin: 'auto',  marginTop: '10px', width: '90%', paddingTop: '75px', paddingBottom: '450px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '20px'}}>
        <Row style={{ textAlign: 'center'}}>
          <h1 >FAQ</h1>
        </Row> 
        <Row style={{ textAlign: 'center', width: '700px', height: '100px', display: 'flex', margin: 'auto', paddingBottom: '95px', paddingTop: '45px', alignItems: 'center', fontFamily: 'sans-serif' }}>
                      <Tabs 
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                      >
                        <Tab eventKey="home" title="Setting up FAQs">
                          <Accordion></Accordion>
                        </Tab>
                        <Tab eventKey="profile" title="General">
                          <Accordion2></Accordion2>
                        </Tab>
                      </Tabs>
        </Row>
</div>
<Form></Form>
<iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.9836000007276!2d25.29012821572499!3d54.70991168028732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96ae1dedd637%3A0x73978617430c730c!2sUlon%C5%B3%20g.%205%2C%20Vilnius%2008240!5e0!3m2!1sen!2slt!4v1659617153775!5m2!1sen!2slt" style={{margin: 'auto', width: '90%', marginLeft: '72px', height: '400px', marginTop: '10px'}}></iframe>
  <Row style={{ textAlign: 'center', marginTop: '10px'}}>
          <h6 > &#9400; 2022 by Ceramic-Studio.</h6>
  </Row> 
 


</>
  );
}

export default ControlledTabsExample;