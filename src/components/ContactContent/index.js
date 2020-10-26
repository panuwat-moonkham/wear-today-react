import React from 'react'
import {Title, Container, Content, BigBlock, Block} from './styles'
import BackgroundBlock from '../BackgroundBlock'
import image from '../../assets/img2.jpg'
import logoImage from '../../assets/logo.png'


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
