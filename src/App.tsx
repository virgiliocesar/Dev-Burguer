import Header from "./components/Header";
import Menu from "./Menu";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function App() {
  return <div className="text-3 font-bold underline">
    <Header />
    <Menu />
    <Modal/>
    <Footer />
  </div>;
}
