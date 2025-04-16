import { Scale } from "lucide-react";
import Image from "next/image";
import React from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionContainer } from "@/components/layout/section-container";
import { dateFormatter } from "@/utils/common/date-formatter";

interface EthicalCode {
  title: string;
  href: string;
}

const ethicalCode = [
  {
    title: "Política de Cumplimiento y Prevención de Riesgos Penales",
    href: "",
  },
  {
    title: "Código de Conducta",
    href: "",
  },
  {
    title:
      "Procedimiento del Sistema Interno de Información y Protección al Denunciante",
    href: "",
  },
  {
    title:
      "Política del Sistema Interno de Información y Protección al Denunciante",
    href: "",
  },
  {
    title: "Política Anticorrupción",
    href: "",
  },
  {
    title: "Canal Ético",
    href: "",
  },
] satisfies EthicalCode[];

function EthicalCodePage() {
  const lastUpdatedDate = new Date("2024-04-10");

  return (
    <PageContainer>
      <SectionContainer>
        <div className="flex flex-col justify-between gap-6 lg:flex-row">
          <div className="flex flex-col lg:block lg:w-1/2">
            <div className="w-fit rounded-md bg-gpmBlue-900 p-3 text-gpmYellow-900">
              <Scale className="size-8 md:size-10" />
            </div>
            <div className="mt-6 w-full space-y-4 lg:mr-8 lg:mt-8 lg:max-w-lg">
              <h1 className="text-balance text-start text-3xl font-bold tracking-tight text-gpmBlue-900 md:text-4xl">
                Código Ético
              </h1>
              <p className="text-pretty text-start">
                En <span className="font-semibold">Grupo Pérez Moreno</span>,
                nuestro código ético refleja nuestro compromiso con la
                <span className="font-semibold"> integridad</span>, la
                <span className="font-semibold"> transparencia </span> y la
                <span className="font-semibold"> responsabilidad social</span>,
                valores que inspiran nuestras acciones y definen nuestra cultura
                empresarial. Creemos firmemente en construir un entorno basado
                en el respeto mutuo y la confianza.
              </p>
            </div>
          </div>
          {/**
           * Right (IMAGE)
           */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-md md:h-[350px] lg:mt-0 lg:h-[400px] lg:w-1/2">
            <Image
              fill
              alt="imagen representativa del código ético del <span>Grupo Pérez Moreno</span>"
              className="object-cover"
              src="https://general.gpmdevelopment.xyz/canal-etico-s.webp"
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <h2 className="mb-4 text-2xl font-semibold text-gpmBlue-900">
          Guías y Políticas Éticas del Grupo Pérez Moreno
        </h2>
        <ul className="grid grid-cols-1 gap-1 rounded-md bg-layout-foreground p-1 shadow-sm lg:grid-cols-2">
          {ethicalCode.map((ec) => {
            return (
              <li
                key={ec.title}
                className="rounded-md border border-transparent bg-cGray-300 transition-colors duration-200 hover:border-gpmBlue-900 hover:bg-gpmBlue-300"
              >
                <a
                  className="flex h-full items-center gap-3 text-pretty p-4 text-base font-medium text-gpmBlue-900"
                  href={ec.href}
                >
                  {ec.title}
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mt-3 text-center text-sm md:text-end">
          {dateFormatter(lastUpdatedDate.toDateString())}
        </p>
      </SectionContainer>
    </PageContainer>
  );
}

export default EthicalCodePage;
