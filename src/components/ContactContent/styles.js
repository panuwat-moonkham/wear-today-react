import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
  color: white;
`
export const Container = styled.div`
  padding: 4rem 10rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const BigBlock = styled.div`
  width: 50%;
  padding: 0 20px;
`
export const Block = styled.div`
  border-radius: 5px;
  font-size: 24px;
  background-color: #ff8f84;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  p {
    padding-bottom: 20px;
  }
  a {
    padding-bottom: 20px;
    &:hover {
      color: #878787;
    }
  }
`