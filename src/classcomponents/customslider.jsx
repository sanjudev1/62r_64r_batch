import {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';


class Slider extends Component {
 render(){
  return (
    <Carousel>
      <Carousel.Item>
        <img  style={{width:"100%",height:"350px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9WNwziY4aN6rEP0S5TH2Lqeo_AaenzGPNA&s" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{width:"100%",height:"350px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9WNwziY4aN6rEP0S5TH2Lqeo_AaenzGPNA&s" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"100%",height:"350px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9WNwziY4aN6rEP0S5TH2Lqeo_AaenzGPNA&s" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
 }
}

export default Slider;