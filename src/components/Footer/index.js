import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 300px;
  width: 100%;
  z-index: 10000;
  background-color: black;
  color: ${props => (props.isScroll ? '#000' : '#fff')};
  transition: background-color 0.5s;
`
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem;
`

const Logo = styled.div``

function Footer () {
  return (
    <Container>
      <Wrapper>
        <Logo />
      </Wrapper>
    </Container>
  )
}

export default Footer
