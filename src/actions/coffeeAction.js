export const setCoffee = (menu) => {
  return {
    type: 'SET_COFFEE',
    payload: menu
  }
}

export const setLogin = (boolean) => {
  return {
    type: 'SET_LOGIN',
    payload: boolean
  }
}
