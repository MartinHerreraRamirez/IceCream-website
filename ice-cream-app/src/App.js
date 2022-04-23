<<<<<<< HEAD
import BotonRadio from "./components/ButtonRadio";
import {useModalHookState} from "./components/useModalHookState";
import Modal from "./components/Modal";
import Pic1 from "./components/pictures/pic01.jpg";
import React from 'react'
import Columnas from "./components/Columns";

const App = () => { 
  const[modalIsOpen, openModal, closeModal]=useModalHookState(false); 
  return (   
    <>
    <div>
      <BotonRadio myOnClick={openModal}>OPEN MODAL</BotonRadio>
      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <h2 className="items-center justify-center mb-4 text-4xl text-center text-black">
          Producto A
        </h2>
        <div>
        <img
          src={Pic1}
          className="object-contain border-2 border-black rounded-md sm:m-2 md:m-4 lg:m-6 shrink"
          alt="Helado"
        ></img>
        </div>
      </Modal>
    </div>
   
   <div>
    <Columnas />
    </div>
  
    </> 
  )
}
export default App
=======

import Header from "./components/Header";
import Portada from "./components/Portada";

const App = () => {
  return (
    <>
      <div>
      <Header />
      <Portada />
      </div>
    </>
  );
};

export default App;
>>>>>>> 8330f013610c747639a3ace36f5357b5f4cde694
