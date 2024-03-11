import React from 'react'

import image1 from '../assets/hamb-1.png'
import { ShoppingCart } from 'lucide-react'

export const Produto = () => {
  return (
    <div className="flex gap-2">
      <img
        src={image1}
        alt=""
        className="size-28 rounded-md hover:scale-100 hover:-rotate-2 duration-300"
      />
      <div>
        <p className="font-bold">Hamburger Samsh</p>
        <p className="text-sm font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          facere magni cumque blanditiis rerum cupiditate ipsa vitae assumenda.
        </p>
        <div className="flex items-center justify-between mt-3">
          <p>R$ 18,90</p>
          <button className="bg-lime-700 text-slate-50 px-5 py-1 rounded">
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  )
}
