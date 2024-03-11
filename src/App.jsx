import { ShoppingBag } from 'lucide-react'
import { Bebidas } from './components/Bebidas'
import { Header } from './components/Header'
import { Produto } from './components/Produto'
import { useState } from 'react'

export default function App() {
  const [isModal, setIsModal] = useState(false)
  return (
    <div className="h-screen w-full grid grid-rows-[384px_auto] ">
      <Header />

      <div className="mx-auto max-w-6xl overflow-y-scroll">
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-6 md:mt-9 mb-6 text-slate-700">
          Conheça nosso cardápio
        </h2>
        <main>
          <h2 className="font-bold text-xl mb-2 text-slate-700">Sanduwiches</h2>
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

      {/* modal */}
      {isModal && (
        <div className="bg-black/60 w-full h-screen fixed top-0 left-0 z-[99] flex items-center justify-center">
          <div className="bg-slate-100 p-5 rounded-md min-w-[90%] md:min-w-[600px]">
            <h2 className="text-center font-bold text-2xl mb-2">
              Meu carrinho
            </h2>
            <div className="flex justify-between mb-2 flex-col"></div>
            <p className="font-bold text-end">
              Total: <span>0,00</span>
            </p>
            <div className="space-y-1 mt-4">
              <p className="font-bold">Endereço de Entrega</p>
              <input
                type="text"
                placeholder="informe seu endereço completo"
                className="w-full border outline-none p-2 text-slate-500 rounded"
              />
            </div>
            <p className="text-red-500 text-xs mt-2">
              Digite seu endereço completo!
            </p>
            <div className="flex justify-between pt-2">
              <button
                className="p-2 font-bold text-slate-600 rounded-md duration-300 border-2 hover:border-lime-700"
                onClick={() => setIsModal(false)}
              >
                Fechar
              </button>
              <button className="bg-lime-700 hover:bg-lime-800 p-2 text-slate-100 font-bold rounded-md duration-300">
                Enviar Pedido
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-lime-700 py-2 flex justify-center items-center fixed bottom-0 w-full z-40">
        <button
          className="flex items-center justify-center text-lg text-slate-50 gap-2 font-bold w-full"
          onClick={() => setIsModal(true)}
        >
          <ShoppingBag />
          <span>(2)</span>
          <p>ver meu carrinho</p>
        </button>
      </footer>
    </div>
  )
}
