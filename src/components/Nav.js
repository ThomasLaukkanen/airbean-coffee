import navicon from '../assets/navicon.svg'
import naviconC from '../assets/naviconC.svg'
import './Nav.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Nav() {
  const [open, setOpen] = useState(naviconC)
  useEffect(() => {}, [open])

  let navWrapper = document.querySelector('.navWrapper')

  function toggleNav() {
    document.querySelector('.navWrapper').classList.toggle('hideNav')
    navWrapper.classList.contains('hideNav')
      ? setOpen(navicon)
      : setOpen(naviconC)
  }
  return (
    <header>
      <button className="buttonMenu" onClick={toggleNav}>
        <img src={open} alt="nav" />
      </button>
      <div className="navWrapper">
        <nav className="navMain">
          <ul>
            <li>
              <Link onClick={toggleNav} to="/menu">
                Menu
              </Link>
            </li>
            <div className="line" />
            <li>
              <Link onClick={toggleNav} to="/about">
                Vårt kaffe
              </Link>
            </li>
            <div className="line" />
            <li>
              <Link onClick={toggleNav} to="/profil">
                Min profil
              </Link>
            </li>
            <div className="line" />
            <li>
              <Link onClick={toggleNav} to="/status">
                Orderstatus
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Nav
