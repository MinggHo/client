import React, { useContext, useEffect } from 'react'
import { Order } from './Order'
import { GlobalContext } from '../context/GlobalState'

export const OrderList = () => {
  const { orders, getOrders } = useContext(GlobalContext)
  useEffect(() => {
    getOrders();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <h3 className="text-xs font-bold font-mono tracking-wide uppercase text-gray-600 mb-2 border-b-2 border-gray-400 pb-1">Order History</h3>
      <ul>
        { orders.map( order => (<Order key={order._id} order={order} />) ) }
      </ul>
    </>
  )
}