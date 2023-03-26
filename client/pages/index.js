import buildClient from '../api/build-client'

const Landing = ({ currentUser }) => {
  return currentUser?<h1>You are signed in</h1>:<h1>You are not signed in</h1>
}

Landing.getInitialProps = async (context) => {
  try {
    const client = buildClient(context)

    const { data } = await client.get('/api/users/currentuser')

    return data
  }
  catch (error) {
    console.log(error.message)
  }
}
 
export default Landing