import React from 'react'
import { Row } from 'react-bootstrap'
import Form from '../../components/Form'
import FormValidation from '../../components/FormValidation'

const Shipping = () => {
  return (
<>
  <div style={{ fontFamily: 'serif', margin: 'auto',  marginTop: '10px', width: '90%', paddingTop: '150px', paddingBottom: '150px', backgroundColor: 'white', borderRadius: '20px', marginBottom: '25px'}}>
    <Row style={{ textAlign: 'center'}}>
      <h1 id='shipping' >SHIPPING POLICY</h1>
    </Row> 
    <Row>
      <p style={{ textAlign: 'center', width: '700px', height: '100px', display: 'flex', margin: 'auto', paddingBottom: '45px', paddingTop: '45px', alignItems: 'center' }}>I’m a shipping policy section. I’m a great place to update your customers about your shipping methods, packaging and costs. Use plain, straightforward language to build trust and make sure that your customers stay loyal!</p>
      <p style={{ textAlign: 'center', width: '700px', height: '100px', display: 'flex', margin: 'auto', paddingBottom: '45px', paddingTop: '45px', alignItems: 'center' }}>I'm the second paragraph in your shipping policy section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
    </Row>
    <br /> <br /> <br />  
    <Row style={{ textAlign: 'center'}}>
      <h1 id='return' >RETURN & EXCHANGE POLICY</h1>
    </Row> 
    <Row>
      <p style={{ textAlign: 'center', width: '700px', height: '100px', display: 'flex', margin: 'auto', paddingBottom: '45px', paddingTop: '45px', alignItems: 'center' }}>I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
      <p style={{ textAlign: 'center', width: '700px', height: '100px', display: 'flex', margin: 'auto', paddingBottom: '45px', paddingTop: '45px', alignItems: 'center' }}>I'm the second paragraph in your return & exchange policy. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
    </Row>
    <br /> <br /> <br />  
    <Row style={{ textAlign: 'center'}}>
      <h1 >CUSTOMER CARE</h1>
    </Row> 
    <Row>
      <p style={{ textAlign: 'center', width: '700px', height: '100px', display: 'flex', margin: 'auto', paddingBottom: '45px', paddingTop: '45px', alignItems: 'center' }}>I’m a customer care section. I’m a great place to write a long text about your company and your services, and, most importantly, how to contact your store with queries. Writing a detailed Customer Care policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
      <p style={{ textAlign: 'center', width: '700px', height: '100px', display: 'flex', margin: 'auto', paddingBottom: '45px', paddingTop: '45px', alignItems: 'center' }}>I'm the second paragraph in your customer care section. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add details about your policy and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
    </Row>
    <br /> <br /> <br /> 
    <Row style={{ textAlign: 'center'}}>
      <h1 style={{marginBottom: '20px'}}>PAYMENT METHODS</h1>
    </Row> 
    <Row>
      <p style={{ textAlign: 'center', width: '700px', height: '50px',  margin: 'auto' }}>- Credit / Debit Cards</p>
      <p style={{ textAlign: 'center', width: '700px', height: '50px',  margin: 'auto'    }}>- PAYPAL</p>
      <p style={{ textAlign: 'center', width: '700px', height: '50px',  margin: 'auto'    }}>- Offline Payments</p>
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

export default Shipping