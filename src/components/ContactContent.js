import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import image from '../assets/img2.jpg'
import logoImage from '../assets/logo.png'

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
  color: white;
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

const BigBlock = styled.div`
  width: 50%;
  padding: 0 20px;
`
const Block = styled.div`
  border-radius: 5px;
  font-size: 24px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  p {
    padding-bottom: 20px;
  }
  a {
    padding-bottom: 20px;
    &:hover {
      color: #878787;
    }
  }
`

function ContactContent() {
  return (
    <>
      <BackgroundBlock src={image} height="40" overlay="overlay">
        <Title>Contact</Title>
      </BackgroundBlock>
      <Container>
        <Content>
          <BigBlock>
            <Block>
              <BackgroundBlock src={logoImage} height="35" width="60" />
              <p>Instagram</p>
              <a href="https://www.instagram.com/hrzkaow/">hrzkaow</a>
              <a href="https://www.instagram.com/hrzkaow/">hrzkaow</a>
            </Block>
            <Block>
              <BackgroundBlock src={logoImage} height="35" width="60" />
              <p>Email</p>
              <p>devillkaow@gmail.com</p>
              <p>devillkaow@gmail.com</p>
            </Block>
          </BigBlock>
          <BigBlock>
            <Block>
              <BackgroundBlock src={logoImage} height="35" width="60" />
              <p>Faceook</p>
              <a href="https://www.facebook.com/ZXCkaow">Kaow nopparat</a>
              <a href="https://www.facebook.com/ZXCkaow">Kaow nopparat</a>
            </Block>
            <Block>
              <BackgroundBlock src={logoImage} height="35" width="60" />
              <p>Phone</p>
              <p>099-276-3131</p>
              <p>099-276-3131</p>
            </Block>
          </BigBlock>
        </Content>
      </Container>
    </>
  )
}

export default ContactContent
