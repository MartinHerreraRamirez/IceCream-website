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


const Carrusel = () => {
    return (
        <OwlCarousel
            className="owl-theme"
            items="5"
            autoplay
            nav
            dotsEach
            loop
            rewind
            margin={20}
        >
            <div className="item">
                <img src={img1} alt={200} />
            </div>
            <div className="item">
                <img src={img2} alt={200} />
            </div>
            <div className="item">
                <img src={img3} alt={200} />
            </div>
            <div className="item">
                <img src={img4} alt={200} />
            </div>
            <div className="item">
                <img src={img5} alt={200} />
            </div>
            <div className="item">
                <img src={img6} alt={200} />
            </div>
            <div className="item">
                <img src={img7} alt={200} />
            </div>
            <div className="item">
                <img src={img8} alt={200} />
            </div>
            <div className="item">
                <img src={img9} alt={200} />
            </div>
        </OwlCarousel>
    )
};
export default Carrusel