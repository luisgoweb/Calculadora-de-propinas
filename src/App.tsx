import MenuItems from "./components/MenuItems"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

function App() {

    const{ addItem } = useOrder()

  return (
    <>
      <header className="py-10 bg-amber-900">
          <h1 className="text-center text-4xl font-bold text-white">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto grid md:grid-cols-2 py-10">
          <div>
              <h2 className="text-2xl text-center font-bold">Menú</h2>
                  <div className="space-y-3 mt-10">
                    {menuItems.map(item => (
                      <MenuItems 
                      key={item.id}
                      item={item}
                      addItem={addItem}
                      />
                    ))}
                  </div>
                
          </div>
          <div>
              <h2 className="text-2xl text-center font-bold">Consumo</h2>
          </div>
      </main>
    </>
  )
}

export default App
