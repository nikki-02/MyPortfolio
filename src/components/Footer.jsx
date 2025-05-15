import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <div className="social-links">
              <a href="https://github.com/nikki-02" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/nikita-mishra-116199233/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:nikita.mishra2204@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
            <p className="copyright">
              Designed & Built by Nikita Mishra
              <br />
              <span className="highlight">&copy; {new Date().getFullYear()}</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer