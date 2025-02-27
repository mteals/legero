import React from "react";
import OrderItem from "./OrderItem";
import { OrderItem as OI } from "@/types";
import { useOrderStore } from "@/store/order";

const OrderList: React.FC = () => {
  let filteredOrders: OI[] = []
  const filter = useOrderStore(state => state.filter)
  switch (filter) {
    case 'all':
      filteredOrders = useOrderStore(state => state.orders)
      break
    case 'uncompleted':
      filteredOrders = useOrderStore(state => state.orders).filter((order: OI) => !order.completedAt)
      break
    case 'completed':
      filteredOrders = useOrderStore(state => state.orders).filter((order: OI) => !!order.completedAt)
  }

  return (
    <>
      <ul className="list rounded-box shadow-md">
        {filteredOrders.map((order: OI) => (
          <li className="list-row" key={order.id}>
            <OrderItem {...order} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default OrderList