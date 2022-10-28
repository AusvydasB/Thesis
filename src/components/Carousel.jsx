import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade style={{margin: 'auto', width: '90%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.wixstatic.com/media/d01231e46af34161be7ad101d281a441.jpg/v1/fill/w_1960,h_1478,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/d01231e46af34161be7ad101d281a441.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{fontFamily: 'fantasy'}}>
          <h3>First  label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://st3.depositphotos.com/2931363/12878/i/950/depositphotos_128788922-stock-photo-man-making-pot-on-pottery.jpg"
          alt="Second slide"
        />

        <Carousel.Caption style={{fontFamily: 'fantasy'}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://st4.depositphotos.com/12293760/20190/i/1600/depositphotos_201906112-stock-photo-close-hands-potter-apron-making.jpg/"
          alt="Third slide"
         
        />

        <Carousel.Caption style={{fontFamily: 'fantasy'}}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default CarouselFadeExample;