import React, { useContext } from 'react'
import moment from 'moment'
import { GlobalContext } from '../context/GlobalState'
import { Link } from "react-router-dom";


export const Order = ({ order }) => {
  const { cancelOrder } = useContext(GlobalContext)
  const orderPage = {
    pathname: `/orders/${order._id}`
  }
  return (
    <li className={`p-4 bg-white shadow mb-4 rounded-t ${order.order_status === 'Confirmed' ? 'border-t-4 border-green-300' : 'border-t-4 border-red-300'}`}>
      <p className="text-xs text-gray-600 capitalize">{ order.order_status } . { moment(order.createAt).format('DD/MM/YYYY h:mm a') } </p>
      <h5 className="text-2xl text-gray-800 font-mono">${Math.abs(order.amount)}</h5><p className="capitalize">{ order.item_id }</p>
      <div className="flex">
        <Link 
          to={ orderPage }
          className="mr-2 bg-transparent hover:bg-blue-500 text-blue-700 text-xs font-medium hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
            View
        </Link>
        { order.order_status === 'Confirmed'
          ? <button 
              onClick={() => cancelOrder(order._id)} 
              className="block text-xs bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                Cancel
            </button>
          : ''
        }
      </div>
    </li>
  )
}
