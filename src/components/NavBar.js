import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.jfif';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href='/'>
            <div className='logo'>
              <img src={logo} alt='logo' />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link
                href='#home'
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href='#skills'
                className={
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href='#projects'
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                Our Clients
              </Nav.Link>
              {/* <Nav.Link
                href='#about'
                className={
                  activeLink === 'about'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('about')}
              >
                About Us
              </Nav.Link> */}
            </Nav>
            <span className='navbar-text'>
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
              <HashLink to='#connect'>
                <button className='vvd'>
                  <span>Hire Me</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
