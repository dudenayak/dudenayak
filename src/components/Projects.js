import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import projImg4 from '../assets/img/project-img4.png';
import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.png';
import projImg7 from '../assets/img/project-img7.png';
import projImg8 from '../assets/img/project-img8.png';
import projImg9 from '../assets/img/project-img9.png';
import projImg10 from '../assets/img/project-img10.png';
import projImg11 from '../assets/img/project-img11.png';
import projImg12 from '../assets/img/project-img12.png';
import projImg13 from '../assets/img/project-img13.png';
import projImg14 from '../assets/img/project-img14.png';
import projImg15 from '../assets/img/project-img15.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Food Ordering App',
      description: 'A food ordering app followed by Multi-Tenant Architecture.',
      imgUrl: projImg15,
      link: 'https://github.com/dudenayak/FoodOrderingApp-Frontend',
    },
    {
      title: 'Spotify Clone',
      description: 'A music playing website',
      imgUrl: projImg14,
      link: 'https://dudenayak.github.io/JS-Project/login-signup.html',
    },
    {
      title: 'RingnRelax',
      description: 'A Mobile Repairing Workshop',
      imgUrl: projImg13,
      link: 'https://www.ringnrelax.com/',
    },
    {
      title: 'Zocket Dashboard',
      description: 'Create campaigns for ads',
      imgUrl: projImg12,
      link: 'https://zocket-frontend.vercel.app/',
    },
    {
      title: 'XenonStack',
      description: 'Login/SignUp Functionality',
      imgUrl: projImg11,
      link: 'https://xenonstack.vercel.app/',
    },
    {
      title: 'VR Tour',
      description: 'A VR Tour of Indian Pilgrimages',
      imgUrl: projImg7,
      link: 'https://vrtourpilgrimage.netlify.app/',
    },
    {
      title: 'Medical Info',
      description: 'A home page for medical website',
      imgUrl: projImg8,
      link: 'https://front-end-task-dudenayak.vercel.app/',
    },
    {
      title: 'Netflix Clone',
      description: 'A functional netflix clone',
      imgUrl: projImg6,
      link: 'https://github.com/dudenayak/Netflix_Clone',
    },
    {
      title: 'Care For You',
      description: 'An all in one medical website',
      imgUrl: projImg1,
      link: 'https://careforyou.azurewebsites.net',
    },
    {
      title: 'LinkedIn Clone',
      description: 'A linkedin clone where you can post your thoughts',
      imgUrl: projImg9,
      link: 'https://linkedin-clone-4wqavgddm-dudenayak.vercel.app/',
    },
    {
      title: 'Gmail Clone',
      description: 'An exact replica of gmail',
      imgUrl: projImg10,
      link: 'https://clone-bdfe6.web.app/',
    },
    {
      title: 'Virtual Clinic',
      description: 'A 3D visualization of hospitals',
      imgUrl: projImg2,
      link: 'https://dudenayak.github.io/Runtime/',
    },

    {
      title: 'Travel Journal',
      description: 'A react app for travel journal',
      imgUrl: projImg4,
      link: 'https://travel-journal-psi.vercel.app/',
    },
    {
      title: 'Real Estate',
      description: 'A react app for real estate',
      imgUrl: projImg5,
      link: 'https://real-estate-mrr0bmrjy-dudenayak.vercel.app/',
    },
    {
      title: 'Resumify',
      description: 'A resume builder to create resume and print them',
      imgUrl: projImg3,
      link: 'https://resumify.vercel.app/',
    },
  ];

  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Journey so far..</h2>
                  <p></p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Achievements</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <div className='achievements'>
                          <li>Winner - Smart India Hackathon’22</li>
                          <li>30 Days of Google Cloud</li>
                          <li>Won EchoAR Track at Cicada 3301: Reinvented</li>
                          <li>Microsoft Learn Student Ambassador - Alpha</li>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <div className='achievements'>
                          <h2 style={{ textAlign: 'left' }}>SDE</h2>
                          <h4>Posist Technologies | Jan 2023 - Present</h4>
                          <li>
                            Working on the POS App - Front Of House Reports : 
                            Optimizing reports, creating new features, and 
                            generating new reports.
                          </li>
                          <li>
                            Skills: AngularJS · Node.js · Express.js · MongoDB · AWS S3
                          </li>
                          <br />
                          <h2 style={{ textAlign: 'left' }}>SDE - Intern</h2>
                          <h4>Earthetic Inc. | July 2021 - Sept 2021</h4>
                          <li>
                            Worked on the development of back end APIs, frontend
                            UI elements and layouts and crucial business logic
                            for database queries and generating reports for a
                            web application.
                          </li>
                          <li>
                            Worked on a mobile application, developed it’s
                            frontend, functionality and design using React
                            Native under the guidance of senior developers.
                          </li>
                          <br />
                          <h2 style={{ textAlign: 'left' }}>SDE - Intern</h2>
                          <h4>Technical Zen | April 2021 - June 2021</h4>
                          <li>
                            Contributed to the existing code and functionality
                            in an agile development cycle while working on the
                            development of a restaurant website’s design using
                            ReactJS.
                          </li>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' alt='' src={colorSharp2}></img>
    </section>
  );
};
