import './Cart.scss'
import dots from '../assets/dots.svg'
import arrow from '../assets/arrow.svg'
import polygon from '../assets/polygon.svg'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { deleteItemCart, addItemCart } from '../actions/coffeeAction'
import { useDispatch } from 'react-redux'
function Cart({ removeTotalCost, addTotalCost, totalSum }) {
  const cart = useSelector((state) => state.cart)
  const [filteredCart, setFilteredCart] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    function filteredMenu() {
      setFilteredCart(cart.filter((item, pos) => cart.indexOf(item) === pos))
    }

    filteredMenu()
  }, [cart])

  return (
    <div className="cartWrapper">
      <img src={polygon} alt="polygon" className="polygon" />
      <h1>Din beställning</h1>

      <ul>
        {filteredCart.map((cartItem, index) => (
          <li key={index}>
            <div>
              <div className="cartTitleWrapper">
                <span>{cartItem.title}</span>
                <br />
                <small>{cartItem.price}kr</small>
              </div>
              <img src={dots} alt="dots" className="dots" />
              {/* <div className="divDots" /> */}
              <div className="amountPicker">
                <img
                  src={arrow}
                  className="upArrow"
                  alt="Up arrow"
                  onClick={() => {
                    dispatch(addItemCart(cartItem))
                    addTotalCost(cartItem)
                  }}
                />
                <span>{cart.filter((item) => item === cartItem).length}</span>
                <img
                  src={arrow}
                  className="downArrow"
                  alt="Down arrow"
                  onClick={() => {
                    dispatch(deleteItemCart(cartItem))
                    removeTotalCost(cartItem)
                  }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <div className="totalAmountWrapper">
          <h2>Total</h2>
          <img src={dots} alt="dots" />
          <h2>{totalSum}kr</h2>
        </div>
        <small>inkl moms + drönarleverans</small>
      </div>

      <button>Take my money!</button>
    </div>
  )
}

export default Cart
