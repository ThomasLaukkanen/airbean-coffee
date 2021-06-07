import './Login.scss'
import logoMini from '../assets/logoMini.svg'
import { setLogin } from '../actions/coffeeAction'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

function Login() {
  const { username, setUsername } = useState('')
  const { email, setEmail } = useState('')
  const dispatch = useDispatch('')

  async function createUser() {
    const response = await fetch('http://localhost:3002/api/account', {
      body: `{username: ${username} , email: ${email} }`,
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const data = await response.json()
  }

  return (
    <div className="loginWrapper">
      <img src={logoMini} alt="logo" />
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>
        Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
      </p>
      <form>
        <label>
          <small>Namn</small>
          <br />
          <input type="text" placeholder="Sixten Kaffelövér" />
        </label>
        <br />
        <label>
          <small>Epost</small>
          <br />
          <input type="email" placeholder="sixten.kaffelover@zocom.se" />
        </label>
        <br />
        <label>
          <input type="radio" />
          <small>GDPR OK!</small>
        </label>
        <br />
        <button>LOGGA IN</button>
      </form>
    </div>
  )
}

export default Login
