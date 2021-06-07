const initState = {
  menu: [],
  loggedIn: false
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
    default:
      return state
  }
}
