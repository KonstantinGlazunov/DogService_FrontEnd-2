import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage/CarouselImage';
import styles from './Carusels.module.css';
import dog_1 from '../images/dog_1.png' ;
import dog_2 from '../images/dog_2.png' ;
import dog_3 from '../images/dog_3.png' ;
import dog_4 from '../images/dog_4.png' ;
import dog_5 from '../images/dog_5.png' ;
import dog_6 from '../images/dog_6.png' ;
import dog_7 from '../images/dog_7.png' ;
import dog_8 from '../images/dog_8.png' ;
import dog_9 from '../images/dog_9.png' ;
import dog_10 from '../images/dog_10.png' ;
import dog_11 from '../images/dog_11.png' ;
import dog_12 from '../images/dog_12.png' ;


function Carousels() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className={styles.caruselimgwrap} >
          
                    <img
                        className="d-block w-100"
                        src={dog_1}
                        alt="dog_1"
                    />
                    <img
                        className="d-block w-100"
                        src={dog_2}
                        alt="dog_2"
                    />
                    <img
                        className="d-block w-100"
                        src={dog_3}
                        alt="dog_3"
                    />
                    <img
                        className="d-block w-100"
                        src={dog_4}
                        alt="dog_4"
                    />


          </div>
        {/* <CarouselImage text="First slide" /> */}
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.caruselimgwrap} >
            
            <img
                className="d-block w-100"
                src={dog_5}
                alt="dog_5"
            />
            <img
                className="d-block w-100"
                src={dog_6}
                alt="dog_6"
            />
            <img
                className="d-block w-100"
                src={dog_7}
                alt="dog_7"
            />
            <img
                className="d-block w-100"
                src={dog_8}
                alt="dog_8"
                    />
        </div>
        {/* <CarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.caruselimgwrap} >
          
                    <img
                        className="d-block w-100"
                        src={dog_9}
                        alt="dog_9"
                    />
                    <img
                        className="d-block w-100"
                        src={dog_10}
                        alt="dog_10"
                    />
                    <img
                        className="d-block w-100"
                        src={dog_11}
                        alt="dog_11"
                    />
                    <img
                        className="d-block w-100"
                        src={dog_12}
                        alt="dog_12"
                    />
          </div>
        {/* <CarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;