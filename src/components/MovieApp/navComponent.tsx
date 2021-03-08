/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useState } from "react";
import { Collapse, Nav, Navbar, NavbarText, NavbarToggler, NavItem, NavLink } from "reactstrap";
import './display.css'

const arrayMap = [
  {key : "TYPE", value : "Type"},
  {key : "RELEASE DATE", value : "Year"},
  {key : "TITLE", value : "Title"},
]

interface Props {
  children?: ReactNode;
  sortProp?:string;
  handler?:any;
}

export const NavController = (props:Props): JSX.Element => { 
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
        <select value={props.sortProp} onChange={props.handler}>
            {arrayMap.map((val, index) => (
              <option value={val.value} key={index}>{val.key}</option>
            ))}
        </select>
    </Collapse>
  </Navbar>
)}

export default NavController;
