import React, { createContext, useReducer } from "react"
import AppReducer from './AppReducer';
import axios from 'axios'

// Initial state
const initialState = {
  orders: [],
  error: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  // Actions
  async function getOrders() {
    try {
      const res = await axios.get('/api/v1/orders')
      dispatch({
        type: 'GET_ORDERS',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: "ORDER_ERROR",
        payload: error.response.data.error
      })
    }
  }
  async function getOrder(id) {
    try {
      const res = await axios.get(`/api/v1/orders/${id}`)
      dispatch({
        type: 'GET_ORDER',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: "ORDER_ERROR",
        payload: error.response.data.error
      })
    }
  }

  async function cancelOrder(id) {
    try {
      await axios.put(`/api/v1/orders/${id}`)
      dispatch({
        type: 'CANCEL_ORDER',
        payload: id
      })
    } catch (error) {
      dispatch({
        type: "ORDER_ERROR",
        payload: error.response.data.error
      })
    }
  }

  async function addOrder(orders) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/v1/orders', orders, config)
      dispatch({
        type: 'ADD_ORDER',
        payload: res.data.data
      })
    } catch (error) {
      dispatch({
        type: "ORDER_ERROR",
        payload: error.response.data.error
      })
    }
  }
  return (<GlobalContext.Provider value={{
    orders: state.orders,
    error: state.error,
    loading: state.loading,
    getOrders,
    getOrder,
    addOrder,
    cancelOrder
  }}>
    {children}
  </GlobalContext.Provider>)
}