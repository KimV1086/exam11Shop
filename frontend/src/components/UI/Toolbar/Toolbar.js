import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

import UserMenu from "../Menus/UserMenu";
import AnonymousMenu from "../Menus/AnonimousMenu";

const Toolbar = ({user, logout}) => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={RouterNavLink} to="/">Flea Market</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={RouterNavLink} to="/" exact>All items</NavLink>
        </NavItem>
        {user ? <UserMenu user={user} logout={logout}/> : <AnonymousMenu/> }
      </Nav>
    </Navbar>
  );
};

export default Toolbar;