import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from "react-router-dom";
import moment from 'moment'

export const OrderInfo = ({id}) => {
  const { orders, getOrder } = useContext(GlobalContext)
  useEffect(() => {
    getOrder(id);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Link to='/'>Back</Link>
      <h3 
      className="text-xs font-bold font-mono tracking-wide uppercase text-gray-600 mb-2 border-b-2 border-gray-400 pb-1">
        Order Information
      </h3>
      <p>Status: { orders.order_status }</p>
      <p>Time: { moment(orders.createAt).format('DD/MM/YYYY h:mm a') }</p>
      <p>Amount: { orders.amount }</p>
      <p>Item: { orders.item_id }</p>
    </>
  )
}