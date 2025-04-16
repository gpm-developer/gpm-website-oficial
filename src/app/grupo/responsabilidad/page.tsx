import { Handshake } from "lucide-react";
import Image from "next/image";
import React from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionContainer } from "@/components/layout/section-container";

const nonFinancialState = [
  {
    year: "2018",
    pdfURL: "",
  },
  {
    year: "2019",
    pdfURL: "",
  },
  {
    year: "2020",
    pdfURL: "",
  },
  {
    year: "2021",
    pdfURL: "",
  },
  {
    year: "2022",
    pdfURL: "",
  },
  {
    year: "2023",
    pdfURL: "",
  },
];

function ResponsabilityPage() {
  return (
    <PageContainer>
      <SectionContainer>
        <div className="flex flex-col justify-between gap-6 lg:flex-row">
          <div className="flex flex-col lg:block lg:w-1/2">
            <div className="w-fit rounded-md bg-gpmBlue-900 p-3 text-gpmYellow-900">
              <Handshake className="size-8 md:size-10" />
            </div>
            <div className="mt-6 w-full space-y-4 lg:mr-8 lg:mt-8 lg:max-w-lg">
              <h1 className="text-balance text-start text-3xl font-bold tracking-tight text-gpmBlue-900 md:text-4xl">
                Responsabilidad social
              </h1>
              <p className="text-pretty text-start">
                En el <span className="font-semibold">Grupo Pérez Moreno </span>
                nuestra estrategia empresarial refleja un firme compromiso con
                la calidad, respaldado por la profesionalidad de nuestro equipo
                humano. Creemos en la importancia de preservar el medio
                ambiente, promoviendo políticas responsables que priorizan la
                seguridad laboral en cada actividad que realizamos y en cada
                proyecto que emprendemos.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-md md:h-[350px] lg:mt-0 lg:h-[400px] lg:w-1/2">
            <Image
              fill
              alt="imagen representativa de la responsabilidad social del Grupo Pérez Moreno"
              className="object-cover"
              src="https://general.gpmdevelopment.xyz/responsabilidad-social-s.webp"
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className="grid grid-cols-12 lg:gap-16">
          <div className="col-span-full lg:col-span-7">
            <h2 className="text-3xl font-medium tracking-tight text-gpmBlue-900/50 md:text-4xl">
              Más de 50 años de experiencia, avaladas por la
              <span className="font-caslon italic"> escelencia</span>.
            </h2>
            <hr className="my-8 md:my-10" />
            <div className="space-y-10 md:space-y-12">
              <div className="space-y-3">
                <p className="text-pretty">
                  El compromiso que asumimos hace más de cinco décadas ha sido
                  reconocido por <span className="font-semibold">APPLUS</span>,
                  líder en certificación de calidad empresarial. Aspectos
                  fundamentales como la organización, la optimización de
                  recursos, la modernización y la atención a retos sociales son
                  los pilares que guían a cada persona que forma parte del
                  Grupo.
                </p>
                <p className="text-pretty">
                  Nuestro objetivo es claro,{" "}
                  <span className="font-semibold">
                    perdurar de manera sostenible y con excelencia
                  </span>
                  , manteniéndonos siempre abiertos a nuevas oportunidades que
                  nos permitan mejorar. Este enfoque significa trabajar con
                  dedicación para honrar el legado de nuestros fundadores y
                  transmitirlo con orgullo a las futuras generaciones,
                  comprometidos con la responsabilidad social y medioambiental.
                  <span className="font-semibold" />
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gpmBlue-900">
                  Excelencia por encima de la grandeza
                </h2>
                <p className="text-pretty">
                  En el{" "}
                  <span className="font-semibold">Grupo Pérez Moreno</span>, no
                  buscamos ser los más grandes, sino los mejores. Para ello,
                  respetamos los factores externos, generamos valor de manera
                  sostenible y nos anticipamos a los desafíos empresariales y
                  sociales del futuro. La innovación forma parte de nuestro ADN,
                  gracias a la implementación de herramientas de conocimiento
                  que fortalecen todas nuestras áreas de actuación.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gpmBlue-900">
                  Compromiso con la comunidad
                </h2>
                <div className="space-y-3">
                  <p className="text-pretty">
                    Nuestra sensibilidad social y vocación de servicio nos
                    llevan a colaborar activamente con la comunidad. Apoyamos
                    asociaciones vecinales, ayudamos a sectores vulnerables y
                    gestionamos instalaciones deportivas municipales,
                    promoviendo el deporte autóctono canario como una muestra
                    más de nuestro compromiso con las tradiciones locales.
                  </p>
                  <p className="text-pretty">
                    Además, colaboramos con fundaciones que trabajan para
                    mejorar la calidad de vida de las personas, impulsamos
                    eventos culturales y de ocio en diversos municipios, y
                    contribuimos a la rehabilitación del patrimonio histórico y
                    artístico. En el{" "}
                    <span className="font-semibold">Grupo Pérez Moreno</span>,
                    cada acción, cada proyecto y cada colaboración están
                    orientados a construir un futuro más próspero y sostenible.
                    Nuestro compromiso es con las personas, el medio ambiente y
                    la excelencia en cada uno de los desafíos que enfrentamos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-10 h-fit rounded-lg border border-layout-border bg-layout-foreground p-1 shadow-sm lg:sticky lg:top-20 lg:col-span-5 lg:mt-0">
            <div className="mb-1 rounded-md border-b border-layout-border bg-gpmBlue-900 p-4">
              <div className="mb-4 inline-block rounded-sm bg-gpmBlue-300 px-2 py-1 text-xs font-semibold text-gpmBlue-900">
                PDF
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-layout-foreground">
                  Estado de información no financiera
                </h2>
                <p className="text-cGray-600">
                  Grupo Pérez Moreno, S.L y filiales.
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
              {nonFinancialState.map((nfs) => {
                return (
                  <li
                    key={nfs.year}
                    className="rounded-md border border-transparent bg-cGray-300 transition-colors duration-200 hover:border-gpmBlue-900 hover:bg-gpmBlue-300"
                  >
                    <a
                      className="block p-4 text-xl font-medium text-gpmBlue-900"
                      href={nfs.pdfURL}
                    >
                      {nfs.year}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </PageContainer>
  );
}

export default ResponsabilityPage;
