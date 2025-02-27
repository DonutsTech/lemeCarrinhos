"use client";

import classnames from 'classnames';
import Style from './Contatos.module.scss';
import icon from '@public/assets/imagensContatos/carrinho.svg';
import Image from 'next/image';
import './contatos.scss';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { Form, FormConjunto } from '@/types/form';
import { cep, cnpj, phone } from '@/util/mask';
import { validateMensagem } from '@/util/validacao';
import { mensagemEnviada } from '@/util/mensagem';

const Contatos = () => {
  const [form, setForm] = useState<Form>({} as Form)
  const [mensagem, setMensagem] = useState<string>('')

  useEffect(() => {
    setTimeout(() => {
      if (mensagem) {
        setMensagem('')
      }
    }, 10000);
  }, [mensagem]);

  const handleFormChange = useCallback((e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nome = e.currentTarget.name

    if (nome === 'telefone') {
      e = phone(e)
    }

    if (nome === 'cep') {
      e = cep(e)
    }

    if (nome === 'cnpj') {
      e = cnpj(e)
    }

    setForm({
      ...form,
      [nome]: e.currentTarget.value
    })
  }, [form]);

  const enviarDados = async (formDados: FormConjunto) => {
    try {
      const response = await fetch('/api/formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: '',
          subject: 'Mensagem Recebida pelo site',
          text: mensagemEnviada(formDados)
        }),
      });

      const data = await response.json();

      if (data.mensagem === 'Mensagem não enviada. Contate-nos por telefone.') {
        throw new Error('Mensagem não enviada. Contate-nos por telefone.')
      }

      if (!(data.mensagem === 'Mensagem não enviada. Contate-nos por telefone.')) {
        setForm({} as Form)
        setMensagem(data.mensagem)
      }

    } catch (error) {
      console.error(error)
      setMensagem('Mensagem não enviada. Contate-nos por telefone.')
    }
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const FormData: Form = {
      nome: (e.currentTarget.elements.namedItem('nome') as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value,
      telefone: (e.currentTarget.elements.namedItem('telefone') as HTMLInputElement).value,
      cep: (e.currentTarget.elements.namedItem('cep') as HTMLInputElement).value,
      cnpj: (e.currentTarget.elements.namedItem('cnpj') as HTMLInputElement).value,
      mensagem: (e.currentTarget.elements.namedItem('mensagem') as HTMLTextAreaElement).value,
    };

    const mensagem = await validateMensagem(FormData)

    if (typeof mensagem === 'string') {
      setMensagem(mensagem)
    } else {
      enviarDados(mensagem)
    }

  };

  return (
    <section id='contato' className={Style.contato}>
      <h3 className={Style.titulo}>Entre em contato e faça o seu Orçamento!</h3>

      <div className={Style.contatoContainer}>
        <form action="submit" className={Style.form} onSubmit={onSubmit}>
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
            onChange={handleFormChange}
            value={form.nome === undefined ? '' : form.nome}
          />
          <label htmlFor='telefone' />
          <input
            type='text'
            name='telefone'
            id='telefone'
            placeholder="Telefone*"
            maxLength={15}
            required={true}
            className={classnames({
              [Style.input]: true,
              [Style.inputTelefone]: true,
            })}
            onChange={handleFormChange}
            value={form.telefone === undefined ? '' : form.telefone}
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
            onChange={handleFormChange}
            value={form.email === undefined ? '' : form.email}
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
            onChange={handleFormChange}
            value={form.cep === undefined ? '' : form.cep}
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
            onChange={handleFormChange}
            value={form.cnpj === undefined ? '' : form.cnpj}
          />
          <label htmlFor='mensagem' />
          <textarea
            name='mensagem'
            id='mensagem'
            placeholder='Digite aqui a sua Mensagem...'
            className={Style.inputMensagem}
            onChange={handleFormChange}
            value={form.mensagem === undefined ? '' : form.mensagem}
          />
           {
            !(mensagem === '') && (
              <p>{mensagem}</p>
            )
          }
          <label htmlFor="submit" />
          <button
            type='submit'
            name='submit'
            id='submit'
            className={Style.botaoSubmit}
          >
            <Image src={icon} width={20} height={20} alt='Enviar' className={Style.botaoSubmitIcon} priority/>
            Enviar
          </button>
        </form>
        <div className={Style.redes}>
          <p className={Style.callAction}>Transforme seus carrinhos de supermercado com a Leme Reformas! Qualidade e pontualidade na manutenção e comércio de carrinhos novos e usados. <br />Solicite seu orçamento agora e garanta carrinhos como novos!</p>

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
              <a href='mailto:lememanutencao.reformas@gmail.com' target='blank' rel='noreferrer'>
                <div className={classnames({
                  [Style.iconLink]: true,
                  ['email']: true,
                })} />
                <p className={Style.linkTexto}>lememanutencao.reformas@gmail.com</p>
              </a>
            </div>

            <div className={Style.contatoItem}>
              <a href='https://www.facebook.com/LemeReformaeManutencao/' target='blank' rel='noreferrer'>
                <div className={classnames({
                  [Style.iconLink]: true,
                  ['facebook']: true,
                })} />
                <p className={Style.linkTexto}>Leme Carrinhos</p>
              </a>
            </div>

            <div className={Style.contatoItem}>
              <a href='https://www.instagram.com/leme.carrinhos/' target='blank' rel='noreferrer'>
                <div className={classnames({
                  [Style.iconLink]: true,
                  ['instagram']: true,
                })} />
                <p className={Style.linkTexto}>@leme.carrinhos</p>
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
