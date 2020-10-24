import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import image from '../assets/img2.jpg'

const Container = styled.div`
`

const Content = styled.div`
  padding: 8rem;
`

function Contact () {
  return (
    <>
      <BackgroundBlock src={image} height='30' />
      <Container>
        <Content id='content' />
      </Container>
    </>
  )
}

export default Contact
