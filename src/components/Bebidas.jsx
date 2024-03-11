import React from 'react'

import image1 from '../assets/refri-1.png'
import { ShoppingCart } from 'lucide-react'
export const Bebidas = () => {
  return (
    <div className="flex gap-2">
      <img
        src={image1}
        alt=""
        className="size-28 rounded-md hover:scale-100 hover:-rotate-2 duration-300"
      />
      <div className="w-full flex flex-col justify-between">
        <p className="font-bold">Coca Lata</p>
        <div className="flex items-center justify-between">
          <p>R$ 18,90</p>
          <button className="bg-lime-700 text-slate-50 px-5 py-1 rounded">
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  )
}
