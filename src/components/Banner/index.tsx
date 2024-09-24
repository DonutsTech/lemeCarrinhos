'use client';
import Style from './Banner.module.scss';
import bannerVideo from '@/assets/video/videoHome.mp4';


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
        <source src={bannerVideo} type='video/mp4'/>
        Seu navegador não suporta vídeos.
      </video>

    </section>
  )
};

export default Banner;
