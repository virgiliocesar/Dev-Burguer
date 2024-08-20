interface CartItem {
  id: string;
  nameItems: string;
  quantity: number;
  priceItems: number;
}
interface ModalProps {
  cart: CartItem[];
  setCart: (value: CartItems[]) => void;
  modal: string;
  setModal: (value: string) => void;
  dataName: string;
}



const Modal: React.FC<ModalProps> = ({
  modal,
  setModal,
  cart,
  setCart,
  dataName,
}) => {
  const total = cart.reduce(
    (acc, item) => acc + item.priceItems * item.quantity,
    0
  );

  // Formata valores numéricos substituindo ponto por vírgula
  const formatCurrency = (value: number) => {
    return value.toFixed(2).replace(".", ",");
  };
 function removeItem() {
      const newCart = cart.map((item) => {
        if (item.id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(newCart);
    console.log(cart);
  }
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
        <div className="flex justify-between mb-2 flex-col">
          {cart.map((item) => (
            <div
              key={item.id}
              className="font-medium flex justify-between mb-4"
            >
              <div>
                <p>{item.nameItems}</p>
                <p>Qtd: {item.quantity}</p>
                <p>R$: {formatCurrency(item.priceItems)}</p>
              </div>

              <button>
                <i className="fa fa-trash" onClick={() => removeItem()}></i>
                Remover
              </button>
            </div>
          ))}
        </div>
        <p className="font-bold">
          Total: <span id="cart-total">R$ {formatCurrency(total)}</span>
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
