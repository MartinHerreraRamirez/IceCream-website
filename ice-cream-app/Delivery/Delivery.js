import React from 'react'
import helados from './Images/Helados.jpg'

const Delivery = () => {
  return (
    <div>

    <div className='md:px-5 py-5 h-auto grid grid-row-2 max-w-full
                        lg:grid lg:grid-cols-2 lg:gap-x-5'>

            
            <div className='container-image'>

            <img className='w-full h-full'src={helados} alt="Hace tu pedido ONLINE" />

            </div>        


            <div className='container-text flex flex-col content-center mx-2 lg:mx-0 pt-6 gap-y-5 lg:gap-y-8'>        

                <div className='container-title text-xl font-bold
                                md:text-2xl xl:text-3xl'>

                    <p className='text-green-700'>Hace tu Pedido Online!</p><p className='pb-3'>Delivery Gratis!</p>

                </div>      
                
                <div className='container-p md:text-xl'>

                  <p>Sorprende a alguien que esté haciendo Homeoffice</p>
                  <br /><br />

                  <p>Te imaginas estar trabajando desde casa, haces una pausa para almorzar, te suena el timbre y cuando abres te encuentras con nuestra caja especial home?</p>
                  <br /><br />

                  <p>Puedes pedir el peso y sabores que desees, nosotros los acompañaremos con unos deliciosos cucuruchos, chocolates, salsas y otros topping. También podrás mandar un mensaje personalizado para darle un mejor impacto a la sorpresa.</p>
                  <br /><br />

                </div>

                <div>

                  <button className='bg-blue-700 p-3  text-white border-2 border-none font-extrabold rounded-xl hover:bg-purple-600 md:text-xl'>Hacer Pedido Online</button>

                </div>        

            </div>

           

        </div>

    </div>
  )
}

export default Delivery