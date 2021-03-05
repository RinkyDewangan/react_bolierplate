/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from "reactstrap";
import './display.css'

export const NavController = (): JSX.Element => { 
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
    <Navbar expand="md">
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="me-auto nav-bar-style" navbar>
        <NavItem>
          <NavLink href="/components/" className='nav-text-style'>ALL</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/documentary/" className='nav-text-style'>DOCUMENTARY</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/comedy/" className='nav-text-style'>COMEDY</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/horror/" className='nav-text-style'>HORROR</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/crime/" className='nav-text-style'>CRIME</NavLink>
        </NavItem>
      </Nav>
      <NavbarText className='text-style'>SORT BY</NavbarText>
      <UncontrolledDropdown >
          <DropdownToggle>
            RELEASE DATE
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              TITLE
            </DropdownItem>
            <DropdownItem>
              TYPE
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
    </Collapse>
  </Navbar>
)}

export default NavController;