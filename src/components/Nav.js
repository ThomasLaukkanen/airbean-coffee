import navicon from '../assets/navicon.svg'
import naviconC from '../assets/naviconC.svg'
import './Nav.scss'
import { Link } from 'react-router-dom'

function Nav() {
  function toggleNav() {
    document.querySelector('.navWrapper').classList.toggle('showNav')
  }
  return (
    <header className="navWrapper">
      <nav className="navMain">
        <button onClick={toggleNav}>
          <img src={naviconC} alt="nav" />
        </button>
        <ul>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <div className="line" />
          <li>
            <Link to="/about">Vårt kaffe</Link>
          </li>
          <div className="line" />
          <li>
            <Link to="/profil">Min profil</Link>
          </li>
          <div className="line" />
          <li>
            <Link to="/status">Orderstatus</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Nav
