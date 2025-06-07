import type { MenuItem } from "../types"

type MenuItemsProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void
}

const MenuItems = ({item, addItem}: MenuItemsProps) => {
  return (
    <button 
    className="border border-slate-300 p-3 w-full rounded-md hover:bg-amber-900 hover:text-white cursor-pointer flex justify-between"
    onClick={()=> addItem(item)}
    >
        <p>{item.name}</p>
        <p>${item.price}</p>
    </button>
  )
}

export default MenuItems
