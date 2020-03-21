import React, {Fragment} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const UserMenu = ({user, logout}) => (
  <Fragment>
    <NavItem>
      <NavLink tag={RouterNavLink} to="/posts/new" exact>Add new item</NavLink>
    </NavItem>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Hello, {user.username}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={logout}>
          Log out
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  </Fragment>
);

export default UserMenu;