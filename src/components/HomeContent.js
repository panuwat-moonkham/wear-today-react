import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ShowItem from '../components/ShowItem'
import image from '../assets/img2.jpg'
import logoImage from '../assets/logo.png'
import SlideShow from '../components/SlideShow'

const Title = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  padding: 1rem 0;
  margin: 0 25%;
  border-bottom: 1px solid;
`

const Container = styled.div``

const Content = styled.div``

const More = styled.p`
  font-size: 1.5rem;
  text-align: right;
`

const Item = styled.div`
  display: flex;
`

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

          <More>
            <Link>more...</Link>
          </More>
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
          <More>
            <Link>more...</Link>
          </More>
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
          <More>
            <Link>more...</Link>
          </More>
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
