import './Menu.scss'
import footer from '../assets/footer.svg'
import addButton from '../assets/addButton.svg'
import bag from '../assets/bag.svg'
import Cart from '../components/Cart'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCoffee, setDiscount } from '../actions/coffeeAction'
import dotsMenu from '../assets/dotsMenu.svg'
import { setCart } from '../actions/coffeeAction'

function Menu() {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const menu = useSelector((state) => state.menu)
  const [totalSum, setTotalSum] = useState(0)
  const cart = useSelector((state) => state.cart)

  // add to total cost in cart
  function addTotalCost(item) {
    setTotalSum(totalSum + parseInt(item.price))
  }

  // remove to total cost in cart
  function removeTotalCost(item) {
    setTotalSum(totalSum - item.price)
  }

  // RUN ON MENU VIEW LOAD
  useEffect(() => {
    // FETCH COFFEE MENU and Dispatch to coffee menu
    async function getCoffee() {
      const response = await fetch('http://localhost:3002/api/coffee')
      const data = await response.json()
      dispatch(setCoffee(data))
    }
    getCoffee()
  }, [])

  // check if cart items with id 1 and id 7
  function checkCartDiscount() {
    console.log('nu kör jag')
    dispatch(setDiscount())

    // if (cart.find((item) => item.id === 8)) {
    //   // setTotalSum(totalSum - 21)
    //   // alert('NU')
    // }
  }
  useEffect(() => {
    setTotalSum(
      cart.reduce((ac, cv) => {
        return ac + cv.price
      }, 0)
    )
  }, [cart])
  return (
    <div className="menuWrapper">
      {show ? (
        <Cart
          addTotalCost={addTotalCost}
          removeTotalCost={removeTotalCost}
          totalSum={totalSum}
          checkCartDiscount={checkCartDiscount}
        />
      ) : (
        ''
      )}
      <button
        onClick={() => {
          setShow(!show)
        }}
        className="cartIconButton"
      >
        <img src={bag} alt="cartIcon" />
      </button>
      <h1>Menu</h1>
      <ul>
        {menu.map((item) => {
          return (
            <li key={item.id}>
              <button
                onClick={() => {
                  dispatch(setCart(item))
                  checkCartDiscount()
                }}
              >
                <img
                  onClick={() => {
                    addTotalCost(item)
                  }}
                  className="addButton"
                  src={addButton}
                  alt="button"
                />
              </button>
              <div className="listTextWrapper">
                <div className="listFlex">
                  <h3>{item.title}</h3>
                  <div className="dotsMenu">
                    <img src={dotsMenu} alt="..." />
                  </div>
                  <h3>{item.price} kr</h3>
                </div>
                <small>{item.desc}</small>
              </div>
            </li>
          )
        })}
      </ul>
      <footer>
        <img src={footer} alt="flowers" />
      </footer>
    </div>
  )
}

export default Menu
