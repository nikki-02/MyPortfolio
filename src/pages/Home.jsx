import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowRight } from 'react-icons/fa'
import '../styles/Home.css'


function Home() {
  return (
    <section className="home-section">
      <Container>
        <Row className="align-items-center hero-content">
          <Col lg={8} className="hero-text">
            <p className="greeting">Hi, my name is</p>
            <h1 className="name">Nikita Mishra.</h1>
            <h2 className="title">
              <TypeAnimation
                sequence={[
                  'I build things for the web.',
                  1000,
                  'I create digital experiences.',
                  1000,
                  'I develop interactive websites.',
                  1000
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </h2>
            <p className="description">
              I'm a software developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on expanding my expertise in Web Development 
              and creating accessible, human-centered products.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary text-black">
                View My Work <FaArrowRight className="btn-icon" />
              </Link>
              <Link to="/contact" className="btn">
                Get In Touch
              </Link>
            </div>
          </Col>

          <Col lg={4} className="hero-visual text-center" data-aos="fade-left">
  <div className="visual-container">
    <img src="src/assets/developer.png" alt="Developer at work" className="img-fluid hero-image" />
    
  </div>
</Col>

        </Row>
      </Container>
      
      <Container className="my-ethos-section" id="ethos">
  <Row>
    <Col lg={12}>
      <h3 className="section-title">
        <span>01.</span> My Tech Ethos
      </h3>
    </Col>
  </Row>
  <Row className="ethos-cards">
    <Col lg={6} md={6} sm={12} className="mb-4" data-aos="fade-up">
      <div className="ethos-card">
        <div className="ethos-icon">💡</div>
        <p>Tech should solve real problems and improve lives. I aim to build things that matter.</p>
        <strong>Purpose-Driven</strong>
      </div>
    </Col>
    <Col lg={6} md={6} sm={12} className="mb-4" data-aos="fade-up" data-aos-delay="100">
      <div className="ethos-card">
        <div className="ethos-icon">🧼</div>
        <p>Clean, readable code is a sign of respect—for users, collaborators, and future me.</p>
        <strong>Code with Care</strong>
      </div>
    </Col>
    <Col lg={6} md={6} sm={12} className="mb-4" data-aos="fade-up" data-aos-delay="200">
      <div className="ethos-card">
        <div className="ethos-icon">🎯</div>
        <p>Design isn’t decoration. It’s clarity. It's function. It’s the experience.</p>
        <strong>Design for Users</strong>
      </div>
    </Col>
    <Col lg={6} md={6} sm={12} className="mb-4" data-aos="fade-up" data-aos-delay="300">
      <div className="ethos-card">
        <div className="ethos-icon">🚀</div>
        <p>Tech evolves fast. I evolve with it — with curiosity, not pressure.</p>
        <strong>Growth Mindset</strong>
      </div>
    </Col>
  </Row>
</Container>

    </section>
  )
}

export default Home