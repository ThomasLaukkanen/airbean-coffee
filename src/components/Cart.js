import './Cart.scss'
import dots from '../assets/dots.svg'
import arrow from '../assets/arrow.svg'
import polygon from '../assets/polygon.svg'
import { useSelector } from 'react-redux'
function Cart() {
  const cartItems = useSelector((state) => state.cart)
  return (
    <div className="cartWrapper">
      <img src={polygon} alt="polygon" className="polygon" />
      <h1>Din beställning</h1>

      <ul>
        {cartItems.map((cartItem) => (
          <li>
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
                <span>1</span>
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
