const initState = {
  menu: [],
  loggedIn: false,
  user: {},
  orders: []
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
    default:
      return state
  }
}
