import axios from 'axios'

const API_ENDPOINT = 'http://localhost:3333'
const API_VER = 'api/v1'
const JSON_HEADER = { 'Content-Type': 'application/json' }

export async function getDataWithoutRef (table) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}`
    }
  ).then(response => response.data.data)
}

export async function getData (table, references) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}?references=${references}`
    }
  ).then(response => response.data.data)
}

export async function getDataById (table, value, id) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}/${id}?references=${value}`
    }
  ).then(response => response.data.data)
}

export async function getDataByIdAndCatagories (table, value, catagories, id) {
  return axios(
    {
      method: 'GET',
      url: `${API_ENDPOINT}/${API_VER}/${table}/${catagories}/${id}?references=${value}`
    }
  ).then(response => response.data.data)
}

export async function countView (table, catagories, id) {
  return axios(
    {
      method: 'PATCH',
      url: `${API_ENDPOINT}/${API_VER}/${table}/${catagories}/${id}`
    }
  )
}

export async function fetchLogin (userUsername, userPassword, tokenAPI) {
  return await axios(
    {
      method: 'POST',
      url: `${API_ENDPOINT}/${API_VER}/login`,
      headers: { ...JSON_HEADER, Authorization: `Bearer ${tokenAPI}` },
      data: JSON.stringify({
        username: userUsername,
        password: userPassword
      })
    }
  ).then(response => response)
}

export async function fetchLoginAdmin (userUsername, userPassword) {
  return await axios(
    {
      method: 'POST',
      url: `${API_ENDPOINT}/${API_VER}/login_admin`,
      headers: { ...JSON_HEADER },
      data: JSON.stringify({
        username: userUsername,
        password: userPassword
      })
    }
  ).then(response => response)
}
// import styled from 'styled-components'
// import { useParams } from 'react-router-dom'
// import BackgroundBlock from '../components/BackgroundBlock'
// import ReadContent from '../components/Read'
// import image from '../assets/img2.jpg'

// const Container = styled.div`
//   padding: 2rem 6rem;
// `

// const Content = styled.div`
//   height: 100vh;
//   width: 100%;
//   background-color: #333;
// `

// async function getUser (id) {
//   const response = await fetch.get(`http://localhost:3333/api/v1/users/${id}`)
//   return response.json()
// }

// function useUserData (userId) {
//   const [user, setUser] = useState({})
//   const [isLoading, setLoading] = useState(false)
//   const [error, setError] = useState(undefined)

//   async function reteiveData () {
//     try {
//       setLoading(true)
//       const userResponse = await getUser(userId)
//       setUser(userResponse)
//     } catch (err) {
//       setError(err)
//     }
//     setLoading(false)
//   }

//   return [{ user, isLoading, error }, { reteiveData }]
// }

// function Read () {
//   const { userId } = useParams()
//   const [{ user, isLoading, error }, { reteiveData }] = useUserData(userId)

//   useEffect(() => {
//     reteiveData()
//   }, [reteiveData])

//   if (isLoading) { return <div>...loading</div> }

//   return (
//     <>
//       <BackgroundBlock src={image} height='30' overlay='overlay' />
//       <Container>
//         <Content id='content'>
//           <ReadContent />
//           {user.first_name}
//         </Content>
//       </Container>
//     </>
//   )
// }

// export default Read
