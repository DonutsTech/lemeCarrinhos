'use client';
import Image from 'next/image';
import Style from './Banner.module.scss';
import logo from '@public/assets/logoOk.svg';


const Banner = () => {

  return (
    <section aria-label='Banner mostrando uma mulher andando no supermercado' className={Style.banner}>
      <video
        autoPlay = {true}
        muted = {true}
        loop = {true}
        controls={false}
        preload="auto"
        className={Style.videoBanner}
      >
        <source src="assets/video/videoHome.mp4" type='video/mp4'/>
        Seu navegador não suporta vídeos.
      </video>
    <div className={Style.overlay} />
    <div className={Style.content}> 
      <Image src={logo} alt='Logo da Leme Carrinhos' className={Style.logo} />
      <p >
      Carrinhos, cestos e acessórios que transformam seu negócio e não te deixa na mão!
      </p>
    </div>
    </section>
  )
};

export default Banner;
