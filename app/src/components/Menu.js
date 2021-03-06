import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">To-do List</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                  <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="/new">Novo Item</NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;