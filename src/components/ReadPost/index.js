import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDataById } from '../../services/FetchData'
import styled from 'styled-components'
import BackgroundBlock from '../BackgroundBlock'
import image from '../../assets/img2.jpg'

const Container = styled.div`
  padding: 2rem 6rem;
  height: auto;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 20px;
  background-color: #333;
  border-radius: 10px;
  /* flex-direction: column; */
`

const Block = styled.div`
  height: 100%;
  background-color: violet;
  border-radius: 10px;
  margin-bottom: 5%;
  transition: 0.3s;

  &:hover {
  }
`
const Img = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

 
`
const ImgBlock = styled.div`
  height: 200px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
`

const BlockContent = styled.div`
  height: 100%;
  width: 100%;
  margin: 1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const Title = styled.div`
  font-size: 3rem;
  margin-left: 1rem;
`

const Description = styled.div`
  font-size: 1.5rem;
  margin: 4% 0;
`

const Date = styled.div`
  font-size: 0.8rem;
  color: #333;
  margin-bottom:2rem;
`
const CommentContent = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
border:1px solid black;
border-radius:20px;
padding:2rem; 
${Title}{
  color:white;
  margin-bottom:2rem;
}
`

const BlockComment = styled.div`
width:100%;
height:auto;
padding:.5rem 1rem;
border:1px solid black;
border-radius:10px;
background-color:white;

`
const Name = styled.div`
width:20%;
padding:.2rem;
border:1px solid black;
border-radius:10px;
`
const Comment = styled.div`
font-size: 1.5rem;
padding:.5rem 1rem;
`
const CommentDate = styled.div`
font-size: 0.8rem;
  color: #333;
`

function Read () {
  const [post, setPost] = useState([])
  const [comment, setComment] = useState([])
  const [user, setUser] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getDataById('posts', 'comments', id).then(response => setPost(response))
  }, [])

  getDataById('comments', 'posts', post.comment_id).then(response => setComment(response))
  getDataById('users', 'posts', post.user_id).then(response => setUser(response))

  return (
    <>
      <BackgroundBlock src={image} height='30' overlay='overlay' />
      <Container>
        <Content id='content'>

          <Block key={post.post_id}>
            <ImgBlock>
              <Img src={image} />
            </ImgBlock>
            <BlockContent>
              <Title>{post.post_title}</Title>

              <Description>{post.description}</Description>
              <Date>{post.post_date}</Date>

            </BlockContent>
          </Block>
          <CommentContent>
            <Title>Comment</Title>
            <BlockComment>
              <Name>
                {user.first_name} {user.last_name}
              </Name>
              <Comment>{comment.comment_content}</Comment>
              <CommentDate>
                {comment.comment_date}
              </CommentDate>
            </BlockComment>
          </CommentContent>
        </Content>
      </Container>
    </>
  )
}

export default Read
