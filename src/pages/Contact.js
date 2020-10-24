import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import image from '../assets/img2.jpg'

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
  font-size: 80px;
`
const Container = styled.div`
  padding: 4rem 10rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
`

function Contact() {
  return (
    <>
      <BackgroundBlock src={image} height="30" />
      <Container>
        <Title>Contact</Title>
        <Content>
        
            <div>Image</div>
            <div>IG</div>
         
            <div>Image</div>
            <div>Faceookb</div>
        
            <div>Image</div>
            <div>IG</div>
        
        </Content>
      </Container>
    </>
  )
}

export default Contact
