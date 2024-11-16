import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p>
                “To become a master at any skill, it takes the total effort of
                <br />
                your: heart, mind, and soul working together in tandem.”
                <br /> ― Maurice Young
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='owl-carousel owl-theme skill-slider'
              >
                <div className='item'>
                  <img src={meter1} alt='react' />
                  <h5>Shopify</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='react' />
                  <h5>Wordpress</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='react' />
                  <h5>Wix</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='react' />
                  <h5>React JS</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='angular' />
                  <h5>Angular JS</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='node' />
                  <h5>Node JS</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='java' />
                  <h5>Java</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='js' />
                  <h5>Javascript</h5>
                </div>
                <div className='item'>
                  <img src={meter3} alt='html-css' />
                  <h5>HTML, CSS</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='maya' />
                  <h5>Maya, Blender</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='git' />
                  <h5>GIT, GITHUB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='pic' />
    </section>
  );
};
