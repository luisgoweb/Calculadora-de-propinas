import type { MenuItem, OrderItem } from "../types";


    export type OrderActions = 
    {type: 'add-item', payload: {item: MenuItem}} |
    {type: 'delete-item', payload: {id: MenuItem['id']}} |
    {type: 'add-tip', payload: {value: number}} |
    {type: 'place-order'} 

    export type orderState = {
        order: OrderItem[]
        tip: number
    }

    export const initialState: orderState = {
    order: [],
    tip: 0
    }

    export const orderReducer = (
            state: orderState = initialState,
            action: OrderActions
        )=>{

            if(action.type === 'add-item'){

                const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
                let updateOrder : OrderItem[] = []
                if(itemExist){
                    updateOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id ? {...orderItem, quantity: orderItem.quantity +1} : orderItem)
                }else{
                    const newItem = {...action.payload.item, quantity: 1}
                    updateOrder = [...state.order, newItem]
                } 

                return {
                    ...state,
                    order: updateOrder
                }
            }

            if(action.type === 'delete-item'){
                return {
                    ...state,
                    order: state.order.filter(item => item.id !== action.payload.id)
                }
            }

            if(action.type === 'add-tip'){
                return{
                    ...state,
                    tip: action.payload.value
                }
            }

            if(action.type === 'place-order'){
                return {
                    ...state,
                    order: [],
                    tip: 0
                }
            }

            return state
        }