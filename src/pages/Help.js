import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import image from '../assets/img2.jpg'

const Container = styled.div`
  padding: 2rem 6rem;
`

const Content = styled.div`
  
`

const handleClick = () => {
  var acc = document.getElementById('accordion')

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active')
      var panel = this.nextElementSibling
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px'
      }
    })
  }
}

function Help () {
  return (
    <>
      <BackgroundBlock src={image} height='30' />
      <Container>
        <Content id='content'>
          <h2>Accordion with symbols</h2>
          <p>
            In this example we have added a "plus" sign to each button. When the
            user clicks on the button, the "plus" sign is replaced with a
            "minus" sign.
          </p>
          <button id='accordion' onClick={handleClick}>Section 1</button>
          <div id='panel'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button id='accordion'>Section 2</button>
          <div id='panel'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button id='accordion'>Section 3</button>
          <div id='panel'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </Content>
      </Container>
    </>
  )
}

export default Help
