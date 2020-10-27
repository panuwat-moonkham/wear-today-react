import React from 'react'
import { Title, Container, Item, Content } from './styles'
import { Link } from 'react-router-dom'
import ShowItem from '../ShowItem'
import image from '../../assets/img2.jpg'
import logoImage from '../../assets/logo.png'
import SlideShow from '../SlideShow'

function HomeContent () {
  return (
    <>
      <Container>
        <SlideShow />
        <Content>
          <Title>TREND</Title>
          <Item>
            <ShowItem src={image}>
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </ShowItem>
            <ShowItem src={image}>
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </ShowItem>
            <ShowItem src={image}>
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </ShowItem>
          </Item>
        </Content>
        <Content>
          <Title>THE JOURNEY</Title>
          <Item>
            <ShowItem src={image}>
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </ShowItem>

            <ShowItem src={image}>
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </ShowItem>
          </Item>
        </Content>
        <Content>
          <Title>STYLE</Title>
          <Item>
            <ShowItem src={image}>
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </ShowItem>
            <ShowItem src={image}>
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </ShowItem>
            <ShowItem src={image}>
              <h4>Nature</h4>
              <p>What a beautiful sunrise</p>
            </ShowItem>
          </Item>
        </Content>
        <Item>
          <ShowItem src={logoImage} height='40' overlay='none' />
          {/* <BackgroundBlock src={logoImage} height='40' width='17' /> */}
          <ShowItem src={image} height='40' overlay='none' />
          <ShowItem src={image} height='40' overlay='none' />
          <ShowItem src={image} height='40' overlay='none' />
          <ShowItem src={image} height='40' overlay='none' />
          <ShowItem src={image} height='40' overlay='none' />
        </Item>
      </Container>
    </>
  )
}
export default HomeContent
