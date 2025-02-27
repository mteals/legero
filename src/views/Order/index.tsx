import { CarbonArrowLeft } from "@/components/Icon"
import { OrderCreateForm, OrderList, OrderEditForm } from "@/components/Order"
import { useOrderStore } from "@/store/order"
import { Filter } from "@/types"
import dayjs from "dayjs"
import React from "react"
import { useNavigate } from "react-router"

const Order: React.FC = ({ }) => {
  const navigate = useNavigate()

  const orders = useOrderStore(state => state.orders)
  const filter = useOrderStore(state => state.filter)
  const setFilter = useOrderStore(state => state.setFilter)

  const NavToHomeView = () => {
    navigate("/", {
      replace: true,
    })
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value as Filter
    setFilter(selected)
  }

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10 h-16 mt-4 bg-base-200 flex justify-between items-center">
        <button className="btn btn-ghost" onClick={NavToHomeView}>
          <CarbonArrowLeft className="size-10" />
        </button>

        <div>
          <span className="text-2xl">{dayjs().date()}日已完成 {orders.filter(item => {
            if (dayjs(item.createdAt).date() === dayjs().date() && item.completedAt !== '') {
              return true
            }
            return false
          }).length}</span>
        </div>

        <div>
          <span className="text-2xl">未完成 </span>
          <span className="text-2xl">{orders.filter(item => item.completedAt === '').length}</span>
        </div>

        <select className="select w-32" value={filter} onChange={handleFilterChange}>
          <option value="all">全部</option>
          <option value="uncompleted">未完成</option>
          <option value="completed">已完成</option>
        </select>

        <OrderCreateForm />
      </div>
      <div className="mt-20">
        <OrderList />
      </div>
      <OrderEditForm />
    </div>
  )
}

export default Order