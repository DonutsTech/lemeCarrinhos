'use client';

import { IProduto } from '@/types/produto';
import Image from 'next/image';

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import icon from './capacity.svg';

import Style from './Arcodeon.module.scss';
import './swiper.scss';
import { useState } from 'react';
import classNames from 'classnames';


interface Props {
  prop: Array<IProduto>;

}

const Arcodeon = ({ prop }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<string | SwiperClass | null | undefined>(null);

  console.log(prop.length)


  return (
    <div className={Style.acordeon}>
      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={Style.mySwiper}
      >

        {
          prop.map((elemento, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={Style.acordeonSlide}>
                  <Image src={elemento.imagem} width={280} height={280} alt='Imagem do serviço' className={Style.imagem} />
                  <div className={Style.boxTextos}>
                    <h3>{elemento.titulo}</h3>
                    <h4> Detalhes: </h4>
                    <div className={Style.capacidade}>
                      {elemento.capacidade?.map((el, index) => (
                        <div key={index} className={Style.comp}>
                          <Image src={icon} width={20} height={20} alt='Engrenagem icon' className={Style.capacidadeIcon} />
                          <span>{el}</span>
                        </div>
                      ))}
                    </div>
                    <p className={Style.descricao}>{elemento.descricao}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      {
        prop.length > 1 && (
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={prop.length}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={classNames({
              [Style.indexed]: true,
              ['indice']: true,
            })}
          >
            {
              prop.map((elemento, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      className={classNames({
                        [Style.acordeonSlide]: true,
                        ['indiceBox']: true,
                      })}>
                        <Image src={elemento.imagem}
                          alt='Imagem do serviço'
                          style={{
                            width: 'clamp(2.5rem, 2rem + 2.5vw, 5rem)',
                            height: 'clamp(2.5rem, 2rem + 2.5vw, 5rem)',
                            alignSelf: 'center',
                            justifySelf: 'center',
                          }}
                          className={classNames({
                            [Style.imagem]: true,
                            ['indiceImagem']: true,
                          })} />
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        )
      }
    </div>
  )
};

export default Arcodeon;
