import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = props => {
  const clickOnLoginButton = event => {
    event.preventDefault()
    Cookies.set('jwt_token', 'JWT token', {expires: 1})
    const {history} = props
    history.replace('/')
  }
  const isCookieAvailable = Cookies.get('jwt_token')
  if (isCookieAvailable !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <form onSubmit={clickOnLoginButton}>
      <h1>Please Login</h1>
      <button type="submit">Login with Sample creds</button>
    </form>
  )
}

export default Login
