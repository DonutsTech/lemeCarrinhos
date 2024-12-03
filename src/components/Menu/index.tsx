'use client';
import { useEffect, useState } from "react";
import Style from "./Menu.module.scss";
import logoOk from "@public/assets/logoOk.svg";
import LogoSemTexto from '@public/assets/logosemtexto.svg';
import Close from '@public/assets/x.svg';
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

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
            <Link href='' className={Style.menuLinkLogo}>
              <Image src={logoOk} alt="logo da Leme" className={Style.logo} />
            </Link>
          </li>
          <div className={Style.menuLink_textos}>
            <li className={Style.menuLink}>
              <Link className={Style.menuLink} href="#about">
                Sobre nós
              </Link>
            </li>
            <li className={Style.menuLink}>
              <Link className={Style.menuLink} href="#servicos" >
                Serviços
              </Link>
            </li>
            <li className={Style.menuLink}>
              <Link className={Style.menuLink} href="#contato">
                Contato
              </Link>
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
              <Link href=''>
                <Image src={logoOk} alt="logo completo" className={Style.logo_mobile} />
              </Link>
            </li>
            <li>
              <Link className={Style.menuLink} href="#about">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link className={Style.menuLink} href="#servicos">
                Serviços
              </Link>
            </li>
            <li>
              <Link className={Style.menuLink} href="#contato">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>


    </header>
  )
};

export default Menu;
