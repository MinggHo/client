export default (state, action) => {
  switch(action.type) {
    case 'GET_ORDERS':
      return {
        ...state,
        loading: false,
        orders: action.payload
      }
    case 'GET_ORDER':
      return {
        ...state,
        loading: false,
        orders: action.payload
    }
    case 'CANCEL_ORDER':
      let a = state.orders.filter(order => order._id === action.payload);
      a[0].order_status = 'Cancelled'
      return {
        ...state
      }
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload]
      }
    case 'ORDER_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}