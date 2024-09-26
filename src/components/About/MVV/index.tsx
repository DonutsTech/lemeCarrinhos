"use client"
import { useEffect, useState } from 'react';
import Style from './MVV.module.scss';
import { useMediaQuery } from 'react-responsive';
import MissaoIcon from './imagens/Missao.png';
import VisaoIcon from './imagens/Visao.png';
import ValoresIcon from './imagens/Valores.png';
import Diamante from './imagens/Diamante01.png';
import Image from 'next/image';

const estados = ['Missão', 'Visão', 'Valores'];

const MVV = () => {
  const [currentEstado, setCurrentEstado] = useState<string>(estados[0])
  const mobile = useMediaQuery({ maxWidth: 1100 })

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = estados.indexOf(currentEstado);
      const nextIndex = (currentIndex + 1) % estados.length;
      setCurrentEstado(estados[nextIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentEstado]);

  return (
    <>
      {mobile ? (
        <div className={Style.MVV}>
          {currentEstado === 'Missão' && (
            <div className={Style.card}>
              <h3 className={Style.titulo}>Nosso Propósito:</h3>
              <div className={Style.img}>
                <Image src={MissaoIcon} alt='icon de Missão' />
              </div>
              <p className={Style.textoMVV}>
                Ser a referência em soluções completas para equipamentos de armazenagem e carrinhos,
                reconhecida pela excelência na qualidade, pontualidade e compromisso com a
                sustentabilidade, contribuindo para o sucesso dos nossos clientes e parceiros.
              </p>
            </div>
          )}
          {currentEstado === 'Visão' && (
            <div className={Style.card}>
              <h3 className={Style.titulo}>Nosso Objetivo:</h3>
              <div className={Style.img}>
                <Image src={VisaoIcon} alt='icon de Visão' />
              </div>
              <p className={Style.textoMVV}>
                Tornar-se a empresa líder no mercado de equipamentos de armazenagem e carrinhos,
                expandindo nossa atuação para novos mercados e consolidando nossa marca como
                sinônimo de qualidade, eficiência e responsabilidade social e ambiental.
              </p>
            </div>
          )}
          {currentEstado === 'Valores' && (
            <div className={Style.card}>
              <h3 className={Style.titulo}>Nossos Principios:</h3>
              <div className={Style.img}>
                <Image src={ValoresIcon} alt='icon de Valores' />
              </div>
              <ul>
                <li>
                  Qualidade
                  <Image src={Diamante} className={Style.diamante} alt='Icon deDiamante' />
                </li>
                <li>
                  Pontualidade
                  <Image src={Diamante} className={Style.diamante} alt='Icon deDiamante' />
                </li>
                <li>
                  Sustentabilidade
                  <Image src={Diamante} className={Style.diamante} alt='Icon deDiamante' />
                </li>
                <li>
                  Inovação
                  <Image src={Diamante} className={Style.diamante} alt='Icon deDiamante' />
                </li>
                <li>
                  Ética
                  <Image src={Diamante} className={Style.diamante} alt='Icon deDiamante' />
                </li>
                <li>
                  Responsibilidade social
                  <Image src={Diamante} className={Style.diamante} alt='Icon deDiamante' />
                </li>
                <li>
                  Trabalho em equipe
                  <Image src={Diamante} className={Style.diamante} alt='Icon deDiamante' />
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className={Style.MVVDesk}>
          <div className={Style.card} >
            <h3 className={Style.titulo} >Nosso Popósito:</h3>
            <div className={Style.img}>
              <Image src={MissaoIcon} alt="icon de Missão" />
            </div>
            <p className={Style.textoMVV}>
              Ser a referência em soluções completas para equipamentos de armazenagem e carrinhos,
              reconhecida pela excelência na qualidade, pontualidade e compromisso com a
              sustentabilidade, contribuindo para o sucesso dos nossos clientes e parceiros.
            </p>
          </div>
          <div className={Style.card}>
            <h3 className={Style.titulo}>Nosso Objetivo:</h3>
            <div className={Style.img}>
              <Image src={VisaoIcon} alt='Icone de Visão' />
            </div>
            <p className={Style.textoMVV}>
              Tornar-se a empresa líder no mercado de equipamentos de armazenagem e carrinhos,
              expandindo nossa atuação para novos mercados e consolidando nossa marca como sinônimo
              de qualidade, eficiência e responsabilidade social e ambiental.
            </p>
          </div>
          <div className={Style.card}>
            <h3 className={Style.titulo}>Nossos Principios:</h3>
            <div className={Style.img}>
              <Image src={ValoresIcon} alt='Icone de Visão' />
            </div>
            <ul>
              <li>
                Qualidade
                <Image className={Style.diamante} src={Diamante} alt='icone de Diamante' />
              </li>
              <li>
                Pontualidade
                <Image className={Style.diamante} src={Diamante} alt='icone de Diamante' />
              </li>
              <li>
                Sustentabilidade
                <Image className={Style.diamante} src={Diamante} alt='icone de Diamante' />
              </li>
              <li>
                Inovação
                <Image className={Style.diamante} src={Diamante} alt='icone de Diamante' />
              </li>
              <li>
                Ética
                <Image className={Style.diamante} src={Diamante} alt='icone de Diamante' />
              </li>
              <li>
                Responsabilidade social
                <Image className={Style.diamante} src={Diamante} alt='icone de Diamante' />
              </li>
              <li>
                Trabalho em equipe
                <Image className={Style.diamante} src={Diamante} alt='icone de Diamante' />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MVV;
