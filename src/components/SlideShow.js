import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3.jpg'
import image4 from '../assets/img4.jpg'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  overflow: hidden;
`
const Slide = styled.div`
  height: 100%;
  min-width: 100%;
  transition: 0.5s;
`
const LeftButton = styled.button`
  width: 5%;
  height: 30%;
  position: absolute;
  left: auto;
  top: auto;
  color: white;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  &:hover {
    background-color: #333;
    color: #fff;
    border-radius: 5px;
  }
`
const RightButton = styled.button`
  width: 5%;
  height: 30%;
  position: absolute;
  right: 0;
  top: auto;
  color: white;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  &:hover {
    background-color: #333;
    color: #fff;
    border-radius: 5px;
  }
`

const Dot = styled.div`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
`

function SlideShow () {
  const slides = [
    <BackgroundBlock key='1' src={image1} />,
    <BackgroundBlock key='2' src={image2} />,
    <BackgroundBlock key='3' src={image3} />,
    <BackgroundBlock key='4' src={image4} />
  ]

  const [x, setX] = useState(0)

  const handleGoLeft = () => {
    x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100)
  }
  const handleGoRight = () => {
    x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100)
  }

  return (
    <>
      <Container>
        {slides.map((item, index) => {
          return (
            <Slide key={index} style={{ transform: `translateX(${x}%)` }}>
              {item}
            </Slide>
          )
        })}
        <LeftButton onClick={handleGoLeft}>&#10094;</LeftButton>
        <RightButton onClick={handleGoRight}>&#10095;</RightButton>
        <Dot>
          <span className='dot' onClick='currentSlide(1)' />
          <span className='dot' onClick='currentSlide(2)' />
          <span className='dot' onClick='currentSlide(3)' />
        </Dot>
      </Container>
    </>
  )
}

export default SlideShow
