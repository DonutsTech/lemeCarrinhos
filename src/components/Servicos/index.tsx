"use client"
import Produto from './Produto';
import Style from './Servicos.module.scss';
import { IProduto } from '@/types/produto';
import { v4 as uuidv4 } from 'uuid';

//


// Produtos:
//Carrinhos:
import carrinho from './imagens/carrinhosDeSupermercado.png';
import carrinhoAcordeon01 from './imagens/carrinho01_Cliente.png';
import carrinhoAcordeon02 from './imagens/carrinho02_DuplaCesta.png';
import carrinhoAcordeon03 from './imagens/carrinho03_Gestante.png';
import carrinhoAcordeon04 from './imagens/carrinho04_Atacadista.png';
import carrinhoAcordeon05 from './imagens/carrinho05_AtacadoPrancha.png';
import carrinhoAcordeon06 from './imagens/carrinho06_BebeConforto.png';

const carrinhoAcordeon: Array<IProduto> = [
  {
    titulo: 'Carrinho Cliente',
    texto: 'Capacidade: 90 litros / 160 litros / 180 litros / 210 litros ',
    imagem: carrinhoAcordeon01,
    id: uuidv4(),
  },
  {
    titulo: 'Carrinho Dupla Cesta',
    texto: 'Capacidade: 90 litros / 100 litros / 120 litros',
    imagem: carrinhoAcordeon02,
    id: uuidv4(),
  },
  {
    titulo: 'Carrinho Gestante',
    texto: 'Capacidade: 90 litros / 120 litros',
    imagem: carrinhoAcordeon03,
    id: uuidv4(),
  },
  {
    titulo: 'Carrinho Atacadista',
    texto: 'Capacidade: 200 litros',
    imagem: carrinhoAcordeon04,
    id: uuidv4(),
  },
  {
    titulo: 'Carrinho Atacadista Prancha',
    texto: 'Capacidade: 300 litros',
    imagem: carrinhoAcordeon05,
    id: uuidv4(),
  },
  {
    titulo: 'Carrinho Bebê Conforto',
    texto: 'Capacidade: 180 litros / 210 litros',
    imagem: carrinhoAcordeon06,
    id: uuidv4(),
  },
]

//Cestinhas:
import cestinha from './imagens/cestodeCompra.png';
import cestinhaAcordeon01 from './imagens/cestinha01_aramada.png';
import cestinhaAcordeon02 from './imagens/cestinha02_deplastico.png';
import cestinhaAcordeon03 from './imagens/cestinha03_comalcaerodinhas.png';
import cestinhaAcordeon04 from './imagens/cestinha04_suportedecestinhaepanfleto.png';
import cestinhaAcordeon05 from './imagens/cestinha05_suportedecestinha.png';
import cestinhaAcordeon06 from './imagens/cestinha06_suportedecestinha.png';

const cestinhaAcordeon: Array<IProduto> = [
  {
    titulo: 'Cestinha Aramada',
    texto: 'Capacidade: 15 litros',
    imagem: cestinhaAcordeon01,
    id: uuidv4(),
  },
  {
    titulo: 'Cestinha de Plástico',
    texto: 'Capacidade: 13 litros',
    imagem: cestinhaAcordeon02,
    id: uuidv4(),
  },
  {
    titulo: 'Cestinha com alça e rodinhas',
    texto: 'Capacidade: 35 litros',
    imagem: cestinhaAcordeon03,
    id: uuidv4(),
  },
  {
    titulo: 'Suporte de Cestinhas e Panfletos',
    texto: '',
    imagem: cestinhaAcordeon04,
    id: uuidv4(),
  },
  {
    titulo: 'Suporte de Cestinha',
    texto: '',
    imagem: cestinhaAcordeon05,
    id: uuidv4(),
  },
  {
    titulo: 'Suporte de Cestinha Duplo',
    texto: '',
    imagem: cestinhaAcordeon06,
    id: uuidv4(),
  }
]

const Servicos = () => {

  return (
    <section id='servicos' aria-label='Serviços oferecidos pela Leme Carrinhos' className={Style.servicos}>
      <h2 className={Style.titulo}>Carrinhos e Cestinhos para o Sucesso do Seu Negócio!</h2>
      <Produto
        imagem={carrinho}
        titulo="Carrinhos de Supermercado"
        texto='Aumente a praticidade e a organização do seu supermercado com carrinhos de compras aramados de alta qualidade.
              Desenvolvidos para oferecer resistência e durabilidade, nossos carrinhos garantem a melhor experiência de compra para seus clientes.
              Descubra a variedade de modelos e escolha o que melhor se adapta às suas necessidades!'
        acordeon={carrinhoAcordeon}
      />
      <Produto
        imagem={cestinha}
        invertido={true}
        titulo='Cestinhos de compras'
        texto='Ofereça aos seus clientes uma experiência de compra ainda mais agradável com nossos cestinhos de compras. 
        Leves e resistentes, nossos cestinhos facilitam a organização das compras e garantem a praticidade que seus clientes buscam. 
        Disponíveis em diversos modelos e cores, nossos cestinhos são a escolha perfeita para complementar a experiência de compra em seu estabelecimento.'
        acordeon={cestinhaAcordeon}
      />
    </section>
  )
};

export default Servicos;
