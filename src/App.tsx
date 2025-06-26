import { useReducer } from "react"
import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {

    
    const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="py-10 bg-amber-900">
          <h1 className="text-center text-4xl font-bold text-white">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto grid md:grid-cols-2 py-10">
          <div>
              <h2 className="text-2xl text-center font-bold">Menú</h2>
                  <div className="space-y-3 mt-10 p-5">
                    {menuItems.map(item => (
                      <MenuItems 
                      key={item.id}
                      item={item}
                      dispatch={dispatch}
                      />
                    ))}
                  </div> 
          </div>

          <div className="border border-dashed border-slate-300 p-5 space-y-10 rounded-lg">
            {state.order.length ? (
              <>
                <OrderContents 
                order={state.order}
                dispatch={dispatch}
                />

                <TipPercentageForm 
                dispatch={dispatch}
                tip={state.tip}
                />

                <OrderTotals 
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
                />
              </>

            ) : (
              <p className="text-center">Tu orden aparecera aqui</p>
            )}
              
              
          </div>
      </main>
    </>
  )
}

export default App
