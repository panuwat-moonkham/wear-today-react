import styled from 'styled-components'

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 80px;
  color: white;
`

export const Container = styled.div`
  padding: 2rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
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