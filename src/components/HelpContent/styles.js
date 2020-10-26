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

export const Accordion = styled.button`
  background-color: #ccc;
  color: black;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 20px;
  transition: 0.4s;
  font-weight: 900;
  border-radius: 5px;

  &:hover {
    background-color: #878787;
  }
  p {
    padding: 0.5rem 2rem;
    overflow: hidden;
  }
`
export const Panel = styled.div`
  padding: 0.5rem 4rem;
  background-color: #ececec;
  display: none;
  border-radius: 5px;

  p {
    padding: 0.5rem 0;
    overflow: hidden;
  }
`
