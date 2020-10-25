import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import image from '../assets/img2.jpg'

const Container = styled.div`
  padding: 2rem 6rem;
`

const Content = styled.div`
  height:100vh;
  width:100%;
  background-color:#333;
`

function Read () {
  return (
    <>
      <BackgroundBlock src={image} height='30' overlay='overlay' />
      <Container>
        <Content id='content' />
      </Container>
    </>
  )
}

export default Read
