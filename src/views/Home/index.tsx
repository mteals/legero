import React from "react";
import { useNavigate } from "react-router";

const Home: React.FC = () => {
  const navigate = useNavigate()

  const NavToOrderView = () => {
    navigate('/order')
  }

  const NavToStatisticView = () => {
    navigate('/statistics')
  }

  const NavToSettingsView = () => {
    navigate('/settings')
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-20">
      <button className="btn btn-wide btn-xl" onClick={NavToOrderView}>订单</button>
      <button className="btn btn-wide btn-xl" onClick={NavToStatisticView}>统计</button>
      <button className="btn btn-wide btn-xl" onClick={NavToSettingsView}>设置</button>
    </div>
  )
}

export default Home