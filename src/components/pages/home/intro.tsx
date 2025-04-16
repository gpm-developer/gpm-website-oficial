import { SectionContainer } from "@/components/layout/section-container";
import { GPMLogo } from "@/components/logos/gpm-logo";

export function Intro() {
  return (
    <SectionContainer>
      <div className="grid grid-cols-12 items-center">
        <div className="order-2 col-span-full mt-8 lg:order-1 lg:col-span-8 lg:mt-0">
          <div className="text-gpmBlue flex flex-col gap-2 text-balance text-center text-4xl font-bold tracking-tight text-gpmBlue-900 md:text-5xl lg:text-start lg:text-6xl">
            <p className="text-gpmBlue-900/50">Expertos en</p>
            <p>Construcción</p>
            <p>Turismo</p>
            <p>Promoción inmobiliaria</p>
            <p>Medioambiente</p>
            <p className="text-gpmBlue-900/50">desde 1968</p>
          </div>
        </div>
        <div className="order-1 col-span-full lg:order-2 lg:col-span-4">
          <GPMLogo className="mx-auto size-[225px] shrink-0 md:size-[300px] lg:size-[350px]" />
        </div>
      </div>
    </SectionContainer>
  );
}
