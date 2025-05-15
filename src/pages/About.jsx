import { Container, Row, Col } from 'react-bootstrap'
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaCode } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import '../styles/About.css'

function About() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, level: 90 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 85 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 80 },
    { name: 'Bootstrap', icon: <FaBootstrap />, level: 85 },
    { name: 'React', icon: <FaReact />, level: 80 },
    { name: 'Java', icon: <FaJava />, level: 85 }
  ]

  return (
    <section className="about-section section">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="section-title">
              <span>02.</span> About Me
            </h2>
          </Col>
        </Row>
        
        <Row className="about-content">
          <Col lg={6} className="about-text">
            <p>
              Hello! I'm Nikita, a diligent MCA student with a strong foundation in computer science 
              and programming, currently expanding my expertise in Web Development.
            </p>
            <p>
              My journey in technology began with a Bachelor's in Computer Science (2020-2023), and 
              I'm currently pursuing my Master's in Computer Application (2023-2025).
            </p>
            <p>
              With a passion for creating innovative solutions, I've developed various projects including 
              a Hospital Management System and an Achievement Portal. I am continuously exploring 
              new technologies to enhance my skills and contribute to the ever-evolving tech industry.
            </p>
            <p>
              Beyond coding, I have the honor of being a two-time national baseball player and currently 
              serve as a TNP Coordinator at my college, helping fellow students connect with career opportunities.
            </p>
            <div className="about-links">
              <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
              <a href="https://www.linkedin.com/in/nikita-mishra-116199233/" className="btn" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
          </Col>
          
          <Col lg={6} className="skills-container">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div 
                        className="skill-level" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="education-container">
              <h3>Education</h3>
              <div className="education-item">
                <div className="education-year">2023 - 2025</div>
                <div className="education-details">
                  <h4>Master's in Computer Application</h4>
                  <p>Expanding skills in advanced programming and software development</p>
                </div>
              </div>
              
              <div className="education-item">
                <div className="education-year">2020 - 2023</div>
                <div className="education-details">
                  <h4>Bachelor's in Computer Science</h4>
                  <p>Built a strong foundation in computer science and programming</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="certificates-section">
          <Col lg={12}>
            <h3>Certificates & Achievements</h3>
            <div className="certificates-grid">
              <div className="certificate-item">
                <div className="certificate-icon">
                  <FaCode />
                </div>
                <div className="certificate-content">
                  <h4>Oracle Cloud Infrastructure Generative AI</h4>
                  <p>Certification in Oracle's cloud-based AI services and infrastructure</p>
                </div>
              </div>
              
              <div className="certificate-item">
                <div className="certificate-icon">
                  <FaJava />
                </div>
                <div className="certificate-content">
                  <h4>AICTE Android Developer Virtual Internship</h4>
                  <p>Developed mobile applications using Java and Android ecosystem</p>
                </div>
              </div>
              
              <div className="certificate-item">
                <div className="certificate-icon">
                  <FaCode />
                </div>
                <div className="certificate-content">
                  <h4>HackXcelerate Participant</h4>
                  <p>Participated in CBIT HackXcelerate 2024, a national hackathon</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About