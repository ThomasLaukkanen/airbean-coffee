import Login from '../components/Login'
import './Profile.scss'
import profilePicture from '../assets/profilePicture.svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../actions/coffeeAction'

function Profile() {
  let loggedIn = useSelector((state) => state.loggedIn)
  let user = useSelector((state) => state.user)
  let orders = useSelector((state) => state.orders)
  let email = useSelector((state) => state.email)
  let dispatch = useDispatch('')
  const [total, setTotal] = useState(0)

  function countTotal() {
    orders.map((order) => setTotal(total + order.total))
  }
  async function getUser() {
    const promise = await fetch('http://localhost:3002/api/users')
    const data = await promise.json()
    console.log(data)
    dispatch(setUser(data[data.length - 1]))
  }
  useEffect(() => {
    getUser()
    countTotal()
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
            <h4>{email}</h4>
          </section>
          <section>
            <h2>Orderhistorik</h2>
            <ul>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <li>
                    <div>
                      <span className="orderId">#{order.id}</span>
                      <br />
                      <span className="totalOrderSum">Total ordersumma</span>
                    </div>
                    <div className="totalOrderSum">
                      <span className="orderDate">{order.date}</span>
                      <br />
                      <span className="totalOrderSum">{order.total}kr</span>
                    </div>
                  </li>
                ))
              ) : (
                <li>
                  <div>
                    <span className="orderId">#XXXXXXXX</span>
                    <br />

                    <span className="totalOrderSum">Total ordersumma</span>
                  </div>
                  <div className="totalOrderSum">
                    <span className="orderDate">XX/XX/XX</span>
                    <br />
                    <span className="totalOrderSum">0kr</span>
                  </div>
                </li>
              )}

              <div className="lineThin" />
            </ul>
          </section>
          <div className="line" />
          <section>
            <h5 className="totalSpent">
              <span>Totalt spenderat</span>
              <span>{total} kr</span>
            </h5>
          </section>
        </div>
      )}
    </div>
  )
}

export default Profile
