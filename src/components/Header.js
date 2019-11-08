import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <img src="https://img.icons8.com/color/48/000000/nasa.png" alt="NASA Logo"/>
        <NavbarBrand href="/">NASA Photo of the Day</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.nasa.gov/about/index.html">About NASA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://blogs.nasa.gov/">Blogs</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Follow NASA
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavLink href="https://www.nasa.gov/socialmedia">Social Media</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink href="https://www.nasa.gov/connect/social/index.html">NASA Socials</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink href="https://www.nasa.gov/nasalive">NASA Live</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink href="https://spotthestation.nasa.gov/">Spot The Station</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;