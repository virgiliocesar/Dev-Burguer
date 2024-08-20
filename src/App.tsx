import { useState } from "react";
import Header from "./components/Header";
import Menu from "./Menu";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  const [modal, setModal] = useState("hidden");
  const [cart, setCart] = useState<CartItems[]>([]); // Corrigido para usar CartItems[]
  const [count, setCount] = useState(0);

  return (
    <div className="text-3 font-bold underline">
      <Header />
      <Menu cart={cart} setCart={setCart} count={count} setCount={setCount} />
      <Modal modal={modal} setModal={setModal} cart={cart} />
      <Footer setModal={setModal} cart={cart} count={count} />
    </div>
  );
}
