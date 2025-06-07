import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

function App() {

    const{ order, tip, setTip, addItem, deleteItem } = useOrder()

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
                      addItem={addItem}
                      />
                    ))}
                  </div> 
          </div>

          <div className="border border-dashed border-slate-300 p-5 space-y-10 rounded-lg">
              <OrderContents 
              order={order}
              deleteItem={deleteItem}
              />

              <TipPercentageForm 
              setTip={setTip}
              />

              <OrderTotals 
              order={order}
              tip={tip}
              />
              
          </div>
      </main>
    </>
  )
}

export default App
