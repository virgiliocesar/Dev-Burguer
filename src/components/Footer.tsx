interface CartItems {
  id: string;
  nameItems: string;
  quantity: number;
  priceItems: number;
}

interface FooterProps {
  setModal: (value: string) => void;
  cart: CartItems[];
}
const Footer: React.FC<FooterProps> = ({setModal, cart}) => {
const totalItems = cart.reduce(
  (acc, item) => acc + item.quantity,
  0
);
  return (
    <>
      <footer className="w-full bg-red-500 py-3 fixed bottom-0 z-40 flex items-center justify-center">
        <button
          onClick={() => setModal("flex")}
          className="flex items-center gap-2 text-white"
          id="cart-btn"
        >
          (<span id="cart-count">{totalItems}</span>) Veja meu carrinho
          <i className="fa fa-cart-plus text-lg text-white"></i>
        </button>
      </footer>
    </>
  );
};

export default Footer;
