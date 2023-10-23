import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage/CarouselImage';
import styles from './Carusels.module.css';

function Carousels() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className={styles.caruselimgwrap} >
          
                    <img
                        className="d-block w-100"
                        src="/images/dog_1.png"
                        alt="dog_1"
                    />
                    <img
                        className="d-block w-100"
                        src="/images/dog_2.png"
                        alt="dog_2"
                    />
                    <img
                        className="d-block w-100"
                        src="/images/dog_3.png"
                        alt="dog_3"
                    />
                    <img
                        className="d-block w-100"
                        src="/images/dog_4.png"
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
                src="/images/dog_5.png"
                alt="dog_5"
            />
            <img
                className="d-block w-100"
                src="/images/dog_6.png"
                alt="dog_6"
            />
            <img
                className="d-block w-100"
                src="/images/dog_7.png"
                alt="dog_7"
            />
            <img
                className="d-block w-100"
                src="/images/dog_8.png"
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
                        src="/images/dog_9.png"
                        alt="dog_9"
                    />
                    <img
                        className="d-block w-100"
                        src="/images/dog_10.png"
                        alt="dog_11"
                    />
                    <img
                        className="d-block w-100"
                        src="/images/dog_11.png"
                        alt="dog_12"
                    />
                    <img
                        className="d-block w-100"
                        src="/images/dog_12.png"
                        alt="dog_13"
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