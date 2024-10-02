'use client';

import Image from 'next/image';
import Style from './Footer.module.scss';
import donuts from '@public/assets/donuts.svg';


const Footer = () => {

  return (
    <footer className={Style.footer}>
      <p className={Style.footerText}>
        Todos os direitos reservados &copy; Leme Manutencao e Reformas LTDA || 19.055.182/0001-26 || 2024
      </p>
      <div className={Style.donuts}>
        <p className={Style.donutsText}>
          Feito Com muito amor e açucar
        </p>
        <a href='https://www.donutstech.com.br/' target='_blank' rel='noreferrer'>
          <Image src={donuts} alt="donuts" className={Style.donutsImg} />
        </a>
      </div>
    </footer>
  )
};

export default Footer;
