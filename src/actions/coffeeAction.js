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

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user
  }
}

export const setOrders = (orders) => {
  return {
    type: 'SET_ORDERS',
    payload: orders
  }
}

export const setEmailAccount = (email) => {
  return {
    type: 'SET_EMAIL',
    payload: email
  }
}
