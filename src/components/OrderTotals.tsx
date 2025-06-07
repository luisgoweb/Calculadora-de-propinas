import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"

type OrderTotalsProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}

const OrderTotals = ({order, tip, placeOrder}: OrderTotalsProps) => {
    const subTotalAmount = useMemo(()=> order.reduce( (total, item) => total + (item.price * item.quantity), 0),[order]) 
    const tipAmount = useMemo( ()=> subTotalAmount * tip ,[order, tip] )
    const totalAmount = useMemo( ()=> subTotalAmount + tipAmount ,[tip, order])
  return (
    <>
        <div className="space-y-3">
            <h3 className="text-2xl  font-bold">Totales y Propina</h3>
            <p>Subtotal {''} <span className="font-bold">{formatCurrency( subTotalAmount )}</span></p>
            <p>Propina {''} <span className="font-bold">{formatCurrency(tipAmount) }</span></p>
            <p>Total a Pagar {''} <span className="font-bold">{formatCurrency(totalAmount)}</span></p>
        </div>
        <button 
        className="bg-amber-900 text-white rounded-md cursor-pointer w-full p-3 disabled:opacity-10"
        disabled={order.length === 0}
        onClick={()=> placeOrder()}
        >
            Enviar Orden
        </button>
    </>
  )
}

export default OrderTotals
