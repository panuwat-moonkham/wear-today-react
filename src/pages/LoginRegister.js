import React from 'react'
import styled from 'styled-components'
import BackgroundBlock from '../components/BackgroundBlock'
import image from '../assets/img1.jpg'

const Container = styled.div`
  padding: 2rem 6rem;
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  //padding: 1rem;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormLogin = styled.div`
  height: 100%;
  width: 50%;
  background-color: #111;
  text-align: center;
  flex-direction:column;

  h2{
    font-size:2rem;
    margin: 20px 0;
  }

  input{
    width:80%;
    height:30px;
    margin-bottom:10px;
  }

  button{
    width:80%;
    margin-bottom:10px;
    }
`

const FormSignUp = styled.div`
  height: 100%;
  width: 50%;
  background-color: #111;
  text-align: center;

  h2{
    font-size:2rem;
    margin: 20px 0;
  }

  input{
    width:80%;
    height:30px;
    margin-bottom:10px;
  }

  button{
    width:80%;
    margin-bottom:10px;
    }
`

function LoginRegister () {
  return (
    <>
      <BackgroundBlock src={image} height='100'>
        <Container>
          <Content id='content'>
            <FormLogin>
              <form>
                <h2>Sign In</h2>
                <label>
                  <input type='text' name='email' placeholder='Email' />
                </label>
                <label>
                  <input type='text' name='password' placeholder='Password' />
                </label>

                <button className='submit' type='submit'>
                  Sign In
                </button>
                <p className='forgot-pass'>Forgot Password ?</p>
              </form>
            </FormLogin>
            <FormSignUp>
              <form>
                <h2>Sign Up</h2>
                <label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    placeholder='Name'
                  />
                </label>
                <label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                  />
                </label>
                <label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                  />
                </label>
                <label>
                  <input
                    type='Password'
                    name='confirmPassword'
                    id='confirmPassword'
                    placeholder='Confirm Password'
                  />
                </label>
                <button type='submit' className='submit'>
                  Sign Up Now
                </button>
              </form>
            </FormSignUp>
          </Content>
        </Container>
      </BackgroundBlock>
    </>
  )
}

export default LoginRegister
