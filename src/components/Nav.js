import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
`

const NavItem = styled(Link)`
  color: white;
  padding: 10px;
`

const CareersNavItem = styled(NavItem)`
  border: 1px solid white;
`

export default () => (
  <Nav>
    <NavItem to='/'>Home</NavItem>
    <NavItem to='/'>About</NavItem>
    <NavItem to='/'>Our Business</NavItem>
    <NavItem to='/'>Contact</NavItem>
    <CareersNavItem to='/'>Careers</CareersNavItem>
  </Nav>
)

