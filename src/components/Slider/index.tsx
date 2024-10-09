"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Style from './Slider.module.scss';
import s1 from './imagens/01_slide.jpg';
import s2 from './imagens/02_slide.jpg';
import s3 from './imagens/03_slide.jpg';
import s4 from './imagens/04_slide.jpg';
import s5 from './imagens/05_slide.jpg';
import Image from 'next/image';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const Slider = () => { 
  return (
    <section aria-label='Slide com fotos da Leme Carrinhos' className={Style.slider}>
        <h2>Nossa equipe possui vasta experiência e conhecimento no segmento de carrinhos de supermercado, o que nos permite oferecer soluções personalizadas para cada cliente.  
        </h2>
      <div className={Style.sliderContent}>
        <Swiper
          slidesPerView={2}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 4,
            stretch: 60,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 0.9,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className={Style.swiper}
          loop={true}
          id='slides'
        >
          <SwiperSlide>
            <Image className={Style['img-slider']} src={s1} alt='Uma mulher está fazendo compras em um supermercado com um homem. Ela tem uma cesta cheia de frutas e legumes, incluindo cenoura e brócolis. O homem está segurando a cesta enquanto ela olha seus itens. Eles estão cercados por outras pessoas na loja, algumas das quais também carregam sacolas ou carrinhos de compras.'  />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={Style['img-slider']} src={s2} alt='Num supermercado bem iluminado, um homem e uma mulher fazem compras juntos. O homem veste uma camisa branca com as mangas arregaçadas até os cotovelos, enquanto a mulher veste uma jaqueta jeans azul por cima de um top de cor clara. Ambos têm carrinhos cheios de mantimentos, incluindo produtos frescos como cenoura e brócolis. Seus sorrisos sugerem que estão gostando da experiência de compra.'  />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={Style['img-slider']} src={s3} alt='Nesta cena vibrante, um homem e uma mulher estão atrás de uma mesa repleta de produtos frescos num mercado ao ar livre. O homem usa chapéu de palha enquanto a mulher está adornada com uma blusa amarela. Eles estão rodeados por uma variedade de frutas e vegetais, incluindo maçãs, laranjas e bananas, que dão um toque de cor ao cenário. Ao fundo, outros compradores podem ser vistos percorrendo as bancas do mercado, aumentando a atmosfera animada. A imagem captura a essência de um dia de mercado movimentado, repleto de produtos frescos e interações animadas.'  />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={Style['img-slider']} src={s4} alt='Uma mulher está sentada em um carrinho de compras, sorrindo e relaxada. Ela está com os pés apoiados na alça do carrinho de compras, aproveitando o tempo na loja.' />
          </SwiperSlide>
          <SwiperSlide>
            <Image className={Style['img-slider']} src={s5} alt='Um jovem empurra um carrinho com uma grande caixa de papelão por uma rua residencial. Ele está vestindo uma camiseta preta e jeans, e a caixa parece ter algum tipo de logotipo ou desenho. O cenário sugere que pode ser final de tarde, dada a iluminação suave e as sombras das casas.' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
};

export default Slider;
