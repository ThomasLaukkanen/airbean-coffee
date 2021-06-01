const initState = {
  coffee: []
}

export const coffeeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_COFFEE':
      return {
        ...state,
        coffee: action.payload
      }
    default:
      return state
  }
}
