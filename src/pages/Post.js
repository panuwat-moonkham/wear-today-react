import React, { useState } from "react";
import styled from "styled-components"
import InputTitle from "../components/Input/InputTitle";
import InputShrit from "../components/Input/InputShirt";
import InputPlant from "../components/Input/InputPlant";
import InputShoes from "../components/Input/InputShoes";
import InputHat from "../components/Input/InputHat";
import InputAssesories from "../components/Input/InputAssesories";
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
  const [shirts, setShirts] = useState([]);
  
  const handleAddShirt = (shirtInput) => 
    setShirts([...shirts, { id:Date.now(), content: shirtInput, type:"shirts"} ]);

  return(
      <>
      <Navbarcontainer>
      <Title color="">Post</Title>
      </Navbarcontainer>
      <Content id="content">
        <InputTitle/>
        <InputShrit onSubmit={handleAddShirt}/>
        <InputPlant/>
        <InputShoes/>
        <InputHat/>
        <InputAssesories/>
      </Content>
      
      </>
  )
}

export default Post;
