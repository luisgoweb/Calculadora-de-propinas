import type { Dispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"
import type { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    dispatch: Dispatch<OrderActions>
}

const OrderContents = ({order, dispatch}: OrderContentsProps) => {
  return (
    
        <div>
            <h2 className="text-2xl text-center font-bold">Consumo</h2>
                <div className="mt-5">
                    { order.map(item => (
                        <div key={item.id} className="flex justify-between items-center border-t border-gray-100 last-of-type:border-b py-5">
                            <div>
                                <p>{item.name} - <span className="font-bold">${item.price}</span></p>
                                <p>Cantidad: {item.quantity} </p>
                            </div>
                            <button className="bg-red-600 hover:bg-red-900 text-white p-3  cursor-pointer rounded-md"
                            onClick={()=> dispatch({type: 'delete-item', payload: {id: item.id}})}
                            >
                                Eliminar
                            </button>
                        </div> 
                    ))}
                </div>
               
        </div>   
    
  )
}

export default OrderContents
