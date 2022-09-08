import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5cj4aes',
        'template_o2cnaop',
        form.current,
        'Nzq1sBZiACiJ6NtkI'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                  src={contactImg}
                  alt='Contact Us'
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          placeholder='First Name'
                          name='first_name'
                          required='true'
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='text'
                          placeholder='Last Name'
                          name='last_name'
                          required='true'
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='email'
                          placeholder='Email Address'
                          name='user_email'
                          required='true'
                        />
                      </Col>
                      <Col size={12} sm={6} className='px-1'>
                        <input
                          type='tel'
                          placeholder='Phone No.'
                          name='user_number'
                          required='true'
                        />
                      </Col>
                      <Col size={12} className='px-1'>
                        <textarea
                          rows='6'
                          placeholder='Message'
                          name='message'
                          required='true'
                        ></textarea>
                        <button type='submit' value='Send'>
                          <span>Send</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
