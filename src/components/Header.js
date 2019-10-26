import { Link } from "gatsby"
import React from "react"
import styled from "styled-components";
import Nav from "./Nav";
import logoImage from "../images/stclogo2018-02.png";


const Logo = styled.img`
`

const Header = styled.header`
  display: flex;
  position: absolute;
`

export default () => (
  <Header>
    <Link to="/">
      <Logo src={logoImage}/>
    </Link>
    <Nav />
  </Header>
)
