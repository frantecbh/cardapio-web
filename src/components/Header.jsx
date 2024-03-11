import { MapPin } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full md:h-96 h-72 bg-zinc-900 bg-home bg-cover bg-center">
      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-b to-black/50 from-black">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:size-32 size-28 rounded-full shadow-lg hover:scale-110 duration-200"
        />
        <h1 className="text-2xl md:text-4xl text-slate-50 md:mt-4 mt-2 font-bold md:my-2 my-1">
          Frantec Burger
        </h1>
        <span className="text-slate-50 font-medium text-xs flex items-center gap-1">
          <MapPin size={12} />
          Rua Visconde de taunay, 0001 - Santa Monica / BH
        </span>
        <div className="bg-lime-700 px-4 py-1 rounded-lg mt-5" id="date-span">
          <span className="text-slate-50 font-semibold">
            Seg à Dom - 18:00 às 22:00
          </span>
        </div>
      </div>
    </header>
  )
}
