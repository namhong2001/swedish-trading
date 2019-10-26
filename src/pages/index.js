import React from "react"
import Header from "../components/Header"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import titleImage from "../images/iStock-512694344.jpg"
import Footer from "../components/Footer"
import logoImage from "../images/stclogo2018-03.png"
import styled from "styled-components";
import cardImage1 from "../images/About+us.jpg"
import cardImage2 from "../images/Project+Engineering+&+consulting.jpg"
import cardImage3 from "../images/Sales+&+Careers.jpg"
import Card from "../components/Card";

const Main = styled.main`
  text-align: center;
`
const CardCon = styled.div`
  display: flex;
  justify-content: center;
`

const cardData = [
  {
    src: cardImage1,
    title: `About Us`, 
    desc: `Find out about our company, mission, our methods, and the results of our decades of service.`,
    buttonTxt: `LEARN MORE`,
    to: `/about-us`
  },
  {
    src: cardImage2,
    title: `Our Business`, 
    desc: `Get in touch with us today to learn more about our services and what our team can do for you.`,
    buttonTxt: `LEARN MORE`,
    to: `/overview`
  },
  {
    src: cardImage3,
    title: `Careers`, 
    desc: `Ready to take the next step? You can become part of our team now!`,
    buttonTxt: `SEARCH CAREERS`,
    to: `/careers`
  },
]

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header></Header>
    <PageTitle src={titleImage}>asdf</PageTitle>\
    <Main>
      <img src={logoImage}></img>
      <h1>Service is the key to our success</h1>
      <p>Founded in 1913, Swedish Trading Company is a privately-held marketing and distribution organisation established in Hong Kong.</p>
      <CardCon>
        {cardData.map((props, index) => <Card {...props} key={index}/>)}
      </CardCon>
    </Main>
    <Footer></Footer>
  </div>
)

export default IndexPage
