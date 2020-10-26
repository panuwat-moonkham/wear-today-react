import React from 'react'
import {
  Wrapper,
  Container,
  ActionContainer,
  Action,
  Logo,
  DropdownContent,
  Dropbtn,
  Dropdown
} from './styles'
import { Link } from 'react-router-dom'
import useScroll from '../../utils/useScroll'
import logoImage from '../../assets/logo.png'
import BackgroungBlock from '../BackgroundBlock'

function NavBar() {
  const isScroll = useScroll({ scrollRange: 20 })

  // function openNav () {
  //   document.getElementById('mySidebar').style.width = '250px'
  //   document.getElementById('main').style.marginLeft = '250px'
  // }

  // function closeNav () {
  //   document.getElementById('mySidebar').style.width = '0'
  //   document.getElementById('main').style.marginLeft = '0'
  // }
  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        {/* <Sidebar id='mySidebar'>
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
        </Main> */}
        <Logo>
          <Link to="/">
            <BackgroungBlock src={logoImage} height="8" />
          </Link>
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
            <Dropdown>
              
                <Dropbtn>SERVICE</Dropbtn>
              
              <DropdownContent>
                <Link to="/help">Help</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About us</Link>
              </DropdownContent>
            </Dropdown>
          </Action>
          <Action>
            <Link to="/login">LOGIN</Link>
          </Action>
        </ActionContainer>
      </Wrapper>
    </Container>
  )
}

export default NavBar
