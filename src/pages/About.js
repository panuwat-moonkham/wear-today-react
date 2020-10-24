import React from 'react'
import styled from 'styled-components'



const arr = new Array(250).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum maximus eros,')

const Title = styled.h1`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  padding: 8rem;
`

function About() {
  return (<>
    <Title>About us</Title>
    <Content id="content">
        {arr.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Content>
  </>
  )
}

export default About
