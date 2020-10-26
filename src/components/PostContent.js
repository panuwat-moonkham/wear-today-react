import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import Editor from '../components/Editor'
import image from '../assets/img2.jpg'

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
  color: white;
`

const Container = styled.div`
  padding: 2rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;

  input {
    width: 80%;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
  }

  textarea {
    width: 80%;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
  }

  button {
    width: 20%;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
  }
`
function PostContent () {
  return (
    <>
      <BackgroundBlock src={image} height='40' overlay='overlay'>
        <Title>Post</Title>
      </BackgroundBlock>
      <Container>
        <Content id='content'>
          <from>
            <input placeholder='Title' />
            <textarea placeholder='Description' />
            <input placeholder='This post is about' />
            <button type='submit'>Submit</button>
          </from>

          <Editor />
        </Content>
      </Container>
    </>
  )
}

export default PostContent
