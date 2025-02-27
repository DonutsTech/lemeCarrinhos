"use client"
import Image from 'next/image';
import Style from './About.module.scss';
import logo from './logoAzul.svg';
import MVV from './MVV';

const About = () => {

  return (
    <section id="about" aria-label='Sobre a Leme Carrinhos' className={Style.about}>
      <div className={Style.cabeca}>
        <Image src={logo} alt='Logo da Leme Carrinhos' className={Style.logo} priority/>
        <h2>Uma história de qualidade e compromisso com a excelência!</h2>
      </div>
      <p>
        Há mais de 10 anos, a Leme Carrinhos se dedica a oferecer soluções completas para carrinhos
        de supermercado, desde a manutenção e venda de modelos novos e usados até a personalização e
        entrega com agilidade e garantia total. Nossa história é marcada pela busca incessante pela
        qualidade e pela pontualidade na entrega, reconhecidas por grandes redes de supermercados,
        lojas de varejo e atacado.
      </p>
      <MVV />
    </section>
  )
};

export default About;
