// Components & Assets
import Logo from '../../assets/react-logo.png'
import { Link } from 'react-router-dom'
import Clock from './Clock'


const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <Clock setDaytime={props.setDaytime}/>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Link to="/burgershop">BURGER SHOP</Link>
    </nav>
  )
}

export default Nav