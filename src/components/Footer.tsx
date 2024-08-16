
const Footer = ({ setModal }: { setModal: (value : string) => void }) => {
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
    </>
  );
};

export default Footer;
