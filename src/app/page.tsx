import About from "@/components/About";
import Banner from "@/components/Banner";
import Clientes from "@/components/Clientes";
import Contatos from "@/components/Contatos";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Servicos from "@/components/Servicos";
import Slider from "@/components/Slider";

export default function Home() {


  return (
    <>
      <header>
        <Menu />
        <Banner />
      </header>
      <main>
        <Slider />
        <About />
        <Servicos />
      </main>
      <Clientes />
      <Contatos />
      <Footer />
    </>
  );
}
