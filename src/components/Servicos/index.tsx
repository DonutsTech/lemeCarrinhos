"use client"
import Produto from './Produto';
import Style from './Servicos.module.scss';
import { IProduto } from '@/types/produto';
import { v4 as uuidv4 } from 'uuid';

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
    capacidade: ['90 litros', '160 litros', '180 litros', '210 litros'],
    descricao: 'Reconhecido por sua praticidade e durabilidade, o Carrinho Cliente é a solução ideal para o seu supermercado. Feito com material de alta qualidade, ele garante resistência e robustez, suportando o peso de suas compras com segurança. Com design moderno e funcional, ele oferece a capacidade ideal para atender às necessidades do seu negócio.',
    imagem: carrinhoAcordeon01,
    id: uuidv4(),
  },
  {
    titulo: 'Carrinho Dupla Cesta',
    capacidade: ['90 litros', '100 litros', '120 litros'],
    descricao: 'Imagine a praticidade de seus clientes separarem as compras com mais facilidade e organização! O Carrinho Dupla Cesta é a solução ideal para lojas que atendem clientes que buscam praticidade e funcionalidade em suas compras. Com duas cestas espaçosas empilhadas, ele oferece o dobro da capacidade de carga, ideal para compras maiores e mais eficientes. Organize as compras por categorias, separe produtos frágeis e facilite a vida dos seus clientes! Construído com a qualidade e robustez que você espera, o Carrinho Dupla Cesta garante durabilidade e resistência para um uso intenso no dia a dia.',
    imagem: carrinhoAcordeon02,
    id: uuidv4(),
  },
  {
    titulo: 'Carrinho Gestante',
    capacidade: ['90 litros', '120 litros'],
    descricao: 'O Carrinho Supermercado Gestante é a escolha perfeita para oferecer conforto e praticidade às suas clientes durante as compras. Com design pensado para facilitar a locomoção, ele garante uma experiência agradável e segura, incentivando a permanência na loja e aumentando a probabilidade de retorno. Produzido com tecnologia de ponta, o Carrinho Supermercado Gestante é feito de material resistente e durável, capaz de suportar diferentes temperaturas e ambientes. Essa robustez garante um produto de longa vida útil, ideal para o uso intenso no dia a dia do seu estabelecimento.',
    imagem: carrinhoAcordeon03,
    id: uuidv4(),
  },
  {
    titulo: 'Carrinho Atacadista',
    capacidade: ['200 litros'],
    descricao: 'Sua loja precisa de um aliado para atender às necessidades de compras em grande volume? O Carrinho Atacadista é a resposta! Com capacidade de 200 litros, ele oferece espaço amplo e resistente para carregar produtos de diversos tamanhos e pesos, facilitando a vida dos seus clientes. Recomendado para Supermercados, Atacadistas, Hipermercados, Mercearias Urbanas, Lojas de Conveniência, Lojas Especializadas, Lojas de Departamento e outros segmentos. O Carrinho Atacadista conta com design moderno e funcional, ideal para otimizar a experiência de compra, além de ser versátil, encaixando na maioria dos modelos de carrinhos disponíveis no mercado. Seu movimento fácil e silencioso garante agilidade e conforto durante o uso.',
    imagem: carrinhoAcordeon04,
    id: uuidv4(),
  },
  {
    titulo: 'Carrinho Atacadista Prancha',
    capacidade: ['Cesto 91 litros', 'Peso até 350 kg'],
    descricao: 'O Carrinho Atacadista Prancha é a solução ideal para o transporte de cargas pesadas e volumosas em seu atacado. Com capacidade de até 350 kg e cesto de 91 litros, ele facilita o manuseio de estoques, produtos pesados e grandes volumes, ideal para Atacadistas, grandes supermercados, depósitos, armazéns e outros estabelecimentos que necessitam transportar cargas pesadas. Sua estrutura reforçada em aço aramado garante alta resistência e durabilidade, enquanto as rodas de plástico especial proporcionam movimento suave e silencioso. Com design versátil, ele se encaixa na maioria dos modelos de carrinhos disponíveis no mercado, otimizando a experiência de seus clientes.',
    imagem: carrinhoAcordeon05,
    id: uuidv4(),
  },
  {
    titulo: 'Carrinho Bebê Conforto',
    capacidade: ['180 litros', '210 litros'],
    descricao: 'Levar o bebê para as compras pode ser um desafio? O Carrinho Bebê Conforto foi desenvolvido para tornar esse momento mais tranquilo e agradável para toda a família! Com design especial, ele oferece segurança e conforto para o bebê, permitindo que os pais comprem com tranquilidade e sem preocupações adicionais. Sua estrutura reforçada em aço aramado garante segurança e durabilidade, enquanto as rodas de plástico especial proporcionam um movimento suave e silencioso. O Carrinho Bebê Conforto é compacto e versátil, se encaixando na maioria dos modelos de carrinhos disponíveis no mercado. Com capacidade de 180 ou 210 litros, ele acomoda todas as compras com conforto, ideal para Supermercados, farmácias, lojas de conveniência e outros tipos de instalações comerciais.',
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
    capacidade: ['15 litros'],
    descricao: 'A Cestinha Aramada é a escolha ideal para organizar e transportar seus produtos com praticidade e segurança. Fabricada com arame resistente, ela garante durabilidade e suporta o peso das suas compras. Com capacidade de 15 litros, oferece espaço suficiente para acomodar uma variedade de itens, desde alimentos até produtos de higiene pessoal. Sua estrutura aramada permite a ventilação dos produtos e facilita a visualização dos itens armazenados, enquanto a alça reforçada garante um transporte seguro e confortável. O design moderno e elegante se adapta a diferentes ambientes e necessidades, ideal para sua loja. A alta qualidade dos materiais garante resistência e durabilidade, tornando a Cestinha Aramada um item indispensável para o seu dia a dia.',
    imagem: cestinhaAcordeon01,
    id: uuidv4(),
  },
  {
    titulo: 'Cestinha de Plástico',
    capacidade: ['13 litros'],
    descricao: 'A Cestinha de Plástico é a solução perfeita para facilitar as compras em supermercados, lojas de conveniência e estabelecimentos comerciais. Fabricada em plástico resistente de alta qualidade, ela oferece durabilidade e confiabilidade durante o uso. Com um encaixe perfeito, sem rebarbas ou torções, garante um produto de alta qualidade. Seu design moderno e elegante combina com diversos ambientes comerciais. Ergonômica e leve, a Cestinha de Plástico é fácil de manusear e transportar, tornando a experiência de compras mais confortável. Além disso, ela é empilhável, o que facilita o armazenamento e otimiza o espaço disponível no estabelecimento. Com capacidade de 13 litros, a Cestinha de Plástico é espaçosa o suficiente para acomodar uma quantidade conveniente de itens de compra.',
    imagem: cestinhaAcordeon02,
    id: uuidv4(),
  },
  {
    titulo: 'Cestinha com alça e rodinhas',
    capacidade: ['35 litros'],
    descricao: 'A Cestinha com Alça e Rodinhas é a solução perfeita para compras rápidas e confortáveis em supermercados, padarias, mercearias, farmácias e outros estabelecimentos. Com capacidade de 35 litros, ela oferece espaço suficiente para carregar suas compras do dia a dia com praticidade. Com 4 rodas móveis com giro de 360º, a locomoção se torna ainda mais fácil e ágil. A alça anatômica em ABS garante conforto e segurança durante o transporte. Feita em plástico resistente com acabamento impecável, ela oferece resistência e durabilidade, elevando a experiência de compra dos seus clientes. Ideal para Supermercados, farmácias, lojas de conveniência, livrarias, horti-fruti, lojas de departamentos, entre outros.',
    imagem: cestinhaAcordeon03,
    id: uuidv4(),
  },
  {
    titulo: 'Suporte de Cestinhas e Panfletos',
    capacidade: [],
    descricao: 'O Suporte de Cestinhas e Panfletos é a solução ideal para organizar cestinhas de compras e divulgar promoções e informações importantes aos seus clientes. Com design moderno e funcional, ele otimiza o espaço e facilita o acesso às cestinhas, além de oferecer um local estratégico para a distribuição de panfletos e flyers. Sua estrutura resistente garante durabilidade e segurança, enquanto o design versátil se adapta a diferentes layouts de loja. Ele oferece espaço para acomodar cestinhas e panfletos de forma organizada, além de ser fácil de montar e desmontar para otimizar o espaço. O Suporte de Cestinhas e Panfletos melhora a organização da área de compras, facilita o acesso às cestinhas pelos clientes e aumenta a visibilidade de promoções e informações importantes, criando um ambiente mais convidativo e organizado para seus clientes.',
    imagem: cestinhaAcordeon04,
    id: uuidv4(),
  },
  {
    titulo: 'Suporte de Cestinha',
    capacidade: [],
    descricao: 'O Suporte de Cestinha é um acessório fundamental para organizar e otimizar o espaço em seu estabelecimento. Resistente e versátil, ele é ideal para o empilhamento de cestinhas de compras, garantindo organização e praticidade. Com design simples e funcional, ele se adapta a qualquer tipo de ambiente. Sua estrutura resistente garante durabilidade e segurança, além de ser fácil de usar e manusear, otimizando o tempo e o espaço. O Suporte de Cestinha é a escolha ideal para Supermercados, mercearias, padarias, farmácias, lojas de conveniência, de departamento e muito mais.',
    imagem: cestinhaAcordeon05,
    id: uuidv4(),
  },
  {
    titulo: 'Suporte de Cestinha Duplo',
    capacidade: [],
    descricao: 'O Suporte de Cestinha Duplo é a solução ideal para organizar e otimizar o espaço em seu estabelecimento com o dobro da praticidade. Resistente e versátil, ele é perfeito para o empilhamento de cestinhas de compras, garantindo organização e agilidade. Com design simples e funcional, ele se adapta a qualquer tipo de ambiente. Sua estrutura resistente garante durabilidade e segurança, além de ser fácil de usar e manusear, otimizando o tempo e o espaço. O Suporte de Cestinha Duplo é a escolha ideal para Supermercados, mercearias, padarias, farmácias, lojas de conveniência, de departamento e muito mais.',
    imagem: cestinhaAcordeon06,
    id: uuidv4(),
  }
]

//Estoque:
import estoque from './imagens/carrinhoDeEstoque.png';
import estoqueAcordeon01 from './imagens/carrinhoDeEstoque.png';
import estoqueAcordeon02 from './imagens/estoque02_plataforma.png';
import estoqueAcordeon03 from './imagens/estoque03_platacar.png';
import estoqueAcordeon04 from './imagens/estoque04_abastecedorAlto.png';
import estoqueAcordeon05 from './imagens/estoque05_cuba.png';
import estoqueAcordeon06 from './imagens/estoque06_gaiola.png';


const estoqueAcordeon: Array<IProduto> = [
  {
    titulo: "Carrinho Armazém",
    capacidade: ['250 kg'],
    descricao: 'O Carrinho Armazém é a solução ideal para transportar cargas pesadas com segurança e agilidade em seu armazém, depósito ou centro de distribuição. Com capacidade de até 250 kg, ele oferece robustez e resistência para transportar diversos tipos de materiais, otimizando o fluxo de trabalho e garantindo a segurança de seus colaboradores. Sua estrutura resistente e durável é feita com materiais de alta qualidade, e suas rodas de alta resistência facilitam o transporte em diferentes tipos de piso. O design funcional e prático facilita o manuseio e a organização, tornando-o ideal para Armazéns, depósitos, centros de distribuição, fábricas, indústrias e outros ambientes que exigem o transporte de cargas pesadas.',
    imagem: estoqueAcordeon01,
    id: uuidv4()
  },
  {
    titulo: 'Carrinho Plataforma',
    capacidade: ['De 300kg a 1.000kg'],
    descricao: 'O Carrinho Plataforma é a solução ideal para transportar cargas pesadas com segurança e versatilidade. Com capacidade de carga variável, de 300 kg a 1.000 kg, ele atende às necessidades de diferentes segmentos e aplicações. Sua plataforma resistente e durável é ideal para transportar diversos tipos de materiais. As rodas são personalizáveis, você pode escolher entre pneumáticas, de rodízio ou maciças, de acordo com suas necessidades. O design robusto e funcional facilita o manuseio e garante a segurança, tornando o Carrinho Plataforma ideal para Indústrias, armazéns, depósitos, obras, construção civil, transporte de materiais em geral e muito mais.',
    imagem: estoqueAcordeon02,
    id: uuidv4()
  },
  {
    titulo: 'Carrinho Platacar',
    capacidade: ['De 1.000kg a 10.000kg'],
    descricao: 'O Carrinho Platacar é a solução ideal para transportar cargas pesadas com segurança e praticidade em diversos segmentos. Com capacidade de carga variável, de 1.000 kg a 10.000 kg, ele atende às necessidades de diferentes tipos de operações, como transporte de máquinas, equipamentos, materiais de construção e muito mais. Sua plataforma resistente e durável garante segurança durante o transporte de cargas pesadas. As abas de proteção nas laterais garantem ainda mais segurança, enquanto os rodízios fixos e giratórios de 6” borracha termoplástica oferecem maior mobilidade e estabilidade. O Carrinho Platacar é a escolha ideal para Indústrias, armazéns, depósitos, obras, construção civil, transporte de materiais em geral e muito mais.',
    imagem: estoqueAcordeon03,
    id: uuidv4()
  },
  {
    titulo: 'Carrinho Abastecedor Alto',
    capacidade: ['150 litros '],
    descricao: 'O Carrinho Abastecedor Alto é a solução ideal para abastecer estoques e mercadorias em geral com agilidade e praticidade. Com capacidade de 150 litros e design funcional, ele facilita o transporte de produtos, otimizando o tempo e o fluxo de trabalho. Sua estrutura resistente e durável é feita com materiais de alta qualidade, e suas rodas de fácil manuseio facilitam a locomoção em diferentes tipos de piso. O design alto e funcional facilita o acesso a prateleiras e outros locais altos, tornando o Carrinho Abastecedor Alto ideal para Supermercados, depósitos, armazéns, lojas de varejo, indústrias e outros ambientes que exigem o transporte de produtos de forma eficiente.',
    imagem: estoqueAcordeon04,
    id: uuidv4()
  },
  {
    titulo: 'Carrinho Cuba',
    capacidade: ['180 litros'],
    descricao: 'O Carrinho Cuba é a solução ideal para transportar e organizar alimentos, bebidas e outros produtos com higiene e praticidade. Confeccionado em aço inox escovado e com cuba de polietileno com capacidade de 180L, ele oferece resistência, durabilidade e fácil limpeza. O aço inox escovado é resistente à corrosão e fácil de limpar, ideal para o transporte de alimentos. A cuba de polietileno também é resistente e fácil de limpar. As rodas giratórias de silicone proporcionam maior mobilidade e segurança, enquanto o puxador em tubo de inox garante maior conforto e praticidade durante o transporte. O Carrinho Cuba é a escolha ideal para Supermercados, restaurantes, padarias, açougues, hotéis, hospitais, e outros ambientes que exigem higiene e praticidade no transporte de produtos.',
    imagem: estoqueAcordeon05,
    id: uuidv4()
  },
  {
    titulo: 'Carrinho de abastecedor gaiola',
    capacidade: ['850mm x 600mm x 1000mm', '1150mm x 650mm x 1000mm'],
    descricao: 'O Carrinho de Abastecedor Gaiola c/ Fundo de Madeira é a solução ideal para otimizar o reabastecimento de estoques e gondolas em seu negócio. Desenvolvido para auxiliar as funções do dia a dia de médios e grandes empresas, ele facilita o transporte de produtos, evitando o desgaste de outros tipos de carrinhos não desenvolvidos para este fim. Sua estrutura resistente em gaiola garante a segurança e o transporte de diversos tipos de produtos, e o fundo de madeira oferece maior estabilidade e segurança. O design funcional facilita a organização e o manuseio dos produtos, tornando o Carrinho de Abastecedor Gaiola c/ Fundo de Madeira ideal para Supermercados, depósitos, armazéns, lojas de varejo, indústrias e outros ambientes que exigem o transporte de produtos de forma eficiente.',
    imagem: estoqueAcordeon06,
    id: uuidv4()
  }
]

//Especiais:
import especial from './imagens/carrinhoEspecial.png';
import especialAcordeon01 from './imagens/especial01_carrinhoDeAeroporto.png';

const especialAcordeon: Array<IProduto> = [
  {
    titulo: 'Carrinho de Aeroporto',
    descricao: 'Com design moderno e estrutura resistente, nossos carrinhos de aeroporto facilitam o transporte de suas bagagens com segurança e praticidade. Rodas de alta qualidade e manobrabilidade excepcional para navegar por qualquer tipo de piso. Alças confortáveis e ajustáveis para carregar suas malas com facilidade. Sua viagem será ainda mais tranquila com a praticidade e segurança que nossos carrinhos oferecem.',
    imagem: especialAcordeon01,
    id: uuidv4()
  }
]

//Peças:
import pecas from './imagens/pecas.png';
import pecasAcordeon01 from './imagens/pecas01_rodizios.png';
import pecasAcordeon02 from './imagens/pecas02_rodas.png';
import pecasAcordeon03 from './imagens/pecas03_sapatas.png';
import pecasAcordeon04 from './imagens/pecas04_cabos.png';
import pecasAcordeon05 from './imagens/pecas05_frisos.png';
import pecasAcordeon06 from './imagens/pecas06_suportes.png';

const pecasAcordeon: Array<IProduto> = [
  {
    titulo: 'Rodízios',
    capacidade: ['Espiga 4, 5 e 8', 'Com Freio', 'Rodízio de Placa'],
    descricao: 'Os rodízios são componentes essenciais para a movimentação de equipamentos, garantindo agilidade, segurança e durabilidade em diversos segmentos. Disponíveis em diferentes tamanhos, capacidades de carga, materiais e tipos de rolamentos, como rodízios de placa, com freio e com espiga (4, 5 e 8), eles atendem às necessidades específicas de cada aplicação. Fabricados com materiais de alta qualidade, os rodízios garantem longa vida útil e são projetados para facilitar a instalação e o manuseio. Com os rodízios certos, você terá mais segurança, agilidade e praticidade na movimentação de seus equipamentos, otimizando o fluxo de trabalho e garantindo a eficiência do seu negócio.',
    imagem: pecasAcordeon01,
    id: uuidv4()
  },
  {
    titulo: 'Rodas',
    capacidade: ['Comum, 4 e 5', '6 x 2 e 8 x 2', 'Esteira 4 e 5' ],
    descricao: 'As rodas são componentes essenciais para a movimentação de equipamentos, garantindo agilidade, segurança e durabilidade. Disponíveis em diferentes tamanhos e materiais, com modelos específicos para esteiras (4 e 5), com eixo (4 e 5), e com furação (6 x 2 e 8 x 2), as rodas atendem às necessidades específicas de cada aplicação. Fabricadas com materiais de alta qualidade, as rodas garantem longa vida útil e são projetadas para facilitar a instalação e o manuseio. Com as rodas certas, você terá mais segurança, agilidade e praticidade na movimentação de seus equipamentos, otimizando o fluxo de trabalho e garantindo a eficiência do seu negócio.',
    imagem: pecasAcordeon02,
    id: uuidv4()
  },
  {
    titulo: 'Sapatas',
    capacidade: ['Traseira', 'Placa Fixa', 'Esteira'],
    descricao: 'As sapatas são componentes essenciais para garantir a estabilidade e a segurança de seus equipamentos, evitando deslizamentos e proporcionando maior firmeza. Disponíveis em diferentes modelos, como sapatas traseiras, de placa fixa e para esteiras, elas atendem às necessidades específicas de cada aplicação. Fabricadas com materiais de alta qualidade, as sapatas garantem longa vida útil e são projetadas para facilitar a instalação e o manuseio. Com as sapatas certas, você terá mais segurança, estabilidade e praticidade na movimentação de seus equipamentos, otimizando o fluxo de trabalho e garantindo a eficiência do seu negócio.',
    imagem: pecasAcordeon03,
    id: uuidv4()
  },
  {
    titulo: 'Cabos',
    capacidade: [],
    descricao: 'Os cabos para carrinhos de supermercado são componentes essenciais para garantir a segurança e a durabilidade dos carrinhos, suportando o peso das compras e o uso intenso. Fabricados com materiais de alta qualidade, os cabos garantem longa vida útil e resistência ao desgaste. O design ergonômico proporciona maior conforto e segurança durante o uso, e a instalação é fácil e rápida. Disponíveis em diferentes materiais, cores e tamanhos para atender às necessidades específicas de cada carrinho, os cabos garantem a qualidade e a durabilidade dos seus carrinhos de supermercado.',
    imagem: pecasAcordeon04,
    id: uuidv4()
  },
  {
    titulo: 'Frisos',
    capacidade: [],
    descricao: 'Os frisos para carrinhos são componentes essenciais para proteger a estrutura dos carrinhos, evitando impactos e danos, além de agregar um toque de estilo e personalização. Fabricados com materiais de alta qualidade, os frisos garantem longa vida útil e resistência a impactos e abrasão. Disponíveis em diferentes cores, tamanhos e materiais, eles se adaptam às necessidades específicas de cada carrinho. A instalação é fácil e rápida, e o design moderno oferece um toque de estilo e personalização aos carrinhos. Com os frisos certos, você terá mais segurança e durabilidade para seus carrinhos, além de um visual moderno e personalizado.',
    imagem: pecasAcordeon05,
    id: uuidv4()
  }, 
  {
    titulo: 'Suportes',
    capacidade: [],
    descricao:'Os suportes laterais,  para a segurança e praticidade dos carrinhos, garantindo a fixação de cestas e outros acessórios. Fabricados com materiais de alta qualidade, os suportes laterais garantem longa vida útil e resistência ao desgaste. Projetados para facilitar a instalação e a substituição, eles garantem a fixação segura de cestas e cestos, além de proporcionar maior estabilidade ao carrinho. Disponíveis em diferentes materiais, cores e tamanhos para atender às necessidades específicas de cada carrinho, os suportes laterais garantem a funcionalidade e a durabilidade do seu equipamento.',
    imagem: pecasAcordeon06,
    id: uuidv4()
  }
]

//Reformas e Manutenção:
import servicos from './imagens/reforma.png';
import servicosAcordeon01 from './imagens/servico01_manutencao.png';

const servicosAcordeon: Array<IProduto> = [ 
  {
    titulo: 'Serviços',
    capacidade: ['Montagem', 'desmontagem', 'Solda', 'Alinhamento', 'Banho especial de zincagem Eletrolítica', 'Pintura Epox e Eletroestática', 'Trocas de Rodas e Rodízios', 'Substituição de Logotipos personalizados e protetores', 'Empréstimos de Carrinhos para Decapagem'],
    descricao: 'Frete incluso até 200km de São Paulo',
    imagem: servicosAcordeon01,
    id: uuidv4()
  }
]

const Servicos = () => {

  return (
    <section id='servicos' aria-label='Serviços oferecidos pela Leme Carrinhos' className={Style.servicos}>
      <h2 className={Style.titulo}>Carrinhos e Cestinhos para o Sucesso do Seu Negócio!</h2>
      <Produto
        imagem={carrinho}
        titulo="Carrinhos de Supermercado"
        texto='Aumente a praticidade e a organização do seu supermercado com carrinhos de       compras aramados de alta qualidade.
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
      <Produto
        imagem={estoque}
        titulo='Carrinhos de Estoque'
        texto='Gerenciar o estoque com praticidade e segurança é fundamental para o sucesso do seu negócio. 
        Nossos carrinhos de estoque, robustos e versáteis, são a solução ideal para otimizar o transporte e organização de seus produtos. 
        Descubra a linha completa de carrinhos de estoque e eleve a eficiência do seu dia a dia!'
        acordeon={estoqueAcordeon}
      />
      <Produto
        imagem={especial}
        invertido={true}
        titulo='Carrinhos Especiais'
        texto='Construídos com alta qualidade e tecnologia, nossos carrinhos garantem resistência, durabilidade e segurança. Do transporte de cargas pesadas à organização de ferramentas, temos a solução ideal. Design inovador, ergonomia, segurança e opções de personalização para otimizar seu dia a dia.'
        acordeon={especialAcordeon}
      />
      <Produto 
        imagem={pecas}
        titulo='Pecas'
        texto='Oferecemos uma linha completa de peças para reformas de carrinhos, garantindo que seus equipamentos estejam sempre em perfeito estado de funcionamento. 
        Com peças originais e de alta qualidade, você garante a durabilidade e a segurança de seus carrinhos, prolongando sua vida útil e proporcionando uma experiência de compra impecável para seus clientes.'
        acordeon={pecasAcordeon}
      />
      <Produto 
        imagem={servicos}
        invertido={true}
        titulo='Serviços e Reformas'
        texto='Seu carrinho de compras precisa de um novo visual? 
        Ou talvez precise de um reparo para voltar a funcionar perfeitamente? 
        Conte com nossos serviços de reformas de carrinhos! 
        Utilizando peças originais e mão de obra especializada, devolvemos a vida útil aos seus carrinhos, garantindo segurança, durabilidade e um visual impecável. Sua experiência de compra, e a de seus clientes, será ainda melhor!'
        acordeon={servicosAcordeon}
        
      />
    </section>
  )
};

export default Servicos;
