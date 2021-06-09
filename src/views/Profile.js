import Login from '../components/Login'
import './Profile.scss'
import profilePicture from '../assets/profilePicture.svg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../actions/coffeeAction'

function Profile() {
  let loggedIn = useSelector((state) => state.loggedIn)
  let user = useSelector((state) => state.user)
  let orders = useSelector((state) => state.orders)
  let dispatch = useDispatch('')

  async function getUser() {
    const promise = await fetch('http://localhost:3002/api/users')
    const data = await promise.json()
    console.log(data)
    dispatch(setUser(data[data.length - 1]))
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
            <h2>{user.username}</h2>
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
