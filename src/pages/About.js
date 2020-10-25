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

const Content = styled.div``

function About () {
  return (
    <>
      <BackgroundBlock src={image} height='30' />
      <Container>
        <Title>About</Title>
        <Content id='content'>
          <h1>ABOUT WearToday</h1>
          <p>WearToday เป็นเว็บบล็อคสำหรับแลกเปลี่ยนสไตล์ เทคนิคและความเหมาะสมในการแต่งตัว</p>
          <p />
        </Content>
      </Container>
    </>
  )
}

export default About
