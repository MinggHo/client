import React from 'react';
import { Header } from "./Header";
import { AddOrder } from "./AddOrder"
import { OrderList } from "./OrderList";
import { OrderInfo } from "./OrderInfo";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <OrderList />
      <AddOrder />
    </>
  )
}

export const OrderPage = (props) => {
  const id = props.match.params.id
  return (
    <>
      <OrderInfo id={id}/>
    </>
  )
}