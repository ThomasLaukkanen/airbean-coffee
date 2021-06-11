const initState = {
  menu: [],
  loggedIn: false,
  user: {},
  orders: [],
  email: '',
  cart: []
}

export const coffeeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_COFFEE':
      return {
        ...state,
        menu: action.payload
      }
    case 'SET_LOGIN':
      return {
        ...state,
        loggedIn: action.payload
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_ORDERS':
      return {
        ...state,
        orders: action.payload
      }
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload
      }
    case 'SET_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'DELETE_CART_ITEM':
      const array = [...state.cart]
      const index = array.indexOf(action.payload)
      if (index > -1) {
        array.splice(index, 1)
      }
      return {
        ...state,
        cart: array
      }
    default:
      return state
  }
}
