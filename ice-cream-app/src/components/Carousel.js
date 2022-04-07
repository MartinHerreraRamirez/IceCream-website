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
            items="6"
            autoplay
            autoplayHoverPause
            //nav
            dotsEach
            loop
            rewind
            margin={20}

        >
            <div className="item">
                <img src={img1} alt="helado1" />
            </div>
            <div className="item">
                <img src={img2} alt="helado2"  />
            </div>
            <div className="item">
                <img src={img3} alt="helado3" />
            </div>
            <div className="item">
                <img src={img4} alt="helado4" />
            </div>
            <div className="item">
                <img src={img5} alt="helado5" />
            </div>
            <div className="item">
                <img src={img6} alt="helado6" />
            </div>
            <div className="item">
                <img src={img7} alt="helado7" />
            </div>
            <div className="item">
                <img src={img8} alt="helado8" />
            </div>
            <div className="item">
                <img src={img9} alt="helado9" />
            </div>
            <div className="item">
                <img src={img10} alt="helado10" />
            </div>
            <div className="item">
                <img src={img11} alt="helado11" />
            </div>
            <div className="item">
                <img src={img12} alt="helado12" />
            </div>
            <div className="item">
                <img src={img13} alt="helado13" />
            </div>
            <div className="item">
                <img src={img14} alt="helado14" />
            </div>
        </OwlCarousel>
    )
};
export default Carrusel