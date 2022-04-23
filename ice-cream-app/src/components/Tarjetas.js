import React from "react";
import fresas from "../assets/fresas.jpg";
import linda from "../assets/linda.jpg";
import crema from "../assets/crema.jpg";
import varios from "../assets/varios.jpg"
import * as stylesMM from "./stylesMM"

const Tarjeta = () => {
  return (
    <>
    <div className='mt-4 mb-10 text-2xl text-center'>
      <h2>
        Para todos los gustos
      </h2>
    </div>
    <div class={stylesMM.MAIN_CONTAINER}>
      <div class={stylesMM.CARD_CONTAINER}>
        <a href="#!">
          <img class={stylesMM.IMAGE} src={fresas} alt="fresas" />
        </a>
        <div class="p-6">
          <h5 class={stylesMM.CARD_TITLE}>
            Para Vegan@s
          </h5>
          <p class={stylesMM.CARD_TEXT}>
            Si sos vegan@ no dejes de probar nuestro delicioso chocolate fondente, no lo vas a poder creer!
          </p>
          <button
            type="button"
            class={stylesMM.CARD_BUTTON}
          >
            ¡Compra ahora!
          </button>
        </div>
      </div>
      <div class="rounded-lg m-4 shadow-lg bg-white w-72 md-flex">
        <a href="#!">
          <img class="rounded-t-lg h-52 w-72 object-cover" src={linda} alt="galgo tomando helado" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
            Para Mascotas
          </h5>
          <p class="text-blue-700 text-base mb-4">
            No solo somos una heladería petfriendly, también tenemos un sabor para los reyes de casa. Sin azúcares añadidos
          </p>
          <button
            type="button"
            class="ml-7 inline-block  px-10 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            ¡Compra ahora!
          </button>
        </div>
      </div>
      <div class="rounded-lg m-4 shadow-lg bg-white w-72">
        <a href="#!">
          <img class="rounded-t-lg h-52 object-cover" src={crema} alt="crema" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
            Para Celíac@s
          </h5>
          <p class="text-blue-700 text-base mb-4">
            Como queremos que tod@s puedan disfrutar de nuestros helados, tenemos gustos sin gluten.
          </p>
          <button
            type="button"
            class="ml-7 inline-block  px-10 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            ¡Compra ahora!
          </button>
        </div>
      </div>
      <div class="rounded-lg m-4 shadow-lg bg-white w-72">
        <a href="#!">
          <img class="rounded-t-lg h-52 object-cover" src={varios} alt="varios sabores" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl text-center font-medium mb-2">
            Ofertas Especiales
          </h5>
          <p class="text-blue-700 text-base mb-4">
            Todas las semanas tenemos nuevas ofertas, te recomendamos consultar esta sección antes de hacer tu pedido.
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
