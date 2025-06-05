"use client"

import { useState } from "react"

export default function Carta({titulo, cambiarTituloCarta1}){
    const [tituloLocal, setTituloLocal] = useState(titulo)

    function cambiarTitulo(){
        setTituloLocal("Titulo cambiado")
    }

    return (
        <div className="flex flex-col gap-3 bg-blue-300 p-4 rounded">

            <div className="border-b">
                <h1 className="font-bold">{tituloLocal}</h1>
            </div>

            <div>
                <p>La primera carta con react y nextjs para ver como queda</p>
                <button className="bg-white p-0.5 mt-3 mr-1 rounded" onClick={cambiarTitulo}>Cambiar Titulo</button>
                <button className="bg-red-400 p-0.5 mt-3 rounded" onClick={cambiarTituloCarta1}>Cambiar Carta 1</button>
            </div>

      </div>
    )
}