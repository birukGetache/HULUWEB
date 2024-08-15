import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaBars, FaTimes } from 'react-icons/fa';

// Styled components for Navbar
const Nav = styled.nav`
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure it stays on top */
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between logo and hamburger menu */
  height:50px;
    backdrop-filter: blur(5px); /* Adjust the blur radius as needed */
  -webkit-backdrop-filter: blur(10px);
`;

const Logo = styled.img`
  color: #fff;
  font-size: 2px;
  height:50px;
  width:50px;
  border-radius:50%;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  margin-right:10px;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Hide NavList on mobile screens */
  }
`;

const NavItem = styled.li`
color:black;
  margin: 0;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 10px 15px;
  font-size:20px;
  border-radius: 5px;
  &:hover {
      background: lightblue; /* Darker blue on hover */
  }
      font-family: "Poppins", system-ui;
`;

const Hamburger = styled.div`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  padding: 0 15px; /* Padding from both sides */

  @media (min-width: 769px) {
    display: none; /* Hide hamburger on larger screens */
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  right: 0; /* Align mobile menu to the right */
  background: #007bff;
  width: 100%;
  text-align: center;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none; /* Hide MobileNavList on large screens */
  }
`;

const MobileNavItem = styled.li`
  margin: 0;
`;

const MobileNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 15px;
  display: block;
  border-bottom: 1px solid #0056b3; /* Divider line */
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: #bluelight;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <Logo src='/HULU.png'></Logo> {/* Replace with actual logo component or image */}
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
      <MobileNavList open={isOpen}>
        <MobileNavItem>
          <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/services" onClick={toggleMenu}>Services</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
        </MobileNavItem>
      </MobileNavList>
    </Nav>
  );
};

export default Navbar;