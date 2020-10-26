import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import useScroll from '../../utils/useScroll'
import logoImage from '../../assets/logo.png'
import BackgroungBlock from '../BackgroundBlock'

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10000;
  background-color: ${props => (props.isScroll ? '#fff' : 'transparent')};
  color: ${props => (props.isScroll ? '#000' : '#fff')};
  transition: background-color 0.5s;
`
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
`

const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  transition: 0.3s;
`

const Action = styled.li`
  padding: 0 1rem;
`
const Login = styled.div``

const Logo = styled.div`
  width: 6%;
`

function NavBar() {
  const isScroll = useScroll({ scrollRange: 20 })
  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <Logo>
          <BackgroungBlock src={logoImage} height="8" />
        </Logo>
        <ActionContainer>
          <Action>
            <Link to="/">HOME</Link>
          </Action>
          <Action>
            <Link to="/post">POST</Link>
          </Action>
          <Action>
            <Link to="/read">READ</Link>
          </Action>
          <Action>
            <Link to="/help">HELP</Link>
          </Action>
          <Action>
            <Link to="/about">About</Link>
          </Action>
          <Action>
            <Link to="/contact">Contact</Link>
          </Action>
        </ActionContainer>
        <Login>*ปุ่มlogin*</Login>
      </Wrapper>
    </Container>
  )
}

export default NavBar
