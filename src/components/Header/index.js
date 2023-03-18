import {Link} from 'react-router-dom'

const Header = () => (
  <ul>
    <Link to="/">
      <li>Home</li>
    </Link>
    <Link to="/">
      <li>About</li>
    </Link>
  </ul>
)

export default Header
