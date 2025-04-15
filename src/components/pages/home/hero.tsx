"use client";
// import { useTranslations } from 'next-intl';
// import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

export function Hero() {
  //TODO: ADD INTL
  //TODO: ADD ANIMATIONS
  // const t = useTranslations('Home');
  const videoUrl = "https://general.gpmdevelopment.xyz/sustainability.mp4";
  const [isVideoReady, setIsVideoReady] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.load();
  }, []);

  return (
    <div className="md:mt-5 md:px-5">
      <div className="relative flex h-dvh items-center bg-gpmBlue-900 md:mx-auto md:h-[600px] md:max-w-[1400px] md:overflow-hidden md:rounded-lg">
        <div className="absolute z-10 flex w-full justify-center px-5">
          <div className="mx-auto max-w-lg md:max-w-2xl lg:max-w-4xl">
            {/* Título principal */}
            {/* <motion.h1 */}
            <h1
              // initial={{ opacity: 0, y: 20 }}
              // animate={isVideoReady ? { opacity: 1, y: 0 } : {}}
              // transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
              className="animate-in fade-in-15 slide-in-from-bottom-3 mb-4 text-balance text-center text-4xl font-bold leading-[1.125] tracking-tight text-white md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
              style={{ willChange: "opacity, transform" }}
            >
              {/* {t('hero')} */}
              Impulsamos la prosperidad sostenible
            </h1>
            {/* Subtítulo con palabras clave estilizadas */}
            {/* <motion.p */}
            <p
              // initial={{ opacity: 0, y: 20 }}
              // animate={isVideoReady ? { opacity: 1, y: 0 } : {}}
              // transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
              className="mx-auto max-w-xl text-balance text-center text-lg font-medium leading-snug text-white md:max-w-xl md:text-xl lg:max-w-2xl lg:text-2xl"
            >
              {/* {t.rich('heroSub', {
                innovative: (chunks) => (
                  <span className={`${caslon.className} italic`}>{chunks}</span>
                ),
                tailored: (chunks) => (
                  <span className={`${caslon.className} italic`}>{chunks}</span>
                ),
              })} */}
              Afrontamos los grandes desafíos globales con soluciones{" "}
              <span className="font-caslon italic">innovadoras</span> y{" "}
              <span className="font-caslon italic">adaptadas</span> al
              territorio
            </p>
          </div>
        </div>
        {/* Video de fondo */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-0 transition-opacity duration-500"
          controls={false}
          preload="auto"
          onCanPlay={(e) => {
            e.currentTarget.classList.add("opacity-100");
            setIsVideoReady(true);
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay oscuro para mejorar la legibilidad del texto */}
        <div className="absolute left-0 top-0 h-full w-full bg-[rgb(8,8,8)] opacity-25" />
      </div>
    </div>
  );
}

export default Hero;
