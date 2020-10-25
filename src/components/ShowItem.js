import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BackgroundBlock from '../components/BackgroundBlock'

const TextBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => (!props.overlay ? 'rgba(0, 0, 0, 0.4)' : '')};
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
  margin: 2rem 0rem ;
  //padding: 2rem 0;
  position: relative;
  width: 50%;
  border:.1px solid white;
  
  &:hover ${TextBlock} {
  height:100%;
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

function ShowItem ({ children, src, height, width, overlay }) {
  return (
    <>
      <Item>
        <Link>
          <BackgroundBlock src={src} height={height} width={width} />
          <TextBlock overlay={overlay}>
            <Text>{children}</Text>
          </TextBlock>
        </Link>
      </Item>
    </>
  )
}

export default ShowItem
