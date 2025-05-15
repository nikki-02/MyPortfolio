import { Container, Row, Col } from 'react-bootstrap'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import '../styles/Contact.css'

function Contact() {
  return (
    <section className="contact-section section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">
              <span>04.</span> Get In Touch
            </h2>
            <p className="contact-intro">
              Have a question or want to work together? Feel free to reach out to me using the contact information below.
            </p>
          </Col>
        </Row>

        <Row className="contact-content justify-content-center">
          <Col lg={6} className="contact-info">
            <div className="info-box">
              <h3>Contact Information</h3>
              <p>I'm open for freelance opportunities and collaboration. Don't hesitate to reach out if you have any questions or proposals.</p>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:nikita.mishra2204@gmail.com">
                      nikita.mishra2204@gmail.com
                    </a>
                  </p>
                </div>
              </div>


              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <p>Nagpur, India</p>
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com/nikki-02" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/nikita-mishra-116199233/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
