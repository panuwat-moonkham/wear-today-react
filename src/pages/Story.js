/* eslint-disable no-undef */
// global fetch

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import withHelmet from '../utils/withHelmet'

async function getPost (id) {
  const response = await fetch.get(`http://localhost:3333/api/v1/users/${id}`)
  return response.json()
}

function useUserDate ({ Id }) {
  const [post, setPost] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(undefined)

  async function reteiveData () {
    try {
      setLoading(true)
      const postResponse = await getPost(postId)
      setPost(postResponse)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  return [{ post, isLoading, error }, { reteiveData }]
}

function Story () {
  const { Id } = useParams()
  const [{ story, isLoading, error }, { reteiveData }] = useUserDate(Id)

  useEffect(() => {
    reteiveData()
  }, [reteiveData])
  return (
    <div>Story page {storyId}{story}{isLoading}{error}</div>
  )
}

export default withHelmet('Blog App | Story')(Story)
