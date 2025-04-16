"use client";
import React, { useState } from "react";
import { BookOpen, Handshake, Leaf, Scale } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { SectionContainer } from "@/components/layout/section-container";
import BentoBlock from "@/components/bento-block";

const history = {
  title: "Historia",
  description:
    "En 1968, nació la constructora Pérez Moreno, que marcó el inicio de una historia de compromiso, excelencia y visión. En 2002, los hermanos Domingo, Basilio y Pedro Pérez Moreno fundaron el actual Grupo Pérez Moreno, cimentado en valores fundamentales como la honradez, la seriedad y la profesionalidad.",
  href: "/grupo/historia",
  image: "https://general.gpmdevelopment.xyz/1967.webp",
};

const responsability = {
  title: "Responsabilidad Social",
  description:
    "Nuestra estrategia empresarial refleja un firme compromiso con la calidad, respaldado por la profesionalidad de nuestro equipo humano.Creemos en la importancia de preservar el medio ambiente",
  href: "/grupo/responsabilidad",
  image: "https://general.gpmdevelopment.xyz/responsabilidad-social-s.webp",
};

const commitment = {
  title: "Calidad y medioambiente",
  description:
    "Asumimos con responsabilidad nuestro compromiso con la calidad y el medioambiente, consolidado a través de nuestro Sistema de Gestión Integrado. Este compromiso está reflejado en nuestra Política de Calidad y Ambiental",
  href: "/grupo/calidad",
  image: "https://general.gpmdevelopment.xyz/calidad-medioambiente-s.webp",
};

const ethicalCode = {
  title: "Código ético",
  description:
    "Nuestro código ético refleja nuestro compromiso con la integridad, la transparencia y la responsabilidad social, valores que inspiran nuestras acciones y definen nuestra cultura empresarial",
  href: "/grupo/codigo-etico",
  image: "https://general.gpmdevelopment.xyz/canal-etico-s.webp",
};

const imageBlock = {
  src: "https://dummyimage.com/600x600/fff/ccc",
  alt: "Imagen representativa del Grupo Pérez Moreno",
};

export function CompanyAbout() {
  const [currentImage, setCurrentImage] = useState<string>("default");

  const defaultImage = "https://dummyimage.com/600x600/fff/ccc";

  return (
    <SectionContainer>
      <h2 className="mb-6 max-w-2xl text-start text-3xl font-bold tracking-tight text-gpmBlue-900 md:mb-8 md:text-4xl">
        Sobre nosotros
      </h2>
      <article className="grid h-full w-full grid-flow-dense grid-cols-12 gap-3">
        <History setCurrentImage={setCurrentImage} />
        <Responsability setCurrentImage={setCurrentImage} />
        <Commitment setCurrentImage={setCurrentImage} />
        <ImageBlock currentImage={currentImage} defaultImage={defaultImage} />
        <EthicalCode setCurrentImage={setCurrentImage} />
      </article>
    </SectionContainer>
  );
}

function History({
  setCurrentImage,
}: {
  setCurrentImage: (currentImage: string) => void;
}) {
  return (
    <BentoBlock className="col-span-12 row-span-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1 lg:col-span-7">
      <Link
        className="block p-6 lg:p-8"
        href={history.href}
        onMouseEnter={() => setCurrentImage(history.image)}
        onMouseLeave={() => setCurrentImage("default")}
      >
        <div className="mb-4 inline-block rounded-md bg-gpmBlue-900 p-2 text-gpmYellow-900">
          <BookOpen />
        </div>
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gpmBlue-900 md:text-2xl">
          {history.title}
        </h3>
        <p className="text-base">{history.description}</p>
      </Link>
    </BentoBlock>
  );
}

function Responsability({
  setCurrentImage,
}: {
  setCurrentImage: (currentImage: string) => void;
}) {
  return (
    <BentoBlock className="col-span-12 row-span-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1 lg:col-span-5">
      <Link
        className="block p-6 lg:p-8"
        href={responsability.href}
        onMouseEnter={() => setCurrentImage(responsability.image)}
        onMouseLeave={() => setCurrentImage("default")}
      >
        <div className="mb-4 inline-block rounded-md bg-gpmBlue-900 p-2 text-gpmYellow-900">
          <Handshake />
        </div>
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gpmBlue-900 md:text-2xl">
          {responsability.title}
        </h3>
        <p className="text-base">{responsability.description}</p>
      </Link>
    </BentoBlock>
  );
}

function Commitment({
  setCurrentImage,
}: {
  setCurrentImage: (currentImage: string) => void;
}) {
  return (
    <BentoBlock className="col-span-12 row-span-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1 lg:col-span-5">
      <Link
        className="block p-6 lg:p-8"
        href={commitment.href}
        onMouseEnter={() => setCurrentImage(commitment.image)}
        onMouseLeave={() => setCurrentImage("default")}
      >
        <div className="mb-4 inline-block rounded-md bg-gpmBlue-900 p-2 text-gpmYellow-900">
          <Leaf />
        </div>
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gpmBlue-900 md:text-2xl">
          {commitment.title}
        </h3>
        <p className="text-base">{commitment.description}</p>
      </Link>
    </BentoBlock>
  );
}

function EthicalCode({
  setCurrentImage,
}: {
  setCurrentImage: (currentImage: string) => void;
}) {
  return (
    <BentoBlock className="col-span-12 row-span-3 cursor-pointer transition-transform duration-200 hover:-translate-y-1 lg:col-span-4">
      <Link
        className="block p-6 lg:p-8"
        href={ethicalCode.href}
        onMouseEnter={() => setCurrentImage(ethicalCode.image)}
        onMouseLeave={() => setCurrentImage("default")}
      >
        <div className="mb-4 inline-block rounded-md bg-gpmBlue-900 p-2 text-gpmYellow-900">
          <Scale />
        </div>
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gpmBlue-900 md:text-2xl">
          {ethicalCode.title}
        </h3>
        <p className="text-base">{ethicalCode.description}</p>
      </Link>
    </BentoBlock>
  );
}

function ImageBlock({
  defaultImage,
  currentImage,
}: {
  defaultImage: string;
  currentImage: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage}
        animate={{ opacity: 1 }}
        className="relative col-span-12 row-span-3 hidden overflow-hidden rounded-md border border-layout-border bg-layout-foreground p-0 shadow-sm lg:col-span-3 lg:block"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Image
          fill
          alt={imageBlock.alt}
          className="absolute h-full w-full object-cover"
          sizes="(min-width: 768px) 25vw, 100vw"
          src={currentImage !== "default" ? currentImage : defaultImage}
        />
      </motion.div>
    </AnimatePresence>
  );
}
