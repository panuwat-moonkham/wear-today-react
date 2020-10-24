import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoImage from '../assets/logo.png'
import BackgroungBlock from './BackgroundBlock'

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
  align-items:center;
  padding: 1rem;
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

const Sidebar = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  color: #333;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;

  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  & a:hover {
    color: #f1f1f1;
  }
  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
`
const Openbtn = styled.div`
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 2px;
  transition:.3s;

  &:hover {
    background-color: #111;
  }
`
const SiteCover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  background-color: rgba(3, 14, 27, 0.7);
  z-index: -1;
  transition: opacity 0.2s ease-in-out;

  &${Openbtn}:active {
    z-index: 1000;
    opacity: 1;
  }
`
const Logo = styled.div`
  width:6%;
`

const Main = styled.div``

function NavBar () {
  const isScroll = useScroll({ scrollRange: 20 })

  function openNav () {
    document.getElementById('mySidebar').style.width = '250px'
    document.getElementById('main').style.marginLeft = '250px'
  }

  function closeNav () {
    document.getElementById('mySidebar').style.width = '0'
    document.getElementById('main').style.marginLeft = '0'
  }
  return (
    <Container isScroll={isScroll}>
      <Wrapper>

        <Sidebar id='mySidebar'>
          <Link className='closebtn' onClick={closeNav}>
            &times;
          </Link>
          <Link to='#'>About</Link>
          <Link to='#'>Services</Link>
          <Link to='#'>Clients</Link>
          <Link to='#'>Contact</Link>
          <SiteCover />
        </Sidebar>
        <Main id='main'>
          <Openbtn onClick={openNav}>&#9776;</Openbtn>
        </Main>
        <Logo>
          <BackgroungBlock src={logoImage} height='8' />
        </Logo>

        <ActionContainer>
          <Action>
            <Link to='/'>HOME</Link>
          </Action>
          <Action>
            <Link to='/post'>POST</Link>
          </Action>
          <Action>
            <Link to='/read'>READ</Link>
          </Action>
          <Action>
            <Link to='/help'>HELP</Link>
          </Action>
          <Action>
            <Link to='/login'>LOGIN</Link>
          </Action>
        </ActionContainer>
      </Wrapper>
    </Container>
  )
}

export default NavBar
