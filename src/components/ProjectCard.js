import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={link}
        rel='noreferrer'
        target='_blank'
        style={{ color: 'white', 'text-decoration': 'none' }}
      >
        <div className='proj-imgbx'>
          <img src={imgUrl} alt='' />
          <div className='proj-txtx'>
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
