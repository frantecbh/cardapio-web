import { ShoppingBag } from 'lucide-react'
import { Bebidas } from './components/Bebidas'
import { Header } from './components/Header'
import { Produto } from './components/Produto'

export default function App() {
  return (
    <div className="h-screen w-full grid grid-rows-[384px_auto] ">
      <Header />

      <div className="mx-auto max-w-6xl overflow-y-scroll">
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-6 md:mt-9 mb-6">
          Conheça nosso cardápio
        </h2>
        <main>
          <h2 className="font-bold text-xl mb-2">Sanduwiches</h2>
          {/* produtos */}
          <div className="grid grid-cols-1 gap-7 md:gap-10 md:grid-cols-2 px-4 mb-16 md:px-0">
            {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map((item, i) => (
              <Produto key={i} />
            ))}
          </div>
          <div className="w-full">
            <h2 className="font-bold text-xl mb-2">Bebidas</h2>
            {/* bebidas */}
            <div className="grid grid-cols-1 gap-7 md:gap-10 md:grid-cols-2 px-4 mb-16 md:px-0">
              {Array.from([1, 2, 3, 4, 5]).map((item, i) => (
                <Bebidas key={i} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-lime-700 py-2 flex justify-center items-center fixed bottom-0 w-full z-40">
        <button className="flex items-center justify-center text-lg text-slate-50 gap-2 font-bold">
          <ShoppingBag />
          <span>(2)</span>
          <p>ver meu carrinho</p>
        </button>
      </footer>
    </div>
  )
}
