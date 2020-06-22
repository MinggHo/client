import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid';

export const AddOrder = () => {
  const [item_id, setItemID] = useState('yellow')
  const [amount, setAmount] = useState(0)
  const { addOrder } = useContext(GlobalContext)
  const getStatus = () => {
    const mockedResult = 
      Math.random() >= 0.5
      ? "Confirmed"
      : "Declined"
      return mockedResult;
  }
  const onSubmit = e => {
    e.preventDefault();
    const newOrder = {
      order_id: uuidv4(),
      order_status: getStatus(),
      item_id,
      amount: +amount
    }
    addOrder(newOrder)
  }
  return (
    <>
      <h3 className="text-xs font-bold font-mono tracking-wide uppercase text-gray-600 mb-2 border-b-2 border-gray-400 pb-1">Add new order</h3>
      <form className="mb-4" onSubmit={onSubmit}>
        <div className="mb-4">
          <label htmlFor="amount" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
        </div>
        <label htmlFor="item" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Item:</label>
        <div className="inline-block relative w-64 mb-4">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={item_id} onChange={(e) => { setItemID(e.target.value)}}>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add order</button>
      </form>
    </>
  )
}