import Modal from "./components/Modal";
import { useModalHookState } from "./components/useModalHookState";
import Pic1 from "./components/pictures/pic01.jpg";
import Header from "./components/Header";
import Portada from "./components/Portada";

const App = () => {
  const [modalIsOpen, openModal, closeModal] = useModalHookState(false);
  return (
    <>
    <Header />
    <div >
    <Portada />
    </div>
    <div>
        
    </div>
   
   
   
   
   
   
   
   
   
   
    <div className="pt-10">
      <button
        className="px-6 m-10 font-sans text-white bg-blue-600 border-2 rounded border-cyan-500"
        onClick={openModal}
      >
        MODAL
      </button>
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
    </>
  );
};

export default App;
