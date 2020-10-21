import React from "react";
import styled from "styled-components"
import { Title, Subtitle } from '../components/Typography'

const Navbarcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`



const Content = styled.div`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  
`

function Post() {
  return(
      <>
      <Navbarcontainer>
      <Title color="">Post</Title>
      </Navbarcontainer>
      <Content id="content">
        <input/>
        <input/>
        <input/>
        <input/>
        <input/>
      </Content>
      
      </>
  )
}

export default Post;
