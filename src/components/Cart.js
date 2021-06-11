import './Cart.scss'
import dots from '../assets/dots.svg'
import arrow from '../assets/arrow.svg'
import polygon from '../assets/polygon.svg'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { deleteItemCart, addItemCart } from '../actions/coffeeAction'
import { useDispatch } from 'react-redux'
function Cart() {
  const cart = useSelector((state) => state.cart)

  const [filteredCart, setFilteredCart] = useState([])
  const [totalSum, setTotalSum] = useState(0)
  const dispatch = useDispatch()

  // const [itemCount, setItemCount] = useState(0)
  useEffect(() => {
    function totalCost() {
      cart.forEach((item) => {
        setTotalSum(totalSum + item.price)
      })
    }
    function filteredMenu() {
      setFilteredCart(cart.filter((item, pos) => cart.indexOf(item) === pos))
    }

    totalCost()
    filteredMenu()
  }, [cart])

  // function itemCounter(cartItem) {
  //   setItemCount(cart.filter((item) => item === cartItem).length)
  //   return itemCount
  // }

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
                <img
                  src={arrow}
                  className="upArrow"
                  alt="Up arrow"
                  onClick={() => {
                    dispatch(addItemCart(cartItem))
                  }}
                />
                <span>{cart.filter((item) => item === cartItem).length}</span>
                <img
                  src={arrow}
                  className="downArrow"
                  alt="Down arrow"
                  onClick={() => {
                    dispatch(deleteItemCart(cartItem))
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
