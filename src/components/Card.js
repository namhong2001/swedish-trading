import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"

const Card = styled.div`
  text-align: center;
  margin: 20px;
  max-width: 330px;
`

const Button = styled(Link)`
  background-color: #353869;
  padding: 5px;
  color: white;
`

export default ({ src, title, desc, buttonTxt, to }) => (
  <Card>
      <Link to={to}>
        <img src={src} />
      </Link>
      <h1>{title}</h1>
      <p>{desc}</p>
      <Button to={to}>{buttonTxt}</Button>
  </Card>
)
