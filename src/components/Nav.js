import navicon from '../assets/navicon.svg'
import naviconC from '../assets/naviconC.svg'
import './Nav.scss'
function Nav() {
  return (
    <header>
      <nav className="navMain">
        <button>
          <img src={naviconC} alt="nav" />
        </button>
        <ul>
          <li>Menu</li>
          <div className="line" />
          <li>Vårt kaffe</li>
          <div className="line" />
          <li>Min profil</li>
          <div className="line" />
          <li>Orderstatus</li>
        </ul>
      </nav>
    </header>
  )
}
export default Nav
