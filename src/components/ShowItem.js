import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BackgroundBlock from '../components/BackgroundBlock'
import image from '../assets/img1.jpg'

const Container = styled.div`
  display: flex;
  border-radius:2px;
`

const TextBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
`
const Item = styled.div`
  flex: 1;
  display: block;
  width: 200px;
  height: auto;
  margin: 2rem 1rem ;
  //padding: 2rem 0;
  position: relative;
  width: 50%;
  
  &:hover ${TextBlock} {
  height: 100%;
}
`
const Text = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`

function ShowItem ({ children }) {
  return (
    <Container>
      <Item>
        <Link>
          <BackgroundBlock src={image} height='40' />
          <TextBlock>
            <Text>{children}</Text>
          </TextBlock>
        </Link>
      </Item>
      <Item>
        <Link>
          <BackgroundBlock src={image} height='40'>
            <TextBlock>
              <Text>{children}</Text>
            </TextBlock>
          </BackgroundBlock>
        </Link>
      </Item>
      <Item>
        <Link>
          <BackgroundBlock src={image} height='40'>
            <TextBlock>
              <Text>{children}</Text>
            </TextBlock>
          </BackgroundBlock>
        </Link>
      </Item>
    </Container>
  )
}

export default ShowItem
