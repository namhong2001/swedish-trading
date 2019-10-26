import React from "react"
import styled from 'styled-components'

const PageTitle = styled.div`
  height: 335px;
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PageTitle;