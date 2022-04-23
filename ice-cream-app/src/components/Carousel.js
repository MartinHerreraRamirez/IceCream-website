import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import img1 from '../components/pictures/pic01.jpg';
import img2 from '../components/pictures/pic02.jpg';
import img3 from '../components/pictures/pic03.jpg';
import img4 from '../components/pictures/pic04.jpg';
import img5 from '../components/pictures/pic05.jpg';
import img6 from '../components/pictures/pic06.jpg';
import img7 from '../components/pictures/pic07.jpg';
import img8 from '../components/pictures/pic08.jpg';
import img9 from '../components/pictures/pic09.jpg';
import img10 from '../components/pictures/pic10.jpg';
import img11 from '../components/pictures/pic11.jpg';
import img12 from '../components/pictures/pic12.jpg';
import img13 from '../components/pictures/pic13.jpg';
import img14 from '../components/pictures/pic14.jpg';


const Carrusel = () => {
    return (
        <OwlCarousel
            className="pt-9 owl-theme"
            items="4"
            autoplay
            autoplayHoverPause
            //nav
            dotsEach
            loop          
            rewind
            margin={16}
            

        >
            <div className="px-2 py-4 item ">
                <img src={img1} alt="helado1" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img2} alt="helado2" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img3} alt="helado3" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img4} alt="helado4" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img5} alt="helado5" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img6} alt="helado6" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img7} alt="helado7" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img8} alt="helado8" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img9} alt="helado9" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img10} alt="helado10" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img11} alt="helado11" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img12} alt="helado12" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img13} alt="helado13" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
            <div className="px-2 py-4 item ">
                <img src={img14} alt="helado14" className='duration-300 ease-out border-2 border-yellow-200 rounded-md hover:scale-125' />
            </div>
        </OwlCarousel>
    )
};
export default Carrusel