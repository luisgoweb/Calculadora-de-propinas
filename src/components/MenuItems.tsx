import type { MenuItem } from "../types"

type MenuItemsProps = {
    item: MenuItem
}

const MenuItems = ({item}: MenuItemsProps) => {
  return (
    <button 
    className="border border-slate-300 p-3 w-full rounded-md hover:bg-amber-900 hover:text-white cursor-pointer flex justify-between"
    >
        <p>{item.name}</p>
        <p>${item.price}</p>
    </button>
  )
}

export default MenuItems
