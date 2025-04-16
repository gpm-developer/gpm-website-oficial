"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Hero() {
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
            <motion.h1
              animate={isVideoReady ? { opacity: 1, y: 0 } : {}}
              className="animate-in fade-in-15 slide-in-from-bottom-3 mb-4 text-balance text-center text-4xl font-bold leading-[1.125] tracking-tight text-white md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
              initial={{ opacity: 0, y: 20 }}
              style={{ willChange: "opacity, transform" }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
            >
              Impulsamos la prosperidad sostenible
            </motion.h1>
            <motion.p
              animate={isVideoReady ? { opacity: 1, y: 0 } : {}}
              className="mx-auto max-w-xl text-balance text-center text-lg font-medium leading-snug text-white md:max-w-xl md:text-xl lg:max-w-2xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
            >
              Afrontamos los grandes desafíos globales con soluciones{" "}
              <span className="font-caslon italic">innovadoras</span> y{" "}
              <span className="font-caslon italic">adaptadas</span> al
              territorio
            </motion.p>
          </div>
        </div>
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
        <div className="absolute left-0 top-0 h-full w-full bg-[rgb(8,8,8)] opacity-25" />
      </div>
    </div>
  );
}

export default Hero;
