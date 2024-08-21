import { useState } from "react";
import { checkRestaurantOpen } from "./Header";
interface CartItems {
  id: string;
  nameItems: string;
  quantity: number;
  priceItems: number;
}
interface ModalProps {
  cart: CartItems[];
  setCart: (value: CartItems[]) => void;
  modal: string;
  setModal: (value: string) => void;
}
const Modal: React.FC<ModalProps> = ({ modal, setModal, cart, setCart }) => {
  const total = cart.reduce(
    (acc, item) => acc + item.priceItems * item.quantity,
    0
  );

  // Formata valores numéricos substituindo ponto por vírgula
  const formatCurrency = (value: number) => {
    return value.toFixed(2).replace(".", ",");
  };
  // remover item do carrinho e atualizar o carrinho
  function removeToCart(nameItems: string) {
    const newCart = cart.reduce((acc, item) => {
      if (item.nameItems === nameItems) {
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
      } else {
        acc.push(item);
      }
      return acc;
    }, [] as CartItems[]);

    setCart(newCart);
  }

  const [endereco, setEndereço] = useState("");
  const [warnAddress, setWarnAddress] = useState("hidden");
  const [border, setBorder] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEndereço(event.target.value);
    console.log(event.target.value);
    if (event.target.value !== "") {
      setWarnAddress("hidden");
      setBorder("border-green-500");
    }
  };

  //finalizar pedido
  const handleSubmit = () => {
    const isOpen = checkRestaurantOpen();
    if (!isOpen) {
      alert("Restaurante fechado");
      return;
    }
    if (cart.length === 0) return;
    if (endereco === "") {
      setWarnAddress("block");
      setBorder("border-red-500");
      console.log("erro");
      return;
    }
    //Enviar pedido para api whatsapp
    const cartItems = cart.map((item) => {
      return `${item.nameItems} Quantidade: ${item.quantity} Prço R$: ${item.priceItems}`;
    }).join("");
// `Ola, gostaria de fazer o pedido: ${cartItems}\nEndereço: ${endereco}`;
    const message = encodeURIComponent(
      `Ola, gostaria de fazer o pedido: ${cartItems}\nEndereço: ${endereco}`
    );
    const phone = "1198193-2902";
    window.open(`https://wa.me/${phone}?text=${message} Endereço: ${endereco}`, "_blank");

  };

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

              <button onClick={() => removeToCart(item.nameItems)}>
                <i className="fa fa-trash"></i>
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
          className={`w-full border-2 p-1 rounded my-1 ${border}`}
          onChange={handleChange}
        />
        <p className={`text-red-500 ${warnAddress}`} id="address-warn">
          Digite seu endereço completo!
        </p>
        <div className="flex items-center justify-between mt-5 w-full">
          <button id="close-modal-btn" onClick={() => setModal("hidden")}>
            Fechar
          </button>
          <button
            id="checkout-btn"
            className="bg-green-500 text-white px-4 py-1 rounded"
            onClick={() => handleSubmit()}
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
