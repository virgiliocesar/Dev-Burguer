import hambOne from "./assets/img/hamb-1.png";
import hambTwo from "./assets/img/hamb-2.png";
import hambThree from "./assets/img/hamb-3.png";
import hambFor from "./assets/img/hamb-4.png";
import hambFive from "./assets/img/hamb-5.png";
import hambSix from "./assets/img/hamb-6.png";
import hambSeven from "./assets/img/hamb-7.png";
import hambEith from "./assets/img/hamb-8.png";
import Product from './components/Product';
const Menu = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
        Conheça nosso menu
      </h2>
      <div id="menu">
        <main>
          <Product src={hambOne} />
          <Product src={hambTwo} />
          <Product src={hambThree} />
          <Product src={hambFor} />
          <Product src={hambFive} />
          <Product src={hambSix} />
          <Product src={hambSeven} />
          <Product src={hambEith} />
        </main>
      </div>
    </div>
  );
};

export default Menu;
