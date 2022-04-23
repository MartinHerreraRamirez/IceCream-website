import React from 'react'
import logo from './Images/logo.png'



const List = () => {
  
    return (
    <div className='container-footer mx-10 md:mx-0 lg:mx-10 my-4 flex flex-col md:flex-row justify-between max-w-full'>
        
        <div className='container-logo-footer h-40 w-80'>

            <img className='w-40 h-40 rounded-full xl:flex 2xl:ml-20'src={logo} alt="Logo" />

        </div>
        <br />    

        <div className='container-list font-bold lg:mt-2 lg:flex gap-x-1 xl:flex xl:gap-x-3 2xl:gap-x-12 mr-20'>           

            <div>
            <ul>
                <li><a className='hover:bg-purple-600'href=".">Todas las Categorias</a></li>
                <br />
                <li><a className='hover:bg-purple-600'href=".">Ocasiones</a></li>
                <li><a className='hover:bg-purple-600'href=".">Trabajando Desde Casa</a></li>
                <li><a className='hover:bg-purple-600'href=".">Hora de la Merienda</a></li>
                <li><a className='hover:bg-purple-600'href=".">Desayuno</a></li>            
            </ul>
            </div>
            <br />  
            <br />   

            <div>
            <ul>
                <li><a className='hover:bg-purple-600 'href=".">Productos Destacados</a></li>
                <br />
                
                <li><a className='hover:bg-purple-600'href='.'>Helados de Agua</a></li>
                <li><a className='hover:bg-purple-600'href=".">Helados de Crema</a></li>
                <li><a className='hover:bg-purple-600'href=".">Helados Veganos</a></li>
                <li><a className='hover:bg-purple-600'href=".">Helados Celiacos</a></li>
                <li><a className='hover:bg-purple-600'href=".">Drinks</a></li>            
            </ul>
            </div>
            <br />    
            <br />

            <div>
            <ul>                   
                <li><a className='hover:bg-purple-600'href=".">Regalos y Promociones</a></li>
                <br />
                <li><a className='hover:bg-purple-600'href=".">Gifts cards</a></li>
                <li><a className='hover:bg-purple-600'href=".">2x1 Miercoles y Jueves</a></li>
                <li><a className='hover:bg-purple-600'href=".">Descuento Pedidos Online</a></li>
                <li><a className='hover:bg-purple-600'href=".">Sorteos</a></li>              
            </ul>
            </div>
            <br />
            <br /> 

            <div>
            <ul>
                <li><a className='hover:bg-purple-600'href=".">Nuestras Especializaciones</a></li>
            </ul>
            </div>
            <br />
            <br />   
            
            <div>
            <ul>
                <li><a className='hover:bg-purple-600'href=".">Sobre Nosotros</a></li>                  
            </ul>
            </div>
            <br />
            <br />          

        </div>
    
    </div>
  )
}


export default List
