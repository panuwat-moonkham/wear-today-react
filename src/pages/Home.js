import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SlideShow from '../components/SlideShow'
import ShowItem from '../components/ShowItem'

const Title = styled.div`
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  padding: 1rem 0;
`

const Container = styled.div`
  padding: 2rem 6rem;
`

const Content = styled.div`
  padding-bottom: 2rem;
`
const More = styled.p`
  font-size: 1.5rem;
  text-align: right;
`
function Home () {
  return (
    <>
      <SlideShow />
      <Container>
        <Content>
          <Title>TREND</Title>
          <ShowItem>
            <h4>Nature</h4>
            <p>What a beautiful sunrise</p>
          </ShowItem>
          <More>
            <Link>more...</Link>
          </More>
        </Content>
        <Content>
          <Title>THE JOURNEY</Title>
          <ShowItem>
            <h4>Nature</h4>
            <p>What a beautiful sunrise</p>
          </ShowItem>
          <More>
            <Link>more...</Link>
          </More>
        </Content>
        <Content>
          <Title>STYLE</Title>
          <ShowItem>
            <h4>Nature</h4>
            <p>What a beautiful sunrise</p>
          </ShowItem>
          <More>
            <Link>more...</Link>
          </More>
        </Content>
      </Container>
    </>
  )
}

export default Home
