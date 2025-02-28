'use client';

import classNames from 'classnames';
import Style from './CLientes.module.scss';

import './clientes.scss'
import { useEffect, useState } from 'react';


const Clientes = () => {

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id='clientes' aria-label='Clientes' className={Style.clientes}>

      {isScrolled && (

        <div className={Style.clientesContainer}>
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            controls={false}
            preload='auto'
            className={Style.video}
            playsInline={true}
          >
            <source src="assets/video/videoCliente.mp4" type='video/mp4' />
          </video>

          <div className={Style.detalhe} />
          <div className={Style.detalheExterno} >
            <div className={Style.detalheInterno} >
            </div>
          </div>
          <div className={Style.clienteBox}>
            <h2 className={Style.tituloClientes}>Conte com a qualidade que conquistou os melhores!</h2>
            <div className={Style.displayClientes}>
              <a
                href='https://www.assai.com.br/'
                target='_blank'
                title='Assaí Atacadista'
                rel='noReferrer'
                className={classNames({
                  [Style.clienteLink]: true,
                  ['assaiLink']: true,
                })}
              />
              <a
                href='https://www.barbosasupermercados.com.br/'
                target='_blank'
                title='Supermercados Barbosa'
                rel='noReferrer'

                className={classNames({
                  [Style.clienteLink]: true,
                  ['barbosaLink']: true
                })}
              />
              <a
                href='https://www.supermercadosnegreiros.com.br/'
                target='_blank'
                title='Supermercados Negreiros'
                rel='noReferrer'
                className={classNames({
                  [Style.clienteLink]: true,
                  ['negreirosLink']: true
                })}
              />
              <a
                href='http://www.rodraf.com.br/index.html'
                target='_blank'
                title='Supermercados Rod & Raf'
                rel='noReferrer'
                className={classNames({
                  [Style.clienteLink]: true,
                  ['rodrafLink']: true
                })}
              />
              <a
                href='https://www.associacaoricoy.com.br/nossas-marcas/ricoy-supermercados/'
                target='_blank'
                title='Ricoy supermercados'
                rel='noReferrer'
                className={classNames({
                  [Style.clienteLink]: true,
                  ['ricoyLink']: true
                })}
              />
              <a
                href='https://www.armarinhosfernandooficial.com.br/'
                target='_blank'
                title='Armarinhos Fernando'
                rel='noReferrer'
                className={classNames({
                  [Style.clienteLink]: true,
                  ['armarinhosfernandoLink']: true
                })}
              />
              <a
                href='https://www.calvoatacadista.com.br/'
                target='_blank'
                title='Calvo Atacadista'
                rel='noReferrer'
                className={classNames({
                  [Style.clienteLink]: true,
                  ['calvoatacadistaLink']: true
                })}
              />
              <a
                href='https://www.hiperbergamini.com.br/'
                target='_blank'
                title='Hipermercado Bergamini'
                rel='noReferrer'
                className={classNames({
                  [Style.clienteLink]: true,
                  ['bergaminiLink']: true
                })}
              />
            </div>
          </div>
        </div>)}
    </section>

  )
};

export default Clientes;
