import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
position: fixed;
z-index: 10000;
background-color: ${props => (props.isScroll ? '#f1b39c' : 'transparent')};
color: ${props => (props.isScroll ? '#212121' : '#fff')};
transition: background-color 0.5s;
`
export const Wrapper = styled.div`
display: flex;
flex: 1;
align-items: center;
padding: 1rem;
`

export const ActionContainer = styled.ul`
display: flex;
flex: 1;
justify-content: flex-end;
align-items: center;
transition: 0.3s;
`

export const Action = styled.li`
padding: 0 1rem;
`
export const Login = styled.div``

export const Logo = styled.div`
width: 6%;
`

export const DropdownContent = styled.div`
display: none;
position: absolute;
background-color: #f1f1f1;
min-width: 110px;
z-index: 1;
border-radius: 5px;


a {
  color: black;
  padding: 14px 0;
  padding-left: 10px;
  text-decoration: none;
  display: block;
}
a:hover {
  background-color: #ddd;
  border-radius: 5px;
}
`

export const Dropbtn = styled.div`
border: none;

`

export const Dropdown = styled.div`
position: relative;
display: inline-block;


&:hover ${DropdownContent} {
  display: block;
}
`