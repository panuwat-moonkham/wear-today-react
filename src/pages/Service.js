import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import image from '../assets/img2.jpg'

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;
  font-size: 80px;
`
const Container = styled.div`
  padding: 4rem 10rem;
`

const Content = styled.div``

function Help() {
  return (
    <>
      <BackgroundBlock src={image} height="30" />
      <Container>
        <Title>Help</Title>
        <Content>
          <h1>
            โปรดอ่านข้อตกลงการบริการเหล่านี้โดยละเอียด
            รวมถึงนโยบายความเป็นส่วนตัวของเรา
          </h1>
          <p>
          </p>
        </Content>
      </Container>
    </>
  )
}

export default Help
