"use client"

import Carta from "@/components/carta"
import { useState } from "react"

export default function Home(){

  const [titulos, setTitulos] = useState(["Titulo 1", "Titulo 2", "Titulo 3", "Titulo 4", "Titulo 5", "Titulo 6"])

  function cambiarTituloCarta1(){
    const nuevosTitulos = [...titulos]
    nuevosTitulos[0] = "Carta 1 cambiado"
    setTitulos(nuevosTitulos)
  }

  return(
    <div className="grid grid-cols-3 gap-4 m-4">

      {titulos.map((titulo) =>(
        <Carta key={titulo} titulo={titulo} cambiarTituloCarta1={cambiarTituloCarta1}/>
      ))}

    </div>
  )
}