import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  height: ${props => props.height}vh;
  width: ${props => props.width}%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
`

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${props => (!props.overlay ? '' : 'rgba(0, 0, 0, 0.4)')};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function BackgroungBlock ({ src, height = 100, width = 100, children, overlay }) {
  return (
    <BackgroundImage src={src} height={height} width={width}>
      <BackgroundOverlay overlay={overlay}>
        {children}
      </BackgroundOverlay>
    </BackgroundImage>
  )
}

export default BackgroungBlock
