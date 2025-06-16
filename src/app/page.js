"use client"

import { useState } from "react"

export default function Home() {
  const [contador, setContador] = useState(0)

  function sumar() {
    setContador(contador + 1)
  }

  function restar() {
    setContador(contador - 1)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold">Contador: {contador}</h1>
      <div className="flex gap-4">
        <button onClick={restar} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Restar</button>
        <button onClick={sumar} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Sumar</button>
      </div>
    </div>
  )
}