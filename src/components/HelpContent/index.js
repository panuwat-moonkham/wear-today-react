import React from 'react'
import {Title, Container, Accordion, Panel} from './styles'
import BackgroundBlock from '../BackgroundBlock'
import image from '../../assets/img2.jpg'

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
