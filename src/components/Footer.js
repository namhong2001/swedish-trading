import React from "react"
import styled from "styled-components";

const Article1 = styled.div`
  height: 86px;
  font-size: 14px;
  background-color: #26324a;
  color: rgba(255,255,255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Article2 = styled.div`
  height: 172px;
  font-size: 14px;
  background-color: #000;
  color: rgba(255,255,255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <footer>
    <Article1>© Copyright 2019 Swedish Trading Company Limited</Article1>
    <Article2>SWEDISH TRADING COMPANY LIMITED, 165 HOI BUN ROAD, KWUN TONG, KOWLOON, HONG KONG+852 2953 5111STC@SWEDISHTRADING.COM</Article2>
  </footer>
)
