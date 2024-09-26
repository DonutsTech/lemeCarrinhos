import About from "@/components/About";
import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
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
    </main>
    </>
  );
}
