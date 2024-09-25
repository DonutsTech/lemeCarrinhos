"use client"
import Slide from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from './Slider.module.scss';
import { useState } from 'react';

import s1 from './imagens/01_slide.jpg';
import s2 from './imagens/02_slide.jpg';
import s3 from './imagens/03_slide.jpg';
import s4 from './imagens/04_slide.jpg';
import s5 from './imagens/05_slide.jpg';
import Image from 'next/image';
import './animationSlider.css';


const Slider = () => { 

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    rotate: 4,
    arrows: false,
    fade: false,
    modifier: 1,
    slideShadows: true,
    depth: 100,
    stretch: 60,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: currentSlide,
    afterChange: (current : number) => setCurrentSlide(current),
      
    }
  

  return (
    <section aria-label='Slide com fotos da Leme Carrinhos' className={Style.slider}>
        <h2>Nossa equipe possui vasta experiência e conhecimento no segmento de carrinhos de supermercado, o que nos permite oferecer soluções personalizadas para cada cliente.  
        </h2>
      <div className={Style.sliderContent}>
        <Slide {...settings} className={Style.boxSlide}>
          <div>
            <Image src={s1} alt='Slide com foto da Leme Carrinhos' 
            className={Style.slide}
            />
          </div>
          <div>
            <Image src={s2} alt='Slide com foto da Leme Carrinhos' 
            className={Style.slide} />
          </div>
          <div>
            <Image src={s3} alt='Slide com foto da Leme Carrinhos' 
            className={Style.slide} />
          </div>
          <div>
            <Image src={s4} alt='Slide com foto da Leme Carrinhos' 
            className={Style.slide} />
          </div>
          <div>
            <Image src={s5} alt='Slide com foto da Leme Carrinhos' 
            className={Style.slide} />
          </div>
        </Slide>
      </div>
    </section>
  )
};

export default Slider;
