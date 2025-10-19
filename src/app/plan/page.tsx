import { Images } from "athletic/images/images";
import GanttLayout from "./layout";
import Image from "next/image";
import Block from "./block";

export const metadata = {
  title: 'Business plann',
  description: 'Business plan for AthletiCore project.',
}

export default async function BusinessPlan ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   return (
     <GanttLayout>
      <div className="flex-1 min-w-[300px] flex flex-col gap-y-[15px]">
        <Block title="Aký je náš cieľ?">
          <div>Cieľom projektu Athletic-Core je pomáhať ľuďom zlepšovať svoje zdravie, fyzickú kondíciu a motiváciu prostredníctvom online tréningov a umelej inteligencie.
Do 12 mesiacov od spustenia chceme získať minimálne 1 000 aktívnych používateľov, ktorí budú pravidelne využívať naše tréningové programy a AI asistenta.</div>
        </Block>

        <Block title="Podciele projektu">
          <div>
            <ul>
              <li className="before:content-['➤']"> Získanie trénerov – do 6 mesiacov chceme nadviazať spoluprácu s minimálne 10 kvalifikovanými trénermi, ktorí budú poskytovať online konzultácie a osobné tréningy.</li>
              <li className="before:content-['➤']"> Monetizácia projektu – vytvoriť systém prémiového obsahu s minimálne tromi úrovňami predplatného do konca prvého roka fungovania.</li>
              <li className="before:content-['➤']"> Hľadanie sponzorov – do 18 mesiacov získať aspoň dvoch sponzorov alebo partnerov, ktorí budú pripravení projekt podporiť.</li>
              <li className="before:content-['➤']"> Implementácia AI asistenta – do 9 mesiacov zaviesť inteligentného asistenta, ktorý bude vytvárať individuálne tréningové plány pre používateľov bezplatnej verzie.</li>
            </ul>
          </div>
        </Block>

        <Block title="Prínosy projektu">
          <div>
            <ul>
              <li className="before:content-['➤']"> Zlepšenie fyzického a duševného zdravia používateľov.</li>
              <li className="before:content-['➤']"> Uľahčenie prístupu k odbornému tréningu z pohodlia domova.</li>
              <li className="before:content-['➤']"> Spojenie reálnych trénerov a umelej inteligencie v jednej platforme.</li>
              <li className="before:content-['➤']"> Možnosť rozšírenia projektu na zahraničné trhy.</li>
              <li className="before:content-['➤']"> Vznik komunity aktívnych a motivovaných ľudí.</li>
              <li className="before:content-['➤']"> Získanie cenných skúseností pre budúci rozvoj podnikania.</li>
            </ul>
          </div>
        </Block>

        <Block title="Cieľová skupina">
          <div>
          Našou cieľovou skupinou sú ľudia vo veku od 13 do 75 rokov, ktorí sa zaujímajú o zdravý životný štýl, zlepšenie kondície alebo hľadajú motiváciu začať so športom.
Projekt Athletic-Core je určený pre široké spektrum používateľov – od tínedžerov, ktorí chcú získať základné športové návyky, až po starších ľudí, ktorí si chcú udržať vitalitu a zdravie.
          </div>
        </Block>

        <Block title="Analýza trhu">
          <div>
            Trh online fitnessu v posledných rokoch rastie približne o 20 % ročne. Stále viac ľudí vyhľadáva online riešenia namiesto tradičných tréningov v posilňovniach.
            <br/>
            <b>Používatelia chcú:</b>
            <ul>
              <li className="before:content-['➤']">Neplatiť vysoké sumy za osobných trénerov.</li>
              <li className="before:content-['➤']">mať individuálny prístup a flexibilitu.</li>
              <li className="before:content-['➤']">Vyzerať lepšie a cítiť podporu komunity.</li>
            </ul>
          </div>
        </Block>

        <Block title="Konkurencia">
          <div>
            Na trhu pôsobí viacero podobných aplikácií, ako <b>Fitify, Freeletics, BetterMe</b> či <b>Nike Training Club</b>.
            <br />
            Projekt <b>Athletic-Core</b> sa však od konkurencie odlišuje:
            <ul>
              <li className="before:content-['➤']">Kombináciou reálnych trénerov a AI asistenta.</li>
              <li className="before:content-['➤']">Osobnými plánmi aj pre používateľov bez predplatného.</li>
              <li className="before:content-['➤']">Dôrazom na komunitu a motiváciu (výzvy, zdieľanie progresu).</li>
              <li className="before:content-['➤']">Jednoduchým používateľským rozhraním a dostupnosťou pre všetkých.</li>
            </ul>
          </div>
        </Block>

        <Block title="Využitie AI">
          <div>
            Umelá inteligencia v projekte <b>Athletic-Core</b> slúži na tvorbu 
            <b> individuálnych tréningových a výživových plánov</b>, pretože na webe uvádzame len všeobecné informácie.
            <br />
            <b>AI agent</b> pomáha prispôsobiť odporúčania každému používateľovi osobitne.
          </div>
        </Block>
      </div>
     </GanttLayout>
   );
}