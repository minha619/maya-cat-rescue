import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Pic1 from '../../assets/img/01.jpg';
import Pic2 from '../../assets/img/02.jpg';
import Pic3 from '../../assets/img/03.jpg';
import Pic4 from '../../assets/img/04.jpg';
import Pic5 from '../../assets/img/05.jpg';
import Pic6 from '../../assets/img/06.jpg';
import Pic7 from '../../assets/img/07.jpg';
import Pic8 from '../../assets/img/08.jpg';
import Pic9 from '../../assets/img/09.jpg';
import Pic10 from '../../assets/img/10.jpg';
// import Pic11 from '../../assets/img/11.jpg';
// import Pic12 from '../../assets/img/12.jpg';
// import Pic13 from '../../assets/img/13.jpg';
// import Pic14 from '../../assets/img/14.jpg';
// import Pic15 from '../../assets/img/15.jpg';
// import Pic16 from '../../assets/img/16.jpg';
// import Pic17 from '../../assets/img/17.jpg';
// import Pic18 from '../../assets/img/18.jpg';
// import Pic19 from '../../assets/img/19.jpg';

const images = [
    { original: Pic1, thumbnail: Pic1 },
    { original: Pic2, thumbnail: Pic2 },
    { original: Pic3, thumbnail: Pic3 },
    { original: Pic4, thumbnail: Pic4 },
    { original: Pic5, thumbnail: Pic5 },
    { original: Pic6, thumbnail: Pic6 },
    { original: Pic7, thumbnail: Pic7 },
    { original: Pic8, thumbnail: Pic8 },
    { original: Pic9, thumbnail: Pic9 },
    { original: Pic10, thumbnail: Pic10 },
    // { original: Pic11, thumbnail: Pic11 },
    // { original: Pic12, thumbnail: Pic12 },
    // { original: Pic13, thumbnail: Pic13 },
    // { original: Pic14, thumbnail: Pic14 },
    // { original: Pic15, thumbnail: Pic15 },
    // { original: Pic16, thumbnail: Pic16 },
    // { original: Pic17, thumbnail: Pic17 },
    // { original: Pic18, thumbnail: Pic18 },
    // { original: Pic19, thumbnail: Pic19 },
];


function Adoptionlist() {


    return (
        <section className="h-full mt-2 px-6 py-10 text-center font-sans relative">
            <div className=" bg-bgyellow opacity-80 absolute inset-0 mt-2" />
            <div className="flex absolute inset-0 px-6 py-10 justify-center">
                <div className="justify-center flex">
                    <ImageGallery items={images} />
                </div>
            </div>
        </section>
    )
}
export default Adoptionlist;

