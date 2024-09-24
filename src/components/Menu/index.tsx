'use client';
import { useEffect, useState } from "react";
import Style from "./Menu.module.scss";
import LogoCompleta from '@/assets/logocomtexto.svg';
import LogoSemTexto from '@/assets/logosemtexto.svg';
import Close from '@/assets/x.svg';
import classNames from "classnames";
import Image from "next/image";

const Menu = () => {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 890) {
        setOpenModal(false);
        setShowMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <header className={Style.header}>
      <nav className={Style.menu_desk} >
        <ul className={Style.menu_lista_desk}>
          <li>
            <a href='home' className={Style.menuLinkLogo}>
              <Image src={LogoCompleta} alt="logo completo" className={Style.logo} />
            </a>
          </li>
          <div className={Style.menuLink_textos}>
            <li className={Style.menuLink}>
              <a href="">
                Sobre nós
              </a>
            </li>
            <li className={Style.menuLink}>
              <a href="" >
                Serviços
              </a>
            </li>
            <li className={Style.menuLink}>
              <a href="">
                Contato
              </a>
            </li>
          </div>
        </ul>
      </nav>
      <nav className={Style.menu_mobile}>
        <div
          onClick={() => {
            setOpenModal(!openModal)
            setShowMenu(!showMenu);
          }}
          className={classNames({
            [Style.openModal]: openModal,
          })} />
        <button
          className={Style.btn_menu_mobile}
          onClick={() => {
            setOpenModal(!openModal);
            setShowMenu(!showMenu);
          }}
        >
          <Image src={LogoSemTexto} alt="logo sem texto" className={Style.logo_mobile} />
        </button>
        <div className={classNames({
          [Style.container_menu_mobile]: true,
        })}
          style={showMenu ? { left: "0" } : { left: "-100%" }}
        >
          <button
            className={Style.btn_close_menu}
            onClick={() => {
              setOpenModal(!openModal);
              setShowMenu(!showMenu);
            }}
          >
            <Image src={Close} alt="X" className={Style.close_mobile} />
          </button>

          <ul className={Style.menu_lista_mobile}>
            <li>
              <a href="">
                <Image src={LogoCompleta} alt="logo completo" className={Style.logo_mobile} />
              </a>
            </li>
            <li>
              <a href="">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="">
                Serviços
              </a>
            </li>
            <li>
              <a href="">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>


    </header>
  )
};

export default Menu;
