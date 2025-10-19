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
        <h3 className="font-[400] text-[24px] lg:text-[32px] text-center">Business plan</h3>
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

        <h3 className="font-[400] text-[24px] lg:text-[32px] text-center py-[40px]">Štúdie uskutočniteľnosti</h3>

        <Block title="Popis projektu">
          <div>
            Projekt kombinuje <b>online tréningy od kvalifikovaných trénerov</b> s inteligentným <b>AI asistentom</b>, ktorý vytvára individuálne tréningové plány. 
            <br/>
            <b>Platforma ponúka:</b>
            <ul>
              <li className="before:content-['➤']">Prémiový obsah s rôznymi úrovňami predplatného.</li>
              <li className="before:content-['➤']">Bezplatný prístup s personalizovanými plánmi vďaka AI.</li>
              <li className="before:content-['➤']">Komunitu aktívnych používateľov, výzvy a zdieľanie progresu.</li>
              <li className="before:content-['➤']">Jednoduchým používateľským rozhraním a dostupnosťou pre všetkých.</li>
            </ul>
            Cieľovou skupinou sú ľudia vo veku 13–75 rokov, ktorí sa zaujímajú o zdravý životný štýl, zlepšenie kondície alebo hľadajú motiváciu začať so športom. Projekt je odlišný od konkurencie (Fitify, Freeletics, BetterMe, Nike Training Club) kombináciou reálnych trénerov a AI asistenta, osobným prístupom a dôrazom na komunitu.
          </div>
        </Block>

        <Block title="Technická uskutočniteľnosť">
          <div>
            <b>Potrebné technológie:</b>
            <ul>
              <li className="before:content-['➤']">Webová a mobilná aplikácia (iOS, Android).</li>
              <li className="before:content-['➤']">AI asistent pre individuálne tréningové plány.</li>
              <li className="before:content-['➤']">Systém správy obsahu a predplatného.</li>
            </ul>
            <b>Personálne zdroje:</b>
            <ul>
              <li className="before:content-['➤']">Programátori (frontend, backend, AI).</li>
              <li className="before:content-['➤']">Tréneri a obsahoví tvorcovia.</li>
              <li className="before:content-['➤']">Podpora a správa komunity.</li>
            </ul>
            <b>Hodnotenie:</b> Projekt je technicky realizovateľný, ale <b>implementácia AI asistenta bude vyžadovať značné investície do kvalifikovaných programátorov a špecialistov na AI</b>, čo zvýši počiatočné náklady a zložitosť vývoja.
          </div>
        </Block>

        <Block title="Ekonomická uskutočniteľnosť">
          <div>
            <b>Náklady:</b>
            <ul>
              <li className="before:content-['➤']">Vývoj aplikácie (frontend, backend, AI).</li>
              <li className="before:content-['➤']">Marketing a získavanie používateľov.</li>
              <li className="before:content-['➤']">Odmeny pre trénerov a údržba AI.</li>
            </ul>
            <b>Príjmy:</b>
            <ul>
              <li className="before:content-['➤']">Predplatné (3 úrovne).</li>
              <li className="before:content-['➤']">Partnerské a sponzorské príjmy.</li>
            </ul>
            <b>Odhad návratnosti:</b> Cieľ 1 000 aktívnych používateľov počas prvého roka; predpokladaná rentabilita od 12–18 mesiacov po spustení.
          </div>
        </Block>

        <Block title="Právna a organizačná uskutočniteľnosť">
          <div>
            <b>Právne aspekty:</b>
            <ul>
              <li className="before:content-['➤']">Registrácia spoločnosti (s.r.o. alebo živnosť).</li>
              <li className="before:content-['➤']">Licencie pre online tréning a AI.</li>
              <li className="before:content-['➤']">Ochrana osobných údajov (GDPR).</li>
            </ul>
            <b>Organizácia:</b>
            <ul>
              <li className="before:content-['➤']">Projektový manažér, vývojový tím, tréneri.</li>
              <li className="before:content-['➤']">Marketingový tím a podpora používateľov.</li>
            </ul>
            <b>Hodnotenie:</b> Projekt je právne uskutočniteľný pri dodržaní základných regulácií online služieb a ochrany údajov.
          </div>
        </Block>

        <Block title="Riziká a problémy">
          <div>
            <b>Hlavné riziká:</b>
            <ul>
              <li className="before:content-['➤']">Nedostatočný počet používateľov (riešenie: marketing, referral program).</li>
              <li className="before:content-['➤']">Technické problémy s AI asistentom (riešenie: testovanie, pilotná verzia).</li>
              <li className="before:content-['➤']">Konkurencia (riešenie: unikátna kombinácia tréner + AI, komunitné funkcie).</li>
            </ul>
            <b>Záver:</b> Riziká sú riaditeľné a majú jasné stratégie minimalizácie.
          </div>
        </Block>

        <Block title="Plán realizácie projektu">
          <div>
            Projekt Athletic-Core bude realizovaný v niekoľkých fázach:<br/><br/>
            <ul>
              <li className="before:content-['➤']">
                <b>Fáza 1 – Príprava (0–3 mesiace):</b> analýza trhu, detailný plán, nábor programátorov a trénerov.
              </li>
              <li className="before:content-['➤']">
                <b>Fáza 2 – Vývoj aplikácie (3–9 mesiacov):</b> vývoj webovej a mobilnej aplikácie, implementácia AI asistenta, testovanie funkcionalít.
              </li>
              <li className="before:content-['➤']">
                <b>Fáza 3 – Pilotné testovanie (9–10 mesiacov):</b> beta verzia pre vybranú skupinu používateľov, zber spätnej väzby a optimalizácia.
              </li>
              <li className="before:content-['➤']">
                <b>Fáza 4 – Marketing a spustenie (10–12 mesiacov):</b> spustenie platformy pre verejnosť, reklamné kampane, získavanie prvých predplatiteľov.
              </li>
              <li className="before:content-['➤']">
                <b>Fáza 5 – Rozvoj a partnerstvá (12–18 mesiacov):</b> získavanie sponzorov, rozširovanie funkcionalít, expanzia na nové trhy.
              </li>
            </ul>
            Tento plán umožní postupnú realizáciu projektu s dôrazom na kvalitu, spätnú väzbu od používateľov a optimalizáciu AI asistenta.
          </div>
        </Block>


      </div>
     </GanttLayout>
   );
}