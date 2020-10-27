import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import image from '../assets/img1.jpg'

const Container = styled.div`
  padding: 2rem 6rem;
`

const Content = styled.div`
  height: 20rem;
  width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormLogin = styled.div`
  height: 100%;
  width: 5%;
  background-color: #ccc;
  text-align: center;
  flex-direction: column;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  form {
    margin-top: 50px;
    display: none;
  }
  h2 {
    font-size: 2rem;
    margin: 20px 0;
  }

  input {
    width: 70%;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    padding-left: 40px;
  }

  button {
    width: 30%;
    padding: 0.5rem 0;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
  }
`

const FormSignUp = styled.div`
  background-color: #f4e3d7;
  text-align: center;
  height: 100%;
  width: 60%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  h2 {
    font-size: 2rem;
    margin: 20px 0;
  }

  input {
    width: 70%;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    padding-left: 40px;
  }

  button {
    width: 30%;
    padding: 0.5rem 0;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
  }
  form {
    padding: 20px;
  }
`
const Change = styled.button`
  height: 100%;
  color: red;
  padding: 16px;
  background-color: #fff;
  border:none;
  font-weight:900;
`
const Change2 = styled.button`
  height: 100%;
  color: red;
  padding: 16px;
  background-color: #fff;
  border:none;
  display: none;
  font-weight:900;
  
`

function LoginRegister() {
  function login() {
    if (document.getElementById('login1').style.display === 'none') {
      document.getElementById('login1').style.display = 'block'
      document.getElementById('login2').style.display = 'none'
      document.getElementById('w1').style.width = '60%'
      document.getElementById('w2').style.width = '5%'
      document.getElementById('text2').style.display = 'block'
      document.getElementById('text').style.display = 'none'
    } else {
      document.getElementById('w1').style.width = '5%'
      document.getElementById('w2').style.width = '60%'
      document.getElementById('login1').style.display = 'none'
      document.getElementById('login2').style.display = 'block'
      document.getElementById('text2').style.display = 'none'
      document.getElementById('text').style.display = 'block'
    }
  }
  return (
    <>
      <BackgroundBlock src={image} height="100">
        <Container>
          <Content id="content">
            <FormSignUp id="w2">
              <form id="login2">
                <h2>Sign Up</h2>
                <label>
                  <input type="text" name="username" placeholder="Name" />
                </label>
                <label>
                  <input type="email" name="email" placeholder="Email" />
                </label>
                <label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </label>
                <label>
                  <input
                    type="Password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </label>
                <button type="submit" id="login2" className="submit">
                  Sign Up
                </button>
              </form>
            </FormSignUp>
            <Change onClick={login} id="text">
              Sing in
            </Change>
            <Change2 onClick={login} id="text2">Sing up</Change2>

            <FormLogin id="w1">
              <form id="login1">
                <h2>Sign In</h2>
                <label>
                  <input type="text" name="email" placeholder="Email" />
                </label>
                <label>
                  <input type="text" name="password" placeholder="Password" />
                </label>

                <button className="submit" type="submit">
                  Sign In
                </button>
                <p>Forgot Password ?</p>
              </form>
            </FormLogin>
          </Content>
        </Container>
      </BackgroundBlock>
    </>
  )
}

export default LoginRegister
