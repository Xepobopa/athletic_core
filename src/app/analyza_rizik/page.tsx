import { Images } from "athletic/images/images";
import GanttLayout from "./layout";
import Block from "./block";
import Table from "./table";
import AnalizaRizikLayout from "./layout";

export const metadata = {
  title: 'Analiza rizik',
  description: 'Analiza rizik for AthletiCore project.',
}

export default async function AnalizaRizik ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   return (
     <AnalizaRizikLayout>
      <div className="flex-1 min-w-[300px] flex flex-col gap-y-[15px]">

        <Block 
          title="Technické problémy s AI-asistentom"
          desc="Vývoj umelej inteligencie môže byť zložitejší, než sa plánovalo. Asistent musí fungovať stabilne, správne vyberať tréningy a zohľadňovať individuálne potreby používateľov. Chyby alebo technické zlyhania môžu znížiť dôveru v platformu."
          probabilityScore={2}
          impactScore={3}
          conseq="strata dôvery používateľov, pokles aktivity"
          solution="testovať v počiatočných fázach a zapojiť skúsených odborníkov na umelú inteligenciu"/>

        <Block 
          title="Nedostatok financovania na začiatku"
          desc="Na spustenie sú potrebné investície – vývoj aplikácie, marketing a odmeňovanie trénerov. Ak bude rozpočet nižší, než sa očakáva, niektoré funkcie bude nutné obmedziť alebo odložiť."
          probabilityScore={3}
          impactScore={4}
          conseq="spomalenie vývoja, obmedzená funkčnosť"
          solution="hľadať partnerov a investorov, zaviesť systém predobjednávok a predplatného"
        />

        <Block 
          title="Nízka aktivita používateľov"
          desc="Aj pri úspešnom štarte existuje riziko, že používatelia rýchlo stratia záujem, ak im bude chýbať motivácia, nové výzvy alebo pohodlné rozhranie."
          probabilityScore={2}
          impactScore={4}
          conseq="výrazný pokles počtu aktívnych používateľov"
          solution="pravidelne pridávať obsah, organizovať výzvy (challenges) a zlepšovať používateľské rozhranie"
        />

        <Block 
          title="Právne riziká a ochrana údajov"
          desc="Projekt bude pracovať s osobnými údajmi používateľov – vek, váha, fyzická kondícia. Porušenie nariadení o ochrane údajov (napr. GDPR) môže viesť k pokutám a poškodeniu reputácie."
          probabilityScore={1}
          impactScore={5}
          conseq="strata dôvery používateľov, finančné sankcie"
          solution="dodržiavať štandardy GDPR a používať spoľahlivé systémy na uchovávanie informácií"
        />

        <Block 
          title="Silná konkurencia"
          desc="Na trhu už pôsobia veľkí hráči – Fitify, Freeletics, BetterMe, Nike Training Club. Ak rýchlo implementujú podobné funkcie, môže byť pre používateľov ťažšie vnímať naše výhody."
          probabilityScore={4}
          impactScore={5}
          conseq="zatieňovanie projektu etablovanými konkurentmi"
          solution="rozvíjať jedinečné funkcie a zdôrazniť prepojenie reálnych trénerov s AI-asistentom"
        />

      </div>
     </AnalizaRizikLayout>
   );
}