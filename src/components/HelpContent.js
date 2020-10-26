import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import image from '../assets/img2.jpg'

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
  color: white;
`

const Container = styled.div`
  padding: 4rem 10rem;
`

const Accordion = styled.button`
  background-color: #ccc;
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 20px;
  transition: 0.4s;
  font-weight: 900;
  border-radius: 5px;

  &:hover {
    background-color: #878787;
  }
  p {
    padding: 0.5rem 2rem;
    overflow: hidden;
  }
`
const Panel = styled.div`
  padding: 0.5rem 4rem;
  background-color: #ececec;
  display: none;
  border-radius: 5px;

  p {
    padding: 0.5rem 0;
    overflow: hidden;
  }
`

function HelpContent() {
  function openshow() {
    if (document.getElementById('show').style.display === 'none') {
      document.getElementById('show').style.display = 'block'
    } else {
      document.getElementById('show').style.display = 'none'
    }
  }
  function openshow2() {
    if (document.getElementById('show2').style.display === 'none') {
      document.getElementById('show2').style.display = 'block'
    } else {
      document.getElementById('show2').style.display = 'none'
    }
  }
  function openshow3() {
    if (document.getElementById('show3').style.display === 'none') {
      document.getElementById('show3').style.display = 'block'
    } else {
      document.getElementById('show3').style.display = 'none'
    }
  }

  return (
    <>
      <BackgroundBlock src={image} height="40" overlay="overlay">
        <Title>Help</Title>
      </BackgroundBlock>
      <Container>
        <Accordion onClick={openshow}>
          <p>การใช้เว็บไซต์</p>
        </Accordion>
        <Panel id="show">
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
        </Panel>
        <Accordion onClick={openshow2}>
          <p>บัญชีผู้ใช้</p>
        </Accordion>
        <Panel id="show2">
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
        </Panel>
        <Accordion onClick={openshow3}>
          <p>ปัญหาที่พบบ่อย</p>
        </Accordion>
        <Panel id="show3">
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
        </Panel>
      </Container>
    </>
  )
}

export default HelpContent
