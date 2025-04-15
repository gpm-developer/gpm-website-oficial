import {GPMLogo} from "@/components/logos/gpm-logo";
import {GPMLogotype} from "@/components/logos/gpm-logotype";

export default function Home() {
  const GPM = "Grupo Pérez Moreno";

  return (
    <div className="p-4">
      <h1 className="font-caslon text-5xl italic text-blue-700">{GPM}</h1>
      <p className="mt-4 text-sm text-neutral-400">Página Oficial del Grupo Pérez Moreno</p>
      <p className="text-gpmBlue-900/50 font-black">TESTING COLORS</p>
      <p className="text-gpmYellow-700">TESTING COLORS</p>
      <hr />
      <div className="bg-red-100">
        <GPMLogo height={300} />
      </div>
      <div className="bg-blue-100">
        <GPMLogotype height={36} />
      </div>

      <div className="bg-layout-foreground border-layout-border my-10 rounded-md border p-6 shadow-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia assumenda voluptates cumque
        blanditiis vero optio cupiditate magni odit debitis neque!
      </div>
      <div>
        BLUE
        <div className="bg-gpmBlue-100 p-5">100</div>
        <div className="bg-gpmBlue-200 p-5">200</div>
        <div className="bg-gpmBlue-300 p-5">300</div>
        <div className="bg-gpmBlue-400 p-5">400</div>
        <div className="bg-gpmBlue-500 p-5">500</div>
        <div className="bg-gpmBlue-600 p-5">600</div>
        <div className="bg-gpmBlue-700 p-5">700</div>
        <div className="bg-gpmBlue-800 p-5">800</div>
        <div className="bg-gpmBlue-900 p-5">900</div>
        <div className="bg-gpmBlue-950 p-5">950</div>
      </div>
      <div>
        BLUE
        <div className="bg-gpmYellow-100 p-5">100</div>
        <div className="bg-gpmYellow-200 p-5">200</div>
        <div className="bg-gpmYellow-300 p-5">300</div>
        <div className="bg-gpmYellow-400 p-5">400</div>
        <div className="bg-gpmYellow-500 p-5">500</div>
        <div className="bg-gpmYellow-600 p-5">600</div>
        <div className="bg-gpmYellow-700 p-5">700</div>
        <div className="bg-gpmYellow-800 p-5">800</div>
        <div className="bg-gpmYellow-900 p-5">900</div>
        <div className="bg-gpmYellow-950 p-5">950</div>
      </div>
      <div>
        GRAY
        <div className="bg-cGray-100 p-5">100</div>
        <div className="bg-cGray-200 p-5">200</div>
        <div className="bg-cGray-300 p-5">300</div>
        <div className="bg-cGray-400 p-5">400</div>
        <div className="bg-cGray-500 p-5">500</div>
        <div className="bg-cGray-600 p-5">600</div>
        <div className="bg-cGray-700 p-5">700</div>
        <div className="bg-cGray-800 p-5">800</div>
        <div className="bg-cGray-900 p-5">900</div>
        <div className="bg-cGray-950 p-5">950</div>
      </div>
    </div>
  );
}
