import { useState } from "react";
import Header from "./components/Header";
import Menu from "./Menu";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  const [modal, setModal] = useState("hidden");
  const [cart, setCart] = useState([]); // Corrigido para usar CartItems[]

  return (
    <div className="text-3 font-bold underline">
      <Header />
      <Menu cart={cart} setCart={setCart} />
      <Modal modal={modal} setModal={setModal} cart={cart} />
      <Footer setModal={setModal} cart={cart} />
    </div>
  );
}