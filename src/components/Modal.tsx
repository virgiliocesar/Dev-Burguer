const Modal = ({
  modal,
  setModal,
  cart,
}: {
  cart: number;
  modal: string;
  setModal: (value: string) => void;
}) => {
  // function addToCart() {
  //   setCart(cart + 1);
  // }
  // function removeFromCart() {
  //   setCart(cart - 1);
  // }
  // function resetCart() {
  //   setCart(0);
  // }
  return (
    <div
      id="cart-modal"
      className={`bg-black/50 w-full h-full fixed top-0 left-0 z-[99] items-center justify-center ${modal} cursor-pointer`}
      onClick={() => setModal("hidden")}
    >
      <div
        className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px] cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center font-bold text-2xl mb-2">Meu carrinho</h2>
        <div id="cart-items" className="flex justify-between mb-2 flex-col">
          {/* Aqui os itens do carrinho devem ser renderizados */}
        </div>
        <p className="font-bold">
          Total: <span id="cart-total">R${/*Valor do carrinho */}</span>
        </p>
        <p className="font-bold mt-4">Endereço de entrega:</p>
        <input
          type="text"
          placeholder="Digite seu endereço completo..."
          id="address"
          className="w-full border-2 p-1 rounded my-1"
        />
        <p className="text-red-500 hidden" id="address-warn">
          Digite seu endereço completo!
        </p>
        <div className="flex items-center justify-between mt-5 w-full">
          <button id="close-modal-btn" onClick={() => setModal("hidden")}>
            Fechar
          </button>
          <button
            id="checkout-btn"
            className="bg-green-500 text-white px-4 py-1 rounded"
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
