import { CarbonArrowLeft } from "@/components/Icon";
import { useOrderStore } from "@/store/order";
import { useUserStore } from "@/store/users";
import React from "react";
import { useNavigate } from "react-router";

const Settings: React.FC = () => {
  const navigate = useNavigate()
  const {loginout} = useUserStore()

  const NavToHomeView = () => {
    navigate("/", {
      replace: true,
    })
  }

  const clear = useOrderStore((state) => state.clearOrders)

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10 h-16 mt-4 bg-base-200 flex justify-between items-center">
        <button className="btn btn-ghost" onClick={NavToHomeView}>
          <CarbonArrowLeft className="size-10" />
        </button>
      </div>
      <div className="mt-20 pt-2 flex flex-col items-center justify-center gap-y-6">
        <div>设置</div>
        <button className="btn btn-error" onClick={clear}>清空</button>
        <button className="btn btn-secondary btn-md text-white hover:bg-red-700"
         onClick={loginout}>退出登录</button>
      </div>
    </div>
  )
}

export default Settings