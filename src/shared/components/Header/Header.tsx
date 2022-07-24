import { useLayoutEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Logo } from '../logo';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import './Header.css';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

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
    
    const {t} = useTranslation('common');

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
                {t('label.work')}
              </Nav.Link>
              <Nav.Link href='/services'>
                {t('label.services')}
              </Nav.Link>
              <Nav.Link href="/stories">
                {t('label.stories')}
              </Nav.Link>
              <Nav.Link href="/about">
                {t('label.about')}
              </Nav.Link>
              <Nav.Link href="/careers">
                {t('label.careers')}
              </Nav.Link>
              <Nav.Link href="/contact">
                {t('label.contact')}
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
                  <div className='d-flex flex-sm-row flex-column justify-content-between'>
                    <div className='FullMenuLanguageSwitcher my-4 my-sm-0'>
                          <LanguageSwitcher/>
                    </div>
                    
                    <NavLink className="FullMenuItem" onClick={handleClick} to="/">
                      {t('label.home')}
                    </NavLink>
                  </div>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/work">
                    {t('label.work')}
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to='/services'>
                    {t('label.services')}
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/stories">
                    {t('label.stories')}
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/about">
                    {t('label.about')}
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/careers">
                    {t('label.careers')}
                  </NavLink>
                  <hr/>
                  <NavLink className="FullMenuItem" onClick={handleClick} to="/contact">
                    {t('label.contact')}
                  </NavLink>
                  <hr/>
              </Container>
          </nav>
        </Container>
      </Navbar>
    );
}