import './Status.scss'
import drone from '../assets/drone.svg'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
function Status() {
  const history = useHistory()
  const orders = useSelector((state) => state.orders)

  return (
    <div className="statusWrapper">
      {orders.length > 0 ? (
        <>
          <h3>
            Ordernummer <strong>#{orders[1].id} </strong>
          </h3>
          <img src={drone} alt="drone" />
          <h1>Din beställning är på väg!</h1>
          <h2>
            <strong>13</strong> minuter
          </h2>
          <button onClick={() => history.push('/menu')}>Ok, cool!</button>
        </>
      ) : (
        <>
          <h3>
            Ordernummer <strong>#XXXXX </strong>
          </h3>
          <img src={drone} alt="drone" />
          <h1>Inga aktiva ordrar</h1>
          <h2>
            <strong>0</strong> minuter
          </h2>
          <button onClick={() => history.push('/menu')}>Gå till Menyn!</button>
        </>
      )}
    </div>
  )
}

export default Status
