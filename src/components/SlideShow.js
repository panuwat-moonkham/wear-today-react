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
const Title = styled.div`
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  margin: 0.5rem 0;
`

const SubTitle = styled.div`
  color: #fff;
  font-size: 2rem;
  font-weight: thin;
`

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.2rem 1.5rem;
  border: 1px solid #fff;
  border-radius: 40px;
  font-size: 2rem;
  color: #fff;
  background: transparent;
  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`

function SlideShow() {
  const slides = [
    <BackgroundBlock key="1" src={image1} overlay="overlay">
      <SubTitle>travel</SubTitle>
      <Title>High Mountain Tourism</Title>
      <Button>View</Button>
    </BackgroundBlock>,
    <BackgroundBlock key="2" src={image2} overlay="overlay">
      <SubTitle>trend</SubTitle>
      <Title>Jeans</Title>
      <Button>View</Button>
    </BackgroundBlock>,
    <BackgroundBlock key="3" src={image3} overlay="overlay">
      <SubTitle>travel</SubTitle>
      <Title>City And River</Title>
      <Button>View</Button>
    </BackgroundBlock>,
    <BackgroundBlock key="4" src={image4} overlay="overlay">
      <SubTitle>trend</SubTitle>
      <Title>Sweater</Title>
      <Button>View</Button>
    </BackgroundBlock>
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
      </Container>
    </>
  )
}

export default SlideShow
