import type { Dispatch } from "react"
import type { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemsProps = {
    item: MenuItem
    dispatch: Dispatch<OrderActions>
}

const MenuItems = ({item, dispatch}: MenuItemsProps) => {
  return (
    <button 
    className="border border-slate-300 p-3 w-full rounded-md hover:bg-amber-900 hover:text-white cursor-pointer flex justify-between"
    onClick={()=> dispatch({type: 'add-item', payload: {item}})}
    >
        <p>{item.name}</p>
        <p>${item.price}</p>
    </button>
  )
}

export default MenuItems
