import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Hospital Management System',
      description: 'Developed a Hospital Management System using Java, featuring patient registration, appointment scheduling, and medical record management. Implemented user-friendly interfaces, enhanced security with data encryption, and provided user role-based access control to streamline hospital operations and improve patient care.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['Java', 'Database Management', 'UI Design', 'Security Implementation'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 2,
      title: 'Achievement Portal',
      description: 'The Achievement Portal is a web application developed with HTML, CSS, JavaScript, and Node.js. It allows students to upload and view certificates and awards, showcasing their achievements. The interface is user-friendly and interactive, with data securely stored in a JSON file for easy management and retrieval.',
      image: 'https://images.pexels.com/photos/4219037/pexels-photo-4219037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'JSON'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'A responsive e-commerce website built with React and Bootstrap, featuring product listings, shopping cart functionality, and user authentication. Implemented state management for cart items and user preferences.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['React', 'Bootstrap', 'JavaScript', 'CSS'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather dashboard application that fetches real-time weather data based on user location or search queries. Features include current conditions, 5-day forecast, and interactive maps.',
      image: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['JavaScript', 'API Integration', 'CSS', 'Responsive Design'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'A task management application with features like task creation, categorization, due dates, and priority levels. Includes user authentication and data persistence.',
      image: 'https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      id: 6,
      title: 'Personal Portfolio',
      description: 'A showcase of my work as a developer, built with React and styled with modern CSS techniques. Features responsive design, animations, and contact form integration.',
      image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tech: ['React', 'JavaScript', 'CSS', 'EmailJS'],
      links: {
        github: '#',
        live: '#'
      }
    }
  ]

  return (
    <section className="projects-section section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">
              <span>03.</span> My Projects
            </h2>
            <p className="projects-intro">
              Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
            </p>
          </Col>
        </Row>
        
        <Row className="projects-grid">
          {projects.map((project) => (
            <Col key={project.id} lg={6} xl={4} className="mb-4">
              <Card className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <FaGithub />
                      </a>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live Project">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <p className="more-projects">
              More projects coming soon! Check my <a href="https://github.com/nikki-02" target="_blank" rel="noopener noreferrer">GitHub</a> for updates.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects