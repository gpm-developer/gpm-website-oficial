import { BookOpen } from "lucide-react";
import { ReactNode } from "react";
import Image from "next/image";

import { SectionContainer } from "@/components/layout/section-container";
import { PageContainer } from "@/components/layout/page-container";

const history = [
  {
    year: "1957",
    title: "Conexión con Canarias",
    imageURL: "https://dummyimage.com/800x400/fff/ccc",
    description:
      "Domingo Pérez Moreno es nombrado responsable de la delegación de Las Palmas de una empresa nacional. Se establece el vínculo de la familia con Canarias.",
  },
  {
    year: "1965",
    title: "Fundación de la empresa",
    imageURL: "https://dummyimage.com/800x400/fff/aaa",

    description:
      "Inspirados por su experiencia y ganas de progresar, los hermanos Pérez Moreno crean la primera empresa constructora, Basilio Pérez Moreno, enfocada en todo tipo de obras de construcción.",
    keyWords: [{ word: "Basilio Pérez Moreno", type: "ITALIC" }],
  },
  {
    year: "1966",
    title: "Primera obra contratada",
    imageURL: "https://dummyimage.com/800x400/fff/aaa",
    description:
      "Tras años de trabajo y buena reputación, obtienen su primer proyecto en octubre, gracias al apoyo de proveedores, amigos y familiares.",
  },
  {
    year: "1967",
    title: "Génesis del Grupo Pérez Moreno",
    imageURL: "https://general.gpmdevelopment.xyz/1967.webp",
    description:
      "En su primer año, ejecutaron 22 obras por 17 millones de pesetas, abarcando obras públicas y privadas.",
  },
  {
    year: "1968",
    title: "Fundación de la Constructora Pérez Moreno, S.L",
    imageURL: "https://general.gpmdevelopment.xyz/1968.webp",
    description:
      "Los hermanos Pérez Moreno fundan la empresa el 17 de diciembre sobre los valores de sacrificio, trabajo y honradez, pilares que seguirán siendo fundamentales en su evolución.",
  },
  {
    year: "1970",
    title: "Creación de SOLINCA",
    imageURL: "https://general.gpmdevelopment.xyz/1970.webp",
    description:
      "Nace una nueva etapa con la promoción inmobiliaria. Los Juncos I marca el inicio de una nueva era.",
  },
  {
    year: "1973",
    title: "Inicio de la actividad turística",
    imageURL: "https://general.gpmdevelopment.xyz/1973.webp",
    description:
      "Comienza la construcción de Los Girasoles en Playa del Inglés (Gran Canaria), dando paso a la diversificación del negocio, que pasó de un proyecto inmobiliario a un próspero sector turístico.",
  },
  {
    year: "1984",
    title: "Apuesta definitiva en el sector turístico",
    imageURL: "https://general.gpmdevelopment.xyz/1984.webp",
    description:
      "Se define el compromiso de la industria turística con los establecimientos de Relaxia LanzaPlaya (Lanzarote) y, cuatro años más tarde, Relaxia Jandialuz (Fuerteventura).",
  },
  {
    year: "1995",
    title: "Relaxia LanzasurClub",
    imageURL: "https://general.gpmdevelopment.xyz/1995.webp",
    description:
      "Se construye este establecimiento en Playa Blanca, Lanzarote, un establecimiento que se ha convertido en un referente en turismo familiar.",
  },
  {
    year: "2003",
    title:
      "La segunda generación se incorpora a la gestión del Grupo Pérez Moreno",
    imageURL: "https://general.gpmdevelopment.xyz/2003.webp",
    description:
      "Mari Carmen Pérez de Lara, Javier Pérez Zúñiga y Juan Luis Pérez de Armas se suman a la gestión del Grupo Pérez Moreno con el objetivo de consolidar y fortalecer el legado familiar, afianzando así su liderazgo en el sector empresarial de Canarias.",
  },
  {
    year: "2003",
    title: "Nace Relaxia Hotels & Resort",
    imageURL: "https://dummyimage.com/800x400/fff/aaa",
    description:
      "Una nueva etapa que marcó la consolidación en el sector turístico de Canarias. Reconocida con numerosos galardones: el sello 'Hoteles de la Biosfera', Tui Blue Award, 'Distinguidos del Turismo de Lanzarote' y primera cadena canaria en certificar cuatro establecimientos con la 'Q' de Calidad Turística.",
  },
  {
    year: "2006",
    title: "Primera planta fotovoltaica en Lanzarote",
    imageURL: "https://general.gpmdevelopment.xyz/2006.webp",
    description:
      "Relaxia LanzaSur se convirtió en el primer alojamiento de la isla en incorporar energías renovables como la solar, la geotermia y otras fuentes sostenibles.",
  },
  {
    year: "2012",
    title: "Relaxia Lanzasur Club se renueva con Aqualava Waterpark",
    imageURL: "https://general.gpmdevelopment.xyz/20122.webp",
    description:
      "Se inaugura el parque acuático, que destaca por su uso innovador de energías geotérmica, solar y fotovoltaica, consolidándose como referente en la isla. Además, Relaxia amplía su presencia en Lanzarote con la adquisición del Relaxia Olivina.",
  },
  {
    year: "2013",
    title: "Ayagaures Medioambiente se une a la familia del Grupo Pérez Moreno",
    imageURL: "https://general.gpmdevelopment.xyz/2013.webp",
    description:
      "En 2008, el Grupo se convierte en accionista y en 2014 adquiere el 100% de las acciones. Ayagaures Medioambiente ofrece soluciones integrales en jardinería, paisajismo y limpieza urbana, gestión, tratamiento y valorización de residuos y desarrolla proyectos en energías renovables como eólica, fotovoltaica y biogás.",
  },
  {
    year: "2017",
    title: "Nuevas oficinas en Triana",
    imageURL: "https://general.gpmdevelopment.xyz/2017.webp",
    description:
      "El Grupo Pérez Moreno dejó su emblemática sede en Vegueta y se trasladó a nuevas oficinas en la calle Francisco Gourié. En junio de 2019, se inauguraron oficialmente en un acto emotivo, bendecidas por el Padre Fuertes, con la participación de toda la plantilla y las tres ramas de la familia.",
  },
  {
    year: "2019",
    title: "50º aniversario",
    imageURL: "https://general.gpmdevelopment.xyz/2018.webp",
    description:
      "Se conmemoran las cinco décadas de excelencia y crecimiento empresarial. A lo largo del año, se organizaron eventos como conferencias, la Fiesta del Cochino, visitas al Ecoparque Gran Canaria Norte, un emotivo Family Day, con la plantilla y familias, y se reforzó el compromiso social con iniciativas educativas y colaboraciones con la Ciudad San Juan de Dios.",
  },
  {
    year: "2022",
    title: "Relaxia Beverly Park",
    imageURL: "https://general.gpmdevelopment.xyz/2022.webp",
    description:
      "Relaxia adquiere el emblemático Hotel Beverly Park, con una ubicación en primera línea de playa, por 51 millones de euros, lo que supone un total de 1.500 habitaciones en propiedad en las Islas Canarias.",
  },
  {
    year: "2023",
    title: "Renovación de Relaxia Beverly Suites",
    imageURL: "https://general.gpmdevelopment.xyz/2023.webp",
    description:
      "En primera línea de playa, en El Veril, se trata del primer complejo con el distintivo premium: Relaxia Excellence.",
  },
];

function HistoryPage() {
  return (
    <PageContainer>
      <SectionContainer>
        <div className="flex flex-col items-center">
          {/**ICON */}
          <div className="rounded-md bg-gpmBlue-900 p-3 text-gpmYellow-900">
            <BookOpen className="size-8 lg:size-10" />
          </div>
          {/**TEXT */}
          <div className="mx-auto mt-4 max-w-2xl space-y-4 md:mt-6 lg:mt-8">
            <h1 className="text-balance text-center text-3xl font-bold tracking-tight text-gpmBlue-900 lg:text-4xl">
              Historia del Grupo Pérez Moreno
            </h1>
            <p className="text-pretty text-center">
              En 1968, nació la constructora Pérez Moreno, que marcó el inicio
              de una historia de compromiso, excelencia y visión. En 2002, los
              hermanos Domingo, Basilio y Pedro Pérez Moreno fundaron el actual
              Grupo Pérez Moreno, cimentado en valores fundamentales como la
              honradez, la seriedad y la profesionalidad.
            </p>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <Timeline>
          {history.map((history) => {
            return (
              <div
                key={history.title}
                className="group relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse"
              >
                <TimelineYear year={history.year} />
                <TimelineCard
                  description={history.description}
                  imageURL={history.imageURL}
                  keyWords={history.keyWords}
                  title={history.title}
                />
              </div>
            );
          })}
        </Timeline>
      </SectionContainer>
    </PageContainer>
  );
}

export default HistoryPage;

function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-[-4px] before:rounded-md before:bg-gradient-to-b before:from-transparent before:via-gpmYellow-900 before:via-5% before:to-gpmYellow-900 md:before:mx-auto md:before:translate-x-0">
      {children}
    </div>
  );
}

function TimelineYear({ year }: { year: string }) {
  return (
    <div className="flex h-8 w-[50px] shrink-0 items-center justify-center rounded-md border border-layout-foreground bg-gpmYellow-900 font-semibold text-layout-foreground shadow md:order-1 md:group-odd:translate-x-[calc(50%-10px)] md:group-even:-translate-x-[calc(50%-10px)]">
      <time>{year}</time>
    </div>
  );
}

function TimelineCard({
  imageURL,
  title,
  description,
}: Omit<(typeof history)[0], "year">) {
  return (
    <div className="w-[calc(100%-4rem)] rounded-lg border border-layout-border bg-layout-foreground shadow-sm md:w-[calc(50%-2.5rem)]">
      <div className="relative mx-1 mt-1 aspect-[70/40] overflow-hidden rounded-md">
        <Image
          fill
          alt={title}
          className="object-cover"
          sizes="100vw"
          src={imageURL}
        />
      </div>
      <div className="space-y-2 p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gpmBlue-900 md:text-xl">
            {title}
          </h2>
        </div>
        <div>
          <p className="text-[15px]">{description}</p>
        </div>
      </div>
    </div>
  );
}
