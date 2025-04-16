import { Leaf } from "lucide-react";
import Image from "next/image";

import { SectionContainer } from "@/components/layout/section-container";
import { PageContainer } from "@/components/layout/page-container";
import BentoBlock from "@/components/bento-block";

const certifications = [
  {
    image: "/logos/quality/iso-9001.png",
    url: "",
    altText: "Certificación APPLUS ISO 9001",
  },
  {
    image: "/logos/quality/iso-14001.png",
    url: "",
    altText: "Certificación APPLUS ISO 14001",
  },
  {
    image: "/logos/quality/alojamientos-sostenibles.png",
    url: "",
    altText: "Logo de Alojamientos Sostenibles de Lanzarote",
  },
  {
    image: "/logos/quality/travelife-gold.png",
    url: "",
    altText: "Certificación de Travelife Gold",
  },
];

function QualityPage() {
  return (
    <PageContainer>
      <SectionContainer>
        <div className="flex flex-col justify-between gap-6 lg:flex-row">
          <div className="flex flex-col lg:block lg:w-1/2">
            <div className="w-fit rounded-md bg-gpmBlue-900 p-3 text-gpmYellow-900">
              <Leaf className="size-8 md:size-10" />
            </div>
            <div className="mt-6 w-full space-y-4 lg:mr-8 lg:mt-8 lg:max-w-lg">
              <h1 className="text-balance text-start text-3xl font-bold tracking-tight text-gpmBlue-900 md:text-4xl">
                Calidad y medioambiente
              </h1>
              <p className="text-pretty text-start">
                En el <span className="font-semibold">Grupo Pérez Moreno</span>,
                asumimos con responsabilidad nuestro compromiso con la calidad y
                el medioambiente, consolidado a través de nuestro Sistema de
                Gestión Integrado. Este compromiso está reflejado en nuestra
                Política de Calidad y Ambiental, diseñada por nuestra Direccíon
                y alineada con la Política General de la Empresa, siendo
                aplicada a toda la organización.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-md md:h-[350px] lg:mt-0 lg:h-[400px] lg:w-1/2">
            <Image
              fill
              alt="imagen representativa de la calidad y el medioambiente"
              className="object-cover"
              src="https://general.gpmdevelopment.xyz/calidad-medioambiente-s.webp"
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <h2 className="mb-4 text-balance text-3xl font-medium tracking-tight text-gpmBlue-900/50 md:mb-8 md:text-4xl">
          <span className="font-caslon italic">Sostenibilidad</span> como eje de
          nuestra gestión y proyectos.
        </h2>
        <div className="grid h-full w-full grid-flow-dense grid-cols-12 gap-3">
          <BentoBlock className="col-span-12 grid place-items-center p-6 md:col-span-5 md:p-8">
            <p className="text-pretty">
              Nuestra apuesta por un sistema de gestión eficaz se fundamenta en
              los estándares de excelencia establecidos por las normas UNE-EN
              <span className="font-semibold">ISO 9001</span> y
              <span className="font-semibold"> UNE-EN ISO 14001</span>, que
              guían nuestras operaciones hacia la sostenibilidad y el respeto al
              entorno
            </p>
          </BentoBlock>
          <BentoBlock className="col-span-12 grid place-items-center p-6 md:col-span-7 md:p-8">
            <p className="text-pretty">
              En el <span className="font-semibold">Grupo Pérez Moreno</span>,
              integramos la sostenibilidad en cada proyecto, creando un
              equilibrio entre el progreso económico, la preservación del
              entorno y la promoción cultural. Desde nuestras actividades en la
              construcción hasta la gestión de servicios y alojamientos,
              trabajamos por un futuro en el que la calidad y el respeto al
              medioambiente sean pilares fundamentales.
            </p>
          </BentoBlock>
          <BentoBlock className="col-span-12 grid place-items-center border-orange-600/20 bg-orange-50 px-6 py-8 md:col-span-4 md:px-8 md:py-10">
            <div className="flex items-center gap-2">
              <a
                className="inline-block transition-transform duration-200 hover:scale-105"
                href={certifications[0].url}
              >
                <Image
                  alt={certifications[0].altText}
                  height={100}
                  src={certifications[0].image}
                  width={100}
                />
              </a>
              <a
                className="inline-block transition-transform duration-200 hover:scale-105"
                href={certifications[1].url}
              >
                <Image
                  alt={certifications[1].altText}
                  height={100}
                  src={certifications[1].image}
                  width={100}
                />
              </a>
            </div>
          </BentoBlock>
          <BentoBlock className="col-span-12 grid place-items-center border-green-600/20 bg-green-50 px-6 py-8 md:col-span-4 md:px-8 md:py-10">
            <a
              className="inline-block transition-transform duration-200 hover:scale-105"
              href={certifications[2].url}
            >
              <Image
                alt={certifications[2].altText}
                height={200}
                src={certifications[2].image}
                width={200}
              />
            </a>
          </BentoBlock>
          <BentoBlock className="col-span-12 grid place-items-center border-yellow-600/20 bg-yellow-50 px-6 py-8 md:col-span-4 md:px-8 md:py-10">
            <a
              className="inline-block transition-transform duration-200 hover:scale-105"
              href={certifications[3].url}
            >
              <Image
                alt={certifications[3].altText}
                height={200}
                src={certifications[3].image}
                width={200}
              />
            </a>
          </BentoBlock>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default QualityPage;
