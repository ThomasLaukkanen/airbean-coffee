import Login from '../components/Login'
import './Profile.scss'
import profilePicture from '../assets/profilePicture.svg'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Profile() {
  let loggedIn = useSelector((state) => state.loggedIn)

  async function getUser() {
    const promise = await fetch('http://localhost:3000/api/users')
    const data = await promise.json()
    console.log(data)
  }
  useEffect(() => {
    getUser()
  }, [loggedIn])

  return (
    <div className="profileWrapper">
      {!loggedIn ? (
        <Login />
      ) : (
        <div className="orderWrapper">
          <section className="profileInfo">
            <img src={profilePicture} alt="profilepicture" />
            <h2>Sixten KaffeLövér</h2>
            <h4>sixten.kaffelover@zocom.se</h4>
          </section>
          <section>
            <h2>Orderhistorik</h2>
            <ul>
              <li>
                <div>
                  <span className="orderId">#AB1123282323Z</span>
                  <br />

                  <span className="totalOrderSum">Total ordersumma</span>
                </div>
                <div className="totalOrderSum">
                  <span className="orderDate">20/03/06</span>
                  <br />
                  <span className="totalOrderSum">443kr</span>
                </div>
              </li>
              <div className="lineThin" />
            </ul>
          </section>
          <div className="line" />
          <section>
            <h5 className="totalSpent">
              <span>Totalt spenderat</span>
              <span>1669 kr</span>
            </h5>
            <h5></h5>
          </section>
        </div>
      )}
    </div>
  )
}

export default Profile
