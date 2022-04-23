import React from 'react'
import fresas from '../assets/fresas.jpg'

const Tarjeta = () => {
  return (
<div class="flex justify-left">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src={fresas} alt="fresas"/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Título de la tarjeta</h5>
      <p class="text-gray-700 text-base mb-4">
        Texto que explica el contenido de esta tarjeta. Como por ejemplo puede contar una oferta o novedad.
      </p>
      <button type="button" class="inline-block  px-10 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Botón</button>      
    </div>
  </div>
</div>
  )
}

export default Tarjeta