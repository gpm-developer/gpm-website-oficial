import Image from "next/image";
import Link from "next/link";

import { SectionContainer } from "@/components/layout/section-container";

export const fields = [
  {
    title: "Ciudades y territorios sostenibles y seguros.",
    description:
      "Especializada en obras civiles y edificación, destacando movimientos de tierras, urbanizaciones, viales, obras hidráulicas, industriales.",
    company: "Pérez Moreno S.A.U.",
    image: "https://general.gpmdevelopment.xyz/perez-moreno.webp",
    fieldLogo: "/logos/pérez-moreno.svg",
    href: "/negocios/construccion",
  },
  {
    title: "Turismo responsable con las comunidades y el territorio.",
    description:
      "Con 6 alojamientos en Gran Canaria y Lanzarote, y Aqualava WaterPark, apuesta por un turismo responsable y sostenible.",
    company: "Relaxia Resorts, S.L.U.",
    image: "https://general.gpmdevelopment.xyz/relaxia-x.webp",

    fieldLogo: "/logos/relaxia.svg",
    href: "/negocios/turismo",
  },
  {
    title: "Innovación en soluciones de hábitat y bienestar.",
    description:
      "Nuestra promotora inmobiliaria ofrece viviendas, locales y garajes de calidad, respaldados por el Grupo Pérez Moreno.",
    company: "Solinca S.A.U.",
    image: "https://general.gpmdevelopment.xyz/perez-moreno-z.webp",

    fieldLogo: "/logos/solinca.svg",
    href: "/negocios/promocion-inmobiliaria",
  },
  {
    title: "Economía circular centrada en energía y residuos.",
    description:
      "Especializada en jardinería, zonas verdes, limpieza viaria, residuos, energías renovables y economía circular.",
    image: "https://general.gpmdevelopment.xyz/ayagaures-medioambiente-s.webp",
    company: "Ayagaures Medioambiente S.A.U.",
    fieldLogo: "/logos/ayagaures-medioambiente.svg",
    href: "/negocios/medioambiente",
  },
];

export const ods = [
  {
    id: "06",
    description: "Agua limpia y saneamiento",
    image: "goal-06.png",
    href: "https://www.un.org/sustainabledevelopment/es/water-and-sanitation/",
  },
  {
    id: "07",
    description: "Energía asequible y no contaminante",
    image: "goal-07.png",
    href: "https://www.un.org/sustainabledevelopment/es/energy/",
  },
  {
    id: "08",
    description: "Trabajo decente y crecimiento económico",
    image: "goal-08.png",
    href: "https://www.un.org/sustainabledevelopment/es/economic-growth/",
  },
  {
    id: "09",
    description: "Ciudades y comunidades sostenibles",
    image: "goal-09.png",
    href: "https://www.un.org/sustainabledevelopment/es/infrastructure/",
  },

  {
    id: "11",
    description: "Ciudades y comunidades sostenibles",
    image: "goal-11.png",
    href: "https://www.un.org/sustainabledevelopment/es/cities/",
  },
  {
    id: "12",
    description: "Producción y consumo responsables",
    image: "goal-12.png",
    href: "https://www.un.org/sustainabledevelopment/es/sustainable-consumption-production/",
  },
  {
    id: "13",
    description: "Acción por el clima",
    image: "goal-13.png",
    href: "https://www.un.org/sustainabledevelopment/es/climate-change-2/",
  },
  {
    id: "15",
    description: "Vida de ecosistemas terrestres",
    image: "goal-15.png",
    href: "https://www.un.org/sustainabledevelopment/es/biodiversity/",
  },
];

export function Fields() {
  return (
    <SectionContainer>
      <h2 className="mb-6 max-w-2xl text-balance text-start text-3xl font-bold tracking-tight text-gpmBlue-900 md:mb-8 md:text-4xl">
        Conoce nuestras áreas
      </h2>
      <FieldsList />
      <OdsList />
    </SectionContainer>
  );
}

function FieldsList() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {fields.map((field) => (
        <Link
          key={field.company}
          className="flex flex-col rounded-lg border border-layout-border bg-layout-foreground shadow-sm transition-transform duration-200 hover:-translate-y-1.5"
          href={field.href}
        >
          <div className="relative mx-1 mt-1 h-64 overflow-hidden rounded-md lg:h-72">
            <Image
              fill
              alt={`imagen de ${field.title}`}
              className="object-cover"
              sizes="100vw"
              src={field.image}
            />
            <Image
              alt={`logo de ${field.company}`}
              className="absolute bottom-1 left-1 h-24 w-24 rounded-md border border-layout-border bg-layout-foreground object-contain md:h-28 md:w-28"
              height={200}
              src={field.fieldLogo as string}
              width={200}
            />
          </div>
          <div className="space-y-2 p-6 md:p-8">
            <h2 className="line-clamp-2 text-pretty text-start text-lg font-bold leading-tight tracking-tight text-gpmBlue-900 md:text-xl md:leading-tight">
              {`${field.title}`}
            </h2>
            <div>
              <p className="line-clamp-4 h-full text-pretty text-start">
                {`${field.description}`}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function OdsList() {
  return (
    <ul className="mt-3 grid w-full grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3">
      {ods.map((ods, _) => (
        <li key={ods.id} className="overflow-hidden rounded-md">
          <a href={ods.href} rel="noreferrer" target="_blank">
            <Image
              alt={`${ods.id} - ${ods.description}`}
              height={300}
              src={`https://general.gpmdevelopment.xyz/${ods.image}`}
              width={300}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
