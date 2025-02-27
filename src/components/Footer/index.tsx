'use client';

import Image from 'next/image';
import Style from './Footer.module.scss';
import donuts from '@public/assets/donuts.svg';
import logo from '@public/assets/logoOk.svg';


const Footer = () => {

  return (
    <footer className={Style.footer}>
      <div className={Style.copy}>
      <a href='/' className={Style.linkLogo}>
        <Image src={logo} alt="logo da Leme" className={Style.logo} priority/>
      </a>
      <p className={Style.footerText}>
        Todos os direitos reservados &copy; Leme Manutencao e Reformas LTDA || 19.055.182/0001-26 || 2024
      </p>
      </div>

      <div className={Style.donuts}>
        <p className={Style.donutsText}>
          Feito Com muito amor e açucar
        </p>
        <a href='https://www.donutstech.com.br/' target='_blank' rel='noreferrer'>
          <Image src={donuts} alt="donuts" className={Style.donutsImg} priority/>
        </a>
      </div>
    </footer>
  )
};

export default Footer;
