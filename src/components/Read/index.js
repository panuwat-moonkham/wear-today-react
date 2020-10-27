import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDataWithoutRef } from '../../services/FetchData'
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
  height: 250px;
  background-color: violet;
  border-radius: 10px;
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
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

  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`
const ImgBlock = styled.div`
  height: 100%;
  width: 35%;
  border-radius:10px;
  overflow: hidden;
`

const BlockContent = styled.div`
  height: 100%;
  width: 100%;
  margin: 1rem;
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
`

const ReadContent = styled.text`
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: red;
    
  }
`

function Read () {
  const [post, setPost] = useState([])

  useEffect(() => {
    getDataWithoutRef('posts').then(response => setPost(response))
  }, [])
  return (
    <>
      {/* <ul>
        {post.map((posts, index) => (
          <li key={index}>
            {posts.post_title}
          </li>
        ))}
      </ul> */}
      <BackgroundBlock src={image} height='30' overlay='overlay' />
      <Container>
        <Content id='content'>
          {post.map((posts) => (
            <Link to='ReadPost' key={posts.post_id}>
              <Block>
                <ImgBlock>
                  <Img src={image} />
                </ImgBlock>
                <BlockContent>
                  <Title>{posts.post_title}</Title>

                  <Description>{posts.description}</Description>
                  <Date>{posts.post_date}</Date>
                  <ReadContent>Read</ReadContent>
                </BlockContent>
              </Block>
            </Link>
          ))}
        </Content>
      </Container>
    </>
  )
}

export default Read
