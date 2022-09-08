import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.jfif';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} sm={6}>
            <div className='logo'>
              <img src={logo} alt='Logo' />
            </div>
          </Col>
          <Col
            size={12}
            sm={6}
            className='text-center text-sm-end'
            style={{ marginTop: '50px' }}
          >
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/devesh-jain-b68b3119a/'
                rel='noreferrer'
                target='_blank'
              >
                <img src={navIcon1} alt='' />
              </a>
              <a
                href='https://github.com/dudenayak'
                rel='noreferrer'
                target='_blank'
              >
                <img src={navIcon4} style={{ width: '80%' }} alt='' />
              </a>
              <a
                href='https://www.instagram.com/dude.nayak/'
                rel='noreferrer'
                target='_blank'
              >
                <img src={navIcon3} alt='' />
              </a>
            </div>
            <p>Copyright © 2022 Devesh Jain</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
