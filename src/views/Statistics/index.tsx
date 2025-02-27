import { CarbonArrowLeft } from "@/components/Icon";
import { calculateDailyStats, DailyStats } from "@/logic/statistics";
import { useOrderStore } from "@/store/order";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Statistic: React.FC = () => {
  const navigate = useNavigate()
  const orders = useOrderStore(state => state.orders)

  const [stats, setStats] = useState<Map<string, DailyStats>>(new Map<string, DailyStats>())

  const NavToHomeView = () => {
    navigate("/", {
      replace: true,
    })
  }

  const handleStatistics = () => {
    setStats((calculateDailyStats(orders)))
  }

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10 h-16 mt-4 bg-base-200 flex justify-between items-center">
        <button className="btn btn-ghost" onClick={NavToHomeView}>
          <CarbonArrowLeft className="size-10" />
        </button>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-y-6 pt-2">
        <h1>统计</h1>
        <button className="btn text-xl" onClick={handleStatistics} >开始统计</button>
        <div className="mt-4">
          <table className="table">
            <thead>
              <tr>
                <td className="text-xl">日期</td>
                <td className="text-xl">总流水</td>
                <td className="text-xl">总订单数</td>
              </tr>
            </thead>
            <tbody>
              {Array.from(stats.entries()).map(([key, value]) => (
                  <tr key={key}>
                    <td className="text-lg">{key}</td>
                    <td className="text-lg">{value.totalAmount}</td>
                    <td className="text-lg">{value.orderCount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Statistic