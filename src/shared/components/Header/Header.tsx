import { useLayoutEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Logo } from '../logo';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import './Header.css';

const ToggleIcon = styled.span`
  position: relative;
  background-color: ${(props: { clicked: any; }) => (props.clicked ? "transparent" : "white")};
  width: 2.5rem;
  height: 2px;
  display: inline-block;
  transition: all 0.3s;
  z-index: 1000;
  &::before, &::after {
    content: "";
    background-color: white; 
    width: 2.5rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props: { clicked: boolean; }) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props: { clicked: boolean; }) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props: { clicked: boolean; }) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props: { clicked: boolean; }) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;



export const Header: React.FC<any> = () => {
    const [isFullMenu, setFullMenu] = useState(false);
    
    const handleClick = () => { setFullMenu(!isFullMenu) };

    useLayoutEffect(() => {
      if (isFullMenu) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
      }
      if (!isFullMenu) {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
      }
    }, [isFullMenu]);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" >
            <Logo></Logo>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav" className='px-3'>
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link href='/work'>
                Work
              </Nav.Link>
              <Nav.Link href='/services'>
                Services
              </Nav.Link>
              <Nav.Link href="/stories">
                Stories
              </Nav.Link>
              <Nav.Link href="/about">
                About
              </Nav.Link>
              <Nav.Link href="/careers">
                Careers
              </Nav.Link>
              <Nav.Link href="/contact">
                Contact
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          
          {/* For menu on full page */}
          <div className = {isFullMenu? "FullMenuBackground transform-scale-100":"FullMenuBackground transform-scale-0"}></div>
          <div className="d-flex align-items-center ToggleIconWrapper" onClick={handleClick}>
            <ToggleIcon clicked={isFullMenu}>&nbsp;</ToggleIcon>
          </div>
          <nav className = {isFullMenu? "FullMenuContent w-100 opacity-1":"FullMenuContent w-0 opacity-0"}>
              <Container className='FullMenuList'>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/">
                    Home
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/work">
                    Work
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to='/services'>
                    Services
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/stories">
                    Stories
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/about">
                    About
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/careers">
                    Careers
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/contact">
                    Contact
                  </NavLink>
                  <hr/>
              </Container>
            
          </nav>
          
        
        </Container>
      </Navbar>
    );
}