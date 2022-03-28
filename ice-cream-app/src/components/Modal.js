import Pic1 from '../components/pictures/pic01.jpg'

const Modal = ({ setModalOn, setChoice }) => {

    const handleOKClick = () => {
        setChoice(true)
        setModalOn(false)
    }
    const handleCancelClick = () => {
        setChoice(false)
        setModalOn(false)
    }

    return (

        <div className="   bg-zinc-200 opacity-80 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-sky-500 rounded-xl ">

                    <div className="flex  text-lg  text-zinc-600   mb-10" >
                        <img src={Pic1} className='max-w-sm h-auto' alt='Helado'></img>
                    </div>
                    <div>
                    <p className='mb-4 text-2xl text-black-800 justify-center items-center'>Características Producto A</p>
                    </div>
                    <div className='mb-4'>
                        <ul className='text-lg text-black-800 justify-center items-center font-medium'>
                            <li>Precio $:</li>
                            <li>Contenido Kg:</li>
                            <li>Sabores:</li>
                        </ul>
                    </div>
                    <div className="flex">
                        <button onClick={handleOKClick} className=" justify-center items-center rounded px-4 py-2 text-white  bg-green-800 ">Comprar</button>
                        <button onClick={handleCancelClick} className="justify-center items-center rounded px-4 py-2 ml-4 text-white bg-blue-800 ">Volver</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Modal