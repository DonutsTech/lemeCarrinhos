import About from "@/components/About";
import Banner from "@/components/Banner";
import Clientes from "@/components/Clientes";
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
      <Clientes />
    </main>
    </>
  );
}
