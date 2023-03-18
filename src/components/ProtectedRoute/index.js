import Cookies from 'js-cookie'

const ProtectedRoute = () => {
  const gettingCookie = Cookies.get('token')
  if (gettingCookie === undefined) {
    ;<Redirect to="/login" />
  }
}

export default ProtectedRoute
