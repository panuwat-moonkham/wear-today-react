import React from 'react'
import {Title, Container, Content} from './styles'
import BackgroundBlock from '../BackgroundBlock'
import Editor from '../Editor'
import image from '../../assets/img2.jpg'

function PostContent() {
  return (
    <>
      <BackgroundBlock src={image} height="40" overlay="overlay">
        <Title>Post</Title>
      </BackgroundBlock>
      <Container>
        <Content id="content">
          <from>
            <input placeholder="Title" />
            <textarea placeholder="Description" />
            <input placeholder="This post is about" />
            <button type="submit">Submit</button>
          </from>

          <Editor />
        </Content>
      </Container>
    </>
  )
}

export default PostContent
