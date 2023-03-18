import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = props => {
  const clickOnLoginButton = event => {
    event.preventDefault()
    Cookies.set('token', '1234', {expires: 30})
    const {history} = props
    history.replace('/')
  }
  const isCookieAvailable = Cookies.get('token')
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
