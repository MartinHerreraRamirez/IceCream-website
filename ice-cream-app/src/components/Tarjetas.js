import React from "react";
import fresas from "../assets/fresas.jpg";
import linda from "../assets/linda.jpg";
import crema from "../assets/crema.jpg";
import varios from "../assets/varios.jpg"

const Tarjeta = () => {
  return (
    <>
    <div className='mt-4 mb-10 text-center text-2xl'>
      <h2>
        Para todos los gustos
      </h2>
    </div>
    <div class="flex justify-items-center grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-rows-4">
      <div class="rounded-lg shadow-lg bg-white w-72">
        <a href="#!">
          <img class="rounded-t-lg h-52 object-cover" src={fresas} alt="fresas" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
            Para Vegan@s
          </h5>
          <p class="text-blue-700 text-base mb-4">
            Texto que explica el contenido de esta tarjeta. Como por ejemplo
            puede contar una oferta o novedad.
          </p>
          <button
            type="button"
            class="ml-7 px-10 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            ¡Compra ahora!
          </button>
        </div>
      </div>
      <div class="rounded-lg shadow-lg bg-white w-72 md-flex">
        <a href="#!">
          <img class="rounded-t-lg h-52 w-72 object-cover" src={linda} alt="galgo tomando helado" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
            Para Mascotas
          </h5>
          <p class="text-blue-700 text-base mb-4">
            Texto que explica el contenido de esta tarjeta. Como por ejemplo
            puede contar una oferta o novedad.
          </p>
          <button
            type="button"
            class="ml-7 inline-block  px-10 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            ¡Compra ahora!
          </button>
        </div>
      </div>
      <div class="rounded-lg shadow-lg bg-white w-72">
        <a href="#!">
          <img class="rounded-t-lg h-52 object-cover" src={crema} alt="crema" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
            Para Celíac@s
          </h5>
          <p class="text-blue-700 text-base mb-4">
            Texto que explica el contenido de esta tarjeta. Como por ejemplo
            puede contar una oferta o novedad.
          </p>
          <button
            type="button"
            class="ml-7 inline-block  px-10 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            ¡Compra ahora!
          </button>
        </div>
      </div>
      <div class="rounded-lg shadow-lg bg-white w-72">
        <a href="#!">
          <img class="rounded-t-lg h-52 object-cover" src={varios} alt="varios sabores" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
            Para Gordit@s
          </h5>
          <p class="text-blue-700 text-base mb-4">
            Texto que explica el contenido de esta tarjeta. Como por ejemplo
            puede contar una oferta o novedad.
          </p>
          <button
            type="button"
            class="ml-7 inline-block px-10 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            ¡Compra ahora!
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Tarjeta;
