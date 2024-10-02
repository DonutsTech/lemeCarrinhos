"use client";

import classnames from 'classnames';
import Style from './Contatos.module.scss';
import icon from '@public/assets/imagensContatos/carrinho.svg';
import Image from 'next/image';


import './contatos.scss';

const Contatos = () => {

  return (
    <section id='contato' className={Style.contato}>
      <h3 className={Style.titulo}>Entre em contato e faça o seu Orçamento!</h3>

      <div className={Style.contatoContainer}>
        <form action="submit" className={Style.form}>
          <label htmlFor='nome' />
          <input
            type='text'
            name='nome'
            id='nome'
            required={true}
            placeholder='Nome Completo*'
            className={classnames({
              [Style.input]: true,
              [Style.inputNome]: true,
            })}
          />
          <label htmlFor='telefone' />
          <input
            type='text'
            name='telefone'
            id='telefone'
            placeholder="Telefone*"
            required={true}
            className={classnames({
              [Style.input]: true,
              [Style.inputTelefone]: true,
            })}
          />
          <label htmlFor='email' />
          <input
            type='email'
            name='email'
            id='email'
            placeholder="E-mail*"
            required={true}
            className={classnames({
              [Style.input]: true,
              [Style.inputEmail]: true,
            })}
          />
          <label htmlFor='cep' />
          <input
            type='text'
            name='cep'
            id='cep'
            placeholder="CEP*"
            required={true}
            className={classnames({
              [Style.input]: true,
              [Style.inputCep]: true,
            })}
          />
          <label htmlFor='cnpj' />
          <input
            type='text'
            name='cnpj'
            id='cnpj'
            placeholder='CNPJ'
            className={classnames({
              [Style.input]: true,
              [Style.inputCnpj]: true,
            })}
          />
          <label htmlFor='mensagem' />
          <textarea
            name='mensagem'
            id='mensagem'
            placeholder='Digite aqui a sua Mensagem...'
            className={Style.inputMensagem}
          />
          <label htmlFor="submit" />
          <button
            type='submit'
            name='submit'
            id='submit'
            className={Style.botaoSubmit}
          >
            <Image src={icon} width={20} height={20} alt='Enviar' className={Style.botaoSubmitIcon} />
            Enviar
          </button>
        </form>
        <div className={Style.redes}>
          <p className={Style.callAction}>Transforme seus carrinhos de supermercado com a Leme Reformas! Qualidade e pontualidade na manutenção e comércio de carrinhos novos e usados. Solicite seu orçamento agora e garanta carrinhos como novos!</p>

          <div className={Style.redesContatos}>

            <div className={Style.contatoItem}>
              <a href='https://maps.app.goo.gl/tgwVsTUgv6rJ9YpdA' target='blank' rel='noreferrer'>
                <div className={classnames({
                  [Style.iconLink]: true,
                  ['endereco']: true,
                })} />
                <p className={Style.linkTexto}>Rua Isa Silveira Leal, 200a - Colônia - São Paulo - SP</p>
              </a>
            </div>

            <div className={Style.contatoItem}>
              <a href='mailto:contato@lemecarrinhos.com.br' target='blank' rel='noreferrer'>
                <div className={classnames({
                  [Style.iconLink]: true,
                  ['email']: true,
                })} />
                <p className={Style.linkTexto}>contato@lemecarrinhos.com.br</p>
              </a>
            </div>

            <div className={Style.contatoItem}>
              <a href='https://www.facebook.com/LemeReformaeManutencao/' target='blank' rel='noreferrer'>
                <div className={classnames({
                  [Style.iconLink]: true,
                  ['facebook']: true,
                })} />
                <p className={Style.linkTexto}>Leme Reforma</p>
              </a>
            </div>

            <div className={Style.contatoItem}>
              <a href='https://www.instagram.com' target='blank' rel='noreferrer'>
                <div className={classnames({
                  [Style.iconLink]: true,
                  ['instagram']: true,
                })} />
                <p className={Style.linkTexto}>@carrinhosleme</p>
              </a>
            </div>

            <div className={Style.contatoItem}>
              <a href='https://www.linkedin.com/in/leme-manuten%C3%A7%C3%A3o-e-reformas-76082b72/' target='blank' rel='noreferrer'>
                <div className={classnames({
                  [Style.iconLink]: true,
                  ['linkedin']: true,
                })} />
                <p className={Style.linkTexto}>Leme Manutenção e Reformas</p>
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
};

export default Contatos;
