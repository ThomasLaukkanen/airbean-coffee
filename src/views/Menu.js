import './Menu.scss'
import footer from '../assets/footer.svg'
import addButton from '../assets/addButton.svg'
function Menu() {
  return (
    <div className="menuWrapper">
      <h1>Menu</h1>
      <ul>
        <li>
          <button>
            <img className="addButton" src={addButton} alt="button" />
          </button>
          <div>
            <h3>
              Bryggkaffe<span className="dots">............</span>
            </h3>
            <small>Bryggd på månadens bönor</small>
          </div>
          <h3>49 kr</h3>
        </li>
      </ul>
      <footer>
        <img src={footer} alt="flowers" />
      </footer>
    </div>
  )
}

export default Menu
