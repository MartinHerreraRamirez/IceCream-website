import React from 'react'
import facebook from './Images/facebook.png'
import instagram from './Images/instagram.png'
import messenger from './Images/messenger.png'
import telegram from './Images/telegram.png'
import twitter from './Images/twitter.png'
import whatsapp from './Images/whatsapp.png'


const SocialMedia = () => {
  return (
    <div className='bg-blue-300 text-center content-center gap-y-16 h-80 grid sm:grid-row-2 max-w-full'>          

        <div className='text-xl lg:text-2xl font-extrabold'>
            <p>Nuestras Redes Sociales</p>
        </div>

        <div className='flex flex-nowrap gap-5 justify-center'>

            <a href="."><img className='h-10 w-10 rounded-full hover:bg-purple-600'src={facebook} alt="facebook"></img></a>
            <a href="."><img className='h-10 w-10 rounded-full hover:bg-purple-600'src={instagram} alt="instagram"></img></a>
            <a href="."><img className='h-10 w-10 rounded-full hover:bg-purple-600'src={messenger} alt="messenger"></img></a>
            <a href="."><img className='h-10 w-10 rounded-full hover:bg-purple-600'src={telegram} alt="telegram"></img></a>
            <a href="."><img className='h-10 w-10 rounded-full hover:bg-purple-600'src={twitter} alt="twitter"></img></a>
            <a href="."><img className='h-10 w-10 rounded-full hover:bg-purple-600'src={whatsapp} alt="whatsapp"></img></a>

        </div> 

    </div>
  )
}

export default SocialMedia