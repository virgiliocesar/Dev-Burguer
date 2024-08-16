import { useState } from "react";
import Header from "./components/Header";
import Menu from "./Menu";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  const[modal, setModal] = useState("hidden");
  return (
    <div className="text-3 font-bold underline">
      <Header />
      <Menu />
      <Modal modal ={modal} setModal={setModal}/>
      <Footer setModal={setModal} />
    </div>
  );
}
