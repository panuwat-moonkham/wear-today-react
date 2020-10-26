import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import { useParams } from 'react-router-dom'
import { getData } from '../../services/FetchData'

function Read () {
  const [user, setUser] = useState([])

  useEffect(() => {
    getData('users', 'comments').then(response => setUser(response))
  }, [])

  console.log(user)
  return (
    <>

    </>
  )
}

export default Read
