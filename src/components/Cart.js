import './Cart.scss'
import dots from '../assets/dots.svg'
import arrow from '../assets/arrow.svg'
import polygon from '../assets/polygon.svg'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
function Cart() {
  const cartItems = useSelector((state) => state.cart)
  const [filteredCart, setFilteredCart] = useState([])
  useEffect(() => {
    filteredMenu()
  }, [cartItems])

  function filteredMenu() {
    setFilteredCart(
      cartItems.filter((item, pos) => cartItems.indexOf(item) === pos)
    )
  }

  return (
    <div className="cartWrapper">
      <img src={polygon} alt="polygon" className="polygon" />
      <h1>Din beställning</h1>

      <ul>
        {filteredCart.map((cartItem) => (
          <li key={cartItem.id}>
            <div>
              <div className="cartTitleWrapper">
                <span>{cartItem.title}</span>
                <br />
                <small>{cartItem.price}kr</small>
              </div>
              <img src={dots} alt="dots" className="dots" />
              {/* <div className="divDots" /> */}
              <div className="amountPicker">
                <img src={arrow} className="upArrow" alt="Up arrow" />
                <span>
                  {cartItems.filter((item) => item === cartItem).length}
                </span>
                <img src={arrow} className="downArrow" alt="Down arrow" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <div className="totalAmountWrapper">
          <h2>Total</h2>
          <img src={dots} alt="dots" />
          <h2>98kr</h2>
        </div>
        <small>inkl moms + drönarleverans</small>
      </div>

      <button>Take my money!</button>
    </div>
  )
}

export default Cart
