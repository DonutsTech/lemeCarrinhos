'use client';

import classNames from 'classnames';
import Style from './CLientes.module.scss';

import './clientes.scss'


const Clientes = () => {

  return (
    <section id='clientes' aria-label='Clientes' className={Style.clientes}>
      <h2 className={Style.tituloClientes}>Conte com a qualidade que conquistou os melhores!</h2>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        controls={false}
        preload='auto'
        className={Style.video}
      >
        <source src="assets/video/videoCliente.mp4" type='video/mp4' />
      </video>
      <div className={Style.detalhe}>
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
          ></a>
          <a
            href='https://www.barbosasupermercados.com.br/'
            target='_blank'
            title='Supermercados Barbosa'
            rel='noReferrer'

            className={classNames({
              [Style.clienteLink]: true,
              ['barbosaLink']: true
            })}
          ></a>
          <a
            href='https://www.supermercadosnegreiros.com.br/'
            target='_blank'
            title='Supermercados Negreiros'
            rel='noReferrer'
            className={classNames({
              [Style.clienteLink]: true,
              ['negreirosLink']: true
            })}
          ></a>
          <a
            href='http://www.rodraf.com.br/index.html'
            target='_blank'
            title='Supermercados Rod & Raf'
            rel='noReferrer'
            className={classNames({
              [Style.clienteLink]: true,
              ['rodrafLink']: true
            })}
          ></a>
          <a
            href='https://www.associacaoricoy.com.br/nossas-marcas/ricoy-supermercados/'
            target='_blank'
            title='Ricoy supermercados'
            rel='noReferrer'
            className={classNames({
              [Style.clienteLink]: true,
              ['ricoyLink']: true
            })}
          ></a>
          <a
            href='https://www.armarinhosfernandooficial.com.br/'
            target='_blank'
            title='Armarinhos Fernando'
            rel='noReferrer'
            className={classNames({
              [Style.clienteLink]: true,
              ['armarinhosfernandoLink']: true
            })}
          ></a>
          <a
            href='https://www.calvoatacadista.com.br/'
            target='_blank'
            title='Calvo Atacadista'
            rel='noReferrer'
            className={classNames({
              [Style.clienteLink]: true,
              ['calvoatacadistaLink']: true
            })}
          ></a>
          <a
            href='https://www.hiperbergamini.com.br/'
            target='_blank'
            title='Hipermercado Bergamini'
            rel='noReferrer'
            className={classNames({
              [Style.clienteLink]: true,
              ['bergaminiLink']: true
            })}
          ></a>
        </div>
      </div>
    </section>
  )
};

export default Clientes;
