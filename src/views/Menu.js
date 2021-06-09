import './Menu.scss'
import footer from '../assets/footer.svg'
import addButton from '../assets/addButton.svg'
import bag from '../assets/bag.svg'
import Cart from '../components/Cart'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCoffee } from '../actions/coffeeAction'
import dotsMenu from '../assets/dotsMenu.svg'
import { setCart } from '../actions/coffeeAction'

function Menu() {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const menu = useSelector((state) => state.menu)

  // FETCH COFFEE MENU
  async function getCoffee() {
    const response = await fetch('http://localhost:3002/api/coffee')
    const data = await response.json()
    console.log(data)
    dispatch(setCoffee(data))
  }

  // RUN ON MENU VIEW LOAD
  useEffect(() => {
    getCoffee()
  }, [])

  function addToCart() {}
  return (
    <div className="menuWrapper">
      {show ? <Cart /> : ''}
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
              <button onClick={() => dispatch(setCart(item))}>
                <img className="addButton" src={addButton} alt="button" />
              </button>
              <div className="listTextWrapper">
                <div className="listFlex">
                  <h3>{item.title}</h3>

                  <img src={dotsMenu} alt="..." className="dotsMenu" />

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
