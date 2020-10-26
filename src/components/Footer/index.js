import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../BackgroundBlock'
import logoImage from '../../assets/logo.png'

const Container = styled.div`
  height: 180px;
  width: 100%;
  z-index: 10000;
  background-color: #eb8f4c;
  color: ${props => (props.isScroll ? '#000' : '#fff')};
  transition: background-color 0.5s;
`
const Wrapper = styled.div`
  height:90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 16px;
`

function Footer() {
  return (
    <Container>
      <Wrapper>
        
          <BackgroundBlock src={logoImage} height="15" width="8" />
          WearToday © 2020 what do you wanna wear today
        
      </Wrapper>
    </Container>
  )
}

export default Footer
