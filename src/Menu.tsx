import Product from "./components/Product";

import hambOne from "./assets/img/hamb-1.png";
import hambTwo from "./assets/img/hamb-2.png";
import hambThree from "./assets/img/hamb-3.png";
import hambFor from "./assets/img/hamb-4.png";
import hambFive from "./assets/img/hamb-5.png";
import hambSix from "./assets/img/hamb-6.png";
import hambSeven from "./assets/img/hamb-7.png";
import hambEith from "./assets/img/hamb-8.png";
import refriOne from "./assets/img/refri-1.png";
import refriTwo from "./assets/img/refri-2.png";

const Menu = ({ cart, setCart, count, setCount}: { cart: number; setCart: (value: number) => void, count: number, setCount: (value: number) => void}) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
        Conheça nosso menu
      </h2>
      <div id="menu">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px2 mb-16">
          <Product
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
            src={hambOne}
            alt={"Hamburguer Smash"}
            title={"Hamburguer Smash"}
            description={
              "Pão levinho de fermentação da Trigou, burger 160g, queijo prato e maionese da casa."
            }
            price={"R$ 18,90"}
            dataName={"Hamburguer Smash"}
            dataPrice={"18.90"}
          />
          <Product
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
            src={hambTwo}
            alt={"Hamburguer Duplo"}
            title={"Hamburguer Duplo"}
            description={
              "Pão levinho de fermentação da Trigou, burger 160g, queijo prato e maionese da casa."
            }
            price={"R$ 29,90"}
            dataName={"Hamburguer Duplo"}
            dataPrice={"29.90"}
          />
          <Product
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
            src={hambThree}
            alt={"Hamburguer Duplo Queijo"}
            title={"Hamburguer Duplo Queijo"}
            description={
              "Pão levinho de fermentação da Trigou, burger 160g, queijo prato e maionese da casa."
            }
            price={"R$ 35,90"}
            dataName={"Hamburguer Duplo Queijo"}
            dataPrice={"35.90"}
          />
          <Product
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
            src={hambFor}
            alt={"Hamburguer One chicken"}
            title={"Hamburguer One chicken"}
            description={
              "Pão levinho de fermentação da Trigou, burger 160g, queijo prato e maionese da casa."
            }
            price={"R$ 32,90"}
            dataName={"Hamburguer One chicken"}
            dataPrice={"32.90"}
          />
          <Product
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
            src={hambFive}
            alt={"Hamburguer all two "}
            title={"Hamburguer all two"}
            description={
              "Pão levinho de fermentação da Trigou, burger 160g, queijo prato e maionese da casa."
            }
            price={"R$ 30,00"}
            dataName={"Hamburguer all two"}
            dataPrice={"30.00"}
          />
          <Product
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
            src={hambSix}
            alt={"Hamburguer Tradicional Onion"}
            title={"Hamburguer Tradicional Onion"}
            description={
              "Pão levinho de fermentação da Trigou, burger 160g, queijo prato e maionese da casa."
            }
            price={"R$ 25,90"}
            dataName={"Hamburguer Tradicional Onion"}
            dataPrice={"25.90"}
          />
          <Product
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
            src={hambSeven}
            alt={"Hamburguer X-egg"}
            title={"Hamburguer X-egg"}
            description={
              "Pão levinho de fermentação da Trigou, burger 160g, queijo prato e maionese da casa."
            }
            price={"R$ 16,90"}
            dataName={"Hamburguer X-egg"}
            dataPrice={"16.90"}
          />
          <Product
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
            src={hambEith}
            alt={"Hamburguer"}
            title={"Hamburguer vegan"}
            description={
              "Pão levinho de fermentação da Trigou, burger 160g, queijo prato e maionese da casa."
            }
            price={"R$ 15,90"}
            dataName={"Hamburguer vegan"}
            dataPrice={"15.90"}
          />
        </main>
        <div className="mx-auto max-w-7-1 px-2 my-2">
          <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
            Bebidas
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px2 mb-16"
          id="menu"
        >
          <Product
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
            src={refriOne}
            alt={"Refrigerante Coca Cola"}
            title={"Coca Cola"}
            description={""}
            price={"R$ 12,90"}
            dataName={"Coca Cola"}
            dataPrice={"12.90"}
          />
          <Product
            count={count}
            setCount={setCount}
            cart={cart}
            setCart={setCart}
            src={refriTwo}
            alt={"Refrigerante Guaraná"}
            title={"Guaraná"}
            description={""}
            price={"R$ 10,90"}
            dataName={"Guaraná"}
            dataPrice={"10.90"}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
