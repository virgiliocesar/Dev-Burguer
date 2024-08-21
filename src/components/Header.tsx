import { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";

// eslint-disable-next-line react-refresh/only-export-components
export const checkRestaurantOpen = () => {
  const data = new Date();
  const hora = data.getHours();
  return hora >= 18 && hora <= 23;
};
const Header = () => {
  const [open, setOpen] = useState("bg-green-600");
  useEffect(() => {
    const isOpen = checkRestaurantOpen();
    if (isOpen) {
      setOpen("bg-green-600");
    } else {
      setOpen("bg-red-600");
    }
  }, []);

  return (
    <header className="w-full h-[420px] bg-zinc-900 bg-home bg-cover bg-center ">
      <div className="w-full h-flex flex flex-col justify-center items-center">
        <img
          className="mt-16 w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
          src={Logo}
          alt="logo"
        />
        <h1 className="text-4xl mt-4 mb-2 font-bold text-white">Dev Burguer</h1>
        <span className="text-white">Rua dev 372, SBC - SP</span>
        <div className={`${open} px-4 py-1 rounded-lg mt-5`} id="date-span">
          <span className="text-white font-medium">
            Seg á Dom - 18:00 as 23:00
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
