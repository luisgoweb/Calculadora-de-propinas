import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"

type OrderTotalsProps = {
    order: OrderItem[]
}

const OrderTotals = ({order}: OrderTotalsProps) => {
    const subTotalAmount = useMemo(()=> order.reduce( (total, item) => total + (item.price * item.quantity), 0),[order]) 
  return (
    <>
        <div className="space-y-3">
            <h3 className="text-2xl  font-bold">Totales y Propina</h3>
            <p>Subtotal {''} <span className="font-bold">{formatCurrency( subTotalAmount )}</span></p>
            <p>Propina {''} <span className="font-bold">0</span></p>
            <p>Total a Pagar {''} <span className="font-bold">0</span></p>
        </div>
        <button className="bg-amber-900 text-white rounded-md cursor-pointer w-full p-3">
            Enviar Orden
        </button>
    </>
  )
}

export default OrderTotals
