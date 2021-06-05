import './Cart.scss'
import dots from '../assets/dots.svg'
import arrow from '../assets/arrow.svg'
function Cart() {
  return (
    <div className="cartWrapper">
      <h1>Din beställning</h1>

      <ul>
        <li>
          <div>
            <div>
              <span>Bryggkaffe</span>
              <br />
              <small>98kr</small>
            </div>
            <img src={dots} alt="dots" className="dots" />
            <div className="amountPicker">
              <img src={arrow} className="upArrow" alt="Up arrow" />
              <span>1</span>
              <img src={arrow} className="downArrow" alt="Down arrow" />
            </div>
          </div>
        </li>
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
