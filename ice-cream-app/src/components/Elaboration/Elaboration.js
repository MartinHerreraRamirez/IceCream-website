import React from 'react'
import elaboration from './Images/elaboration.jpg'
import tilde from './Images/tilde.png'



const Elaboration = () => {
  return (

    <div className='container md:px-5 py-5 h-auto grid grid-row-2 max-w-full
                    lg:grid lg:grid-cols-2 lg:gap-x-5'>

        <div className='container-text flex flex-col gap-y-5 mx-2 md:mx-0'>        

          <div className='container-title flex flex-wrap text-xl font-bold
                          md:text-2xl xl:text-3xl'>

            <p className='text-green-700 pr-2 pb-7'>Elaboracion de</p><p>Nuestros Productos</p>
            
          </div>          

          <div className='containter-text  flex flex-wrap gap-y-6 mb-3'>

            <div className='flex flex-nowrap '>

            <img className='w-7 h-7 pr-2 lg:w-10 lg:h-10' src={tilde} alt="tilde" /><p>Nuestra misión es hacerte feliz a ti y ayudar a nuestra comunidad.  De qué manera?</p>               

            </div>  

            <div className='flex flex-nowrap '>

              <img className='w-7 h-7 pr-2 lg:w-10 lg:h-10' src={tilde} alt="tilde" /><p>Haciendo helados que disfrutarás comer como ninguna otra cosa en el mundo.</p>                       

            </div>        

            <div className='flex flex-nowrap '>
              
              <img className='w-7 h-7 pr-2 lg:w-10 lg:h-10' src={tilde} alt="tilde"/><p>Creando sabores únicos que soprenden a todas las personas que los prueban.</p>            

            </div>
         
            <div className='flex flex-nowrap'>
              
              <img className='w-6 h-6 pr-2 lg:w-10 lg:h-10' src={tilde} alt="tilde"/><p>Siendo inclusivos al crear alternativas para todos, desde personas con intolerancias alimentarias hasta que por cuestiones éticas no desean comer productos hechos con componentes animales.</p>                        

            </div>           

            <div className='flex flex-nowrap'>
              
              <img className='w-7 h-7 pr-2 lg:w-10 lg:h-10' src={tilde} alt="tilde"/><p>Siendo inclusivos al crear alternativas para todos, desde personas con intolerancias alimentarias hasta que por cuestiones éticas no desean comer productos hechos con componentes animales.</p>            

            </div>

          </div>       

          <div>

            <button className='bg-blue-700 mt-3 p-3 mb-3 text-white border-2 border-none font-extrabold rounded-xl hover:bg-purple-600'>Descubre Nuestros Productos</button>

          </div>

        </div>

        <div className='container-image'>

          <img className='w-full h-full'src={elaboration} alt="Elaboracion de Nuestros Productos" />

        </div>        

    </div>

  )
}

export default Elaboration