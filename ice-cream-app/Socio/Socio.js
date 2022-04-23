import React from 'react'
import bluecow from './Images/bluecow.png'

const Socio = () => {
  return (
    <div className='bg-blue-300 text-center content-center gap-y-10 h-80 grid grid-row-3 max-w-full '>          

        <div className='container-title flex flex-wrap text-xl font-bold justify-center
                        md:text-2xl xl:text-3xl'>

            <p className='text-white font-extrabold uppercase'>principal socio de luna ice</p>
            
        </div> 

        <div className='flex flex-nowrap gap-5 justify-center'>

            <img className='h-24 w-24 rounded-full'src={bluecow} alt="bluecow"></img>
            
            
        </div> 

        <div>

        <button className='bg-blue-700 p-3 mb-3 text-white border-2 border-none font-extrabold rounded-xl hover:bg-purple-600'>Visitar Sitio Web</button>

        </div>

    </div>
  )
}

export default Socio