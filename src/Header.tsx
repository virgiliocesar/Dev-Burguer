import Logo from "./assets/img/hamb-1.png";
const Header = () => {
  return (
    <header className="w-full h-[420px] bg-zinc-900 bg-home bg cover bg-center ">
      <div className="w-full h-flex flex flex-col justify-center items-center">
        <img
          className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
          src={Logo}
          alt="logo"
        />
              <h1 className="text-4xl mt-4 mb-2 font-bold text-white">Dev Burguer</h1>
              <span className="text-white">Rua dev 372, SBC - SP</span>
      </div>
    </header>
  );
};

export default Header;
