import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import Editor from '../components/Editor'
import image from '../assets/img2.jpg'

const Container = styled.div`
  padding: 2rem 6rem;
  display:flex;
  justify-content:center;
  align-items:center;
  
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  text-align:center;

  input{
    width:80%;
    padding:.5rem .5rem;
    font-size:1rem;
  }

  textarea{
    width:80%;
    padding:.5rem .5rem;
    font-size:1rem;
  }

  button{
    width:20%;
    padding:.5rem .5rem;
    font-size:1rem;
    text-transform:uppercase;
    cursor:pointer;
  }
`

function Post () {
  return (
    <>
      <BackgroundBlock src={image} height='30' overlay='overlay' />
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

export default Post
