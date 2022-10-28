import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Col, Row, Container } from 'react-bootstrap'
import Modal from './Modal'
import Popover from './Popover'



export default function MediaCard() {
  return (
    <Container className='hovering'>
      <Row style={{marginLeft: '35px', margin: 'auto', width: '100%',  padding: '10px', justifyContent: 'center', display: 'flex'}}>
        <Col>
        <Card sx={{ maxWidth: '421px' }}>
      <CardMedia 
        component="img"
        alt="pottery"
        height="281px"
        image="https://static.wixstatic.com/media/697bc8_505bcdce5fc045ac8cc7d0746dd13571~mv2_d_3000_1744_s_2.jpg/v1/fill/w_842,h_562,al_c,q_85,usm_0.66_1.00_0.01/697bc8_505bcdce5fc045ac8cc7d0746dd13571~mv2_d_3000_1744_s_2.webp"
      />
      <CardContent style={{fontFamily: 'fantasy', paddingBottom: '0px', textAlign: 'center'}} >
        <Typography gutterBottom variant="h5" component="div" >
          I'm a pottery product
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{padding: '0px'}}>
        <p className="MuiTypography-root MuiTypography-body2 css-r40f8v-MuiTypography-root" >I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.
</p><br />
        <h6 style={{margin: '0', padding: '0'}}> <del style={{paddingRight: '5px'}}>$85.00 </del> $65.00</h6>
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around', margin: '0px', paddingBottom: '20px', paddingTop: '0px'}}> 
        <Modal/>
        <Popover/>
      </CardActions>
    </Card>
        </Col>
        <Col>
        <Card sx={{ maxWidth: '421px' }}>
      <CardMedia 
        component="img"
        alt="pottery"
        height="281px"
        image="https://static.wixstatic.com/media/697bc8_86a73d621f9d46229e011939975c116e~mv2_d_3000_1744_s_2.jpg/v1/fill/w_832,h_556,al_c,q_85,usm_0.66_1.00_0.01/697bc8_86a73d621f9d46229e011939975c116e~mv2_d_3000_1744_s_2.webp"
      />
      <CardContent style={{fontFamily: 'fantasy', paddingBottom: '0px', textAlign: 'center'}} >
        <Typography gutterBottom variant="h5" component="div" >
          I'm a pottery product
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{padding: '0px'}}>
        <p className="MuiTypography-root MuiTypography-body2 css-r40f8v-MuiTypography-root" >I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.
</p><br />
        <h6 style={{margin: '0', padding: '0'}}>$50.00</h6>
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around', margin: '0px', paddingBottom: '20px', paddingTop: '0px'}}> 
        <Modal/>
        <Popover/>
      </CardActions>
    </Card>
        </Col>
        <Col>
        <Card sx={{ maxWidth: '421px' }}>
      <CardMedia 
        component="img"
        alt="pottery"
        height="281px"
        image="https://static.wixstatic.com/media/697bc8_5b14db998c9f45379e50e7e7fb0ad18c~mv2_d_3000_1744_s_2.jpg/v1/fill/w_832,h_556,al_c,q_85,usm_0.66_1.00_0.01/697bc8_5b14db998c9f45379e50e7e7fb0ad18c~mv2_d_3000_1744_s_2.webp"
      />
      <CardContent style={{fontFamily: 'fantasy', paddingBottom: '0px', textAlign: 'center'}} >
        <Typography gutterBottom variant="h5" component="div" >
          I'm a pottery product
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{padding: '0px'}}>
        <p className="MuiTypography-root MuiTypography-body2 css-r40f8v-MuiTypography-root" >I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.
</p><br />
        <h6 style={{margin: '0', padding: '0'}}>$40.00</h6>
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around', margin: '0px', paddingBottom: '20px', paddingTop: '0px'}}> 
        <Modal/>
        <Popover/>
      </CardActions>
    </Card>
        </Col>
      </Row>
      <Row style={{marginLeft: '35px', margin: 'auto', width: '100%',  padding: '10px', justifyContent: 'center', display: 'flex'}}>
      <Col>
        <Card sx={{ maxWidth: '421px' }}>
      <CardMedia 
        component="img"
        alt="pottery"
        height="281px"
        image="https://static.wixstatic.com/media/697bc8_737c1c161f394fd386b56034244adf2b~mv2_d_3000_1744_s_2.jpg/v1/fill/w_832,h_556,al_c,q_85,usm_0.66_1.00_0.01/697bc8_737c1c161f394fd386b56034244adf2b~mv2_d_3000_1744_s_2.webp"
      />
      <CardContent style={{fontFamily: 'fantasy', paddingBottom: '0px', textAlign: 'center'}} >
        <Typography gutterBottom variant="h5" component="div" >
          I'm a pottery product
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{padding: '0px'}}>
        <p className="MuiTypography-root MuiTypography-body2 css-r40f8v-MuiTypography-root" >I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.
</p><br />
        <h6 style={{margin: '0', padding: '0'}}>$25.00</h6>
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around', margin: '0px', paddingBottom: '20px', paddingTop: '0px'}}> 
        <Modal/>
        <Popover/>
      </CardActions>
    </Card>
        </Col>
        <Col>
        <Card sx={{ maxWidth: '421px' }}>
      <CardMedia 
        component="img"
        alt="pottery"
        height="281px"
        image="https://static.wixstatic.com/media/697bc8_13699a0a215a4763943aebf17183f387~mv2_d_3000_1744_s_2.jpg/v1/fill/w_832,h_556,al_c,q_85,usm_0.66_1.00_0.01/697bc8_13699a0a215a4763943aebf17183f387~mv2_d_3000_1744_s_2.webp"
      />
      <CardContent style={{fontFamily: 'fantasy', paddingBottom: '0px', textAlign: 'center'}} >
        <Typography gutterBottom variant="h5" component="div" >
          I'm a pottery product
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{padding: '0px'}}>
        <p className="MuiTypography-root MuiTypography-body2 css-r40f8v-MuiTypography-root" >I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.
</p><br />
        <h6 style={{margin: '0', padding: '0'}}> <del style={{paddingRight: '5px'}}>$38.00 </del>$45.00</h6>
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around', margin: '0px', paddingBottom: '20px', paddingTop: '0px'}}> 
        <Modal/>
        <Popover/>
      </CardActions>
    </Card>
        </Col>
        <Col>
        <Card sx={{ maxWidth: '421px' }}>
      <CardMedia 
        component="img"
        alt="pottery"
        height="281px"
        image="https://static.wixstatic.com/media/697bc8_49306eb7e4674636bf3a12f3364f8cbf~mv2_d_3000_1744_s_2.jpg/v1/fill/w_832,h_556,al_c,q_85,usm_0.66_1.00_0.01/697bc8_49306eb7e4674636bf3a12f3364f8cbf~mv2_d_3000_1744_s_2.webp"
      />
      <CardContent style={{fontFamily: 'fantasy', paddingBottom: '0px', textAlign: 'center'}} >
        <Typography gutterBottom variant="h5" component="div" >
          I'm a pottery product
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{padding: '0px'}}>
        <p className="MuiTypography-root MuiTypography-body2 css-r40f8v-MuiTypography-root" >I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.
</p><br />
        <h6 style={{margin: '0', padding: '0'}}>$18.00</h6>
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around', margin: '0px', paddingBottom: '20px', paddingTop: '0px'}}> 
        <Modal/>
        <Popover/>
      </CardActions>
    </Card>
        </Col>
      </Row>
      <Row style={{marginLeft: '35px', margin: 'auto', width: '100%',  padding: '10px', justifyContent: 'center', display: 'flex'}}>
      <Col>
        <Card sx={{ maxWidth: '421px' }}>
      <CardMedia 
        component="img"
        alt="pottery"
        height="281px"
        image="https://static.wixstatic.com/media/697bc8_710b03523be34ead879e7278ee0c4a99~mv2_d_3000_1744_s_2.jpg/v1/fill/w_832,h_556,al_c,q_85,usm_0.66_1.00_0.01/697bc8_710b03523be34ead879e7278ee0c4a99~mv2_d_3000_1744_s_2.webp"
      />
      <CardContent style={{fontFamily: 'fantasy', paddingBottom: '0px', textAlign: 'center'}} >
        <Typography gutterBottom variant="h5" component="div" >
          I'm a pottery product
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{padding: '0px'}}>
        <p className="MuiTypography-root MuiTypography-body2 css-r40f8v-MuiTypography-root" >I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.
</p><br />
        <h6 style={{margin: '0', padding: '0'}}>$130.00</h6>
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around', margin: '0px', paddingBottom: '20px', paddingTop: '0px'}}> 
        <Modal/>
        <Popover/>
      </CardActions>
    </Card>
        </Col>
        <Col>
        <Card sx={{ maxWidth: '421px' }}>
      <CardMedia 
        component="img"
        alt="pottery"
        height="281px"
        image="https://static.wixstatic.com/media/697bc8_f2d08626492e48e1b86e056f7c0e1a6d~mv2_d_3000_1744_s_2.jpg/v1/fill/w_832,h_556,al_c,q_85,usm_0.66_1.00_0.01/697bc8_f2d08626492e48e1b86e056f7c0e1a6d~mv2_d_3000_1744_s_2.webp"
      />
      <CardContent style={{fontFamily: 'fantasy', paddingBottom: '0px', textAlign: 'center'}} >
        <Typography gutterBottom variant="h5" component="div" >
          I'm a pottery product
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{padding: '0px'}}>
        <p className="MuiTypography-root MuiTypography-body2 css-r40f8v-MuiTypography-root" >I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.
</p><br />
        <h6 style={{margin: '0', padding: '0'}}>$45.00</h6>
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around', margin: '0px', paddingBottom: '20px', paddingTop: '0px'}}> 
        <Modal/>
        <Popover/>
      </CardActions>
    </Card>
        </Col>
        <Col>
        <Card sx={{ maxWidth: '421px' }}>
      <CardMedia 
        component="img"
        alt="pottery"
        height="281px"
        image="https://static.wixstatic.com/media/697bc8_c0ed76883931447399276af2f461f9cc~mv2_d_3000_1744_s_2.jpg/v1/fill/w_832,h_556,al_c,q_85,usm_0.66_1.00_0.01/697bc8_c0ed76883931447399276af2f461f9cc~mv2_d_3000_1744_s_2.webp"
      />
      <CardContent style={{fontFamily: 'fantasy', paddingBottom: '0px', textAlign: 'center'}} >
        <Typography gutterBottom variant="h5" component="div" >
          I'm a pottery product
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{padding: '0px'}}>
        <p className="MuiTypography-root MuiTypography-body2 css-r40f8v-MuiTypography-root" >I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.
</p><br />
        <h6 style={{margin: '0', padding: '0'}}><del style={{paddingRight: '5px'}}>$120.00 </del>$95.00</h6>
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'space-around', margin: '0px', paddingBottom: '20px', paddingTop: '0px'}}> 
        <Modal/>
        <Popover/>
      </CardActions>
    </Card>
        </Col>
      </Row>
    </Container>
  );
}
