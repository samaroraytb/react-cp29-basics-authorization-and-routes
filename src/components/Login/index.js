import Cookies from 'js-cookie'

const Login = () => {
  const clickOnLoginButton = event => {
    event.preventDefault()
    Cookies.set('token', '1234', {expires: 30})
  }

  return (
    <form onSubmit={clickOnLoginButton}>
      <h1>Please Login</h1>
      <button type="submit">Login with Sample creds</button>
    </form>
  )
}

export default Login
