import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFoundRoute from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route path="/bad-path" component={NotFoundRoute} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
