import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'
import '../styles/Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      expanded={expanded}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="nav-brand">
          <span className="logo">NM.</span>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(!expanded)}
        />
        
        <BootstrapNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
               Home
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/projects" 
              className={isActive('/projects') ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Projects
            </Nav.Link>
            
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
            
            <Nav.Link 
              href="/Nikita Resume New (1).pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-btn"
              onClick={() => setExpanded(false)}
            >
              Resume
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar