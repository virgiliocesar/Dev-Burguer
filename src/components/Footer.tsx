import { useState } from "react";

const Footer = () => {
  const [modal, setModal] = useState("hidden");
  return (
    <>
      <footer className="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center">
        <button
          onClick={() => setModal("flex")}
          className="flex items-center gap-2 text-white"
          id="cart-btn"
        >
          (<span id="cart-count">0</span>) Veja meu arrinho
          <i className="fa fa-cart-plus text-lg text-white"></i>
        </button>
      </footer>
      {/*---------------MODAL----------------- */}
      <div
        id="cart-modal"
        className={`bg-black/50 w-full h-full fixed top-0 left-0 z-[99] items-center justify-center ${modal}`}
      >
        <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
          <h2 className="text-center font-bold text-2xl mb-2">Meu carrinho</h2>
          <div
            id="cart-items"
            className="flex justify-between mb-2 flex-col"
          ></div>
          <p className="font-bold">
            Total: <span id="cart-total">0.00</span>
          </p>
          <p className="font-bold mt-4">Endereço de entrega:</p>
          <input
            type="text"
            placeholder="Digite seu endereço completo..."
            id="adrress"
            className="w-full border-2 p-1 rounded my-1"
          />
          <p className="text-red-500 hidden" id="address-warn">
            Digite seu endereço completo!
          </p>
          <div className="flex items-center justify-between mt-5 w-full">
            <button id="close-modal-btn">Fechar</button>
            <button
              id="checkout-btn"
              className="bg-green-500 text-white px-4 py1 rounded"
            >
              Finalizar pedido
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
