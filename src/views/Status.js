import './Status.scss'
import drone from '../assets/drone.svg'
function Status() {
  return (
    <div className="statusWrapper">
      <h3>
        Ordernummer <strong>#12DV23F </strong>
      </h3>
      <img src={drone} alt="drone" />
      <h1>Din beställning är på väg!</h1>
      <h2>
        <strong>13</strong> minuter
      </h2>
      <button>Ok, cool!</button>
    </div>
  )
}

export default Status
