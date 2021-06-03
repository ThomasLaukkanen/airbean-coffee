import './Login.scss'
import logoMini from '../assets/logoMini.svg'
function Login() {
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
