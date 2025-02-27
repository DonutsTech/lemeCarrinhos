'use client';
import { useState } from 'react';
import Style from './Produto.module.scss';
import Acordeon from './Acordeon';



import logo from './carrinho.svg';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { IProduto } from '@/types/produto';

interface Props {
  imagem: StaticImageData;
  invertido?: boolean | undefined;
  titulo?: string;
  texto?: string;
  acordeon: Array<IProduto>;
}

const Produto = ({ imagem, invertido = false, titulo, texto, acordeon}: Props) => {

  const [open, setOpen] = useState<boolean>(false);

  const scrollDown = (pixels: number) => {
    window.scrollBy({
        top: pixels,  // quantidade de pixels para descer
        behavior: 'smooth'  // define a animação do scroll como suave
    });
  }

  return (
    <div className={Style.produto}>
      <div className={classNames({
        [Style.produtoBox]: true,
        [Style.invertido]: invertido,
      })} >
        <Image src={imagem} alt='Imagem do serviço' className={Style.imagemProduto} priority/>
        <div className={Style.boxTextos}>
          <h3>{titulo}</h3>
          <p>
            {texto}
          </p>
          <button className={Style.btnProdutos}
            onClick={() => {
              setOpen(!open)
              scrollDown(!open ? 300 : -300)
            }}
          >
            <Image src={logo} alt='logo' className={Style.logo} priority/>
            confira
          </button>
        </div>
      </div>
      <div className={classNames({
        [Style.acordeon]: open,
        [Style.acordeoff]: !open,
      })}>

        {/* <div className={Style.detailUp} /> */}

        <div className={Style.acordeonContain} >
          <Acordeon prop={acordeon} />
        </div>

        {/* <div className={Style.detailDown} /> */}
      </div>
    </div>
  )
};

export default Produto;
