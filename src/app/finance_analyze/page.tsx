import { Images } from "athletic/images/images";
import GanttLayout from "./layout";
import Image from "next/image";
import Block from "./block";
import Table from "./table";

export const metadata = {
  title: 'Finance analyze',
  description: 'Finančná analýza for AthletiCore project.',
}

export default async function FinanceAnalyzePlan ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   return (
     <GanttLayout>
      <div className="flex-1 min-w-[300px] flex flex-col gap-y-[15px]">
        <Block title="🔥 Trénuj lepšie. Jedz múdrejšie. Dosahuj výsledky rýchlejšie.">
          <div>Komplexná platforma, ktorá spája tréning, výživu a AI asistenciu pre tvoj progres. Jedna appka. Jedno členstvo. Reálne výsledky.</div>
        </Block>

        <Block title="🏆 Čo prinášame">
          <div>
            <ul>
              <li className="before:content-['•']"> AI tréner pre okamžité odporúčania a analýzy</li>
              <li className="before:content-['•']"> Plány pre všetky vekové a váhové kategórie</li>
              <li className="before:content-['•']"> Osobní tréneri pre prémiových používateľov</li>
              <li className="before:content-['•']"> Výživové odporúčania, vitamíny, doplnky a regenerácia</li>
            </ul>
          </div>
        </Block>

        <Block title="📌 Náš cieľ">
          <div>Rýchla návratnosť po spustení, stabilný rast a rozšírenie platformy o ďalšie AI funkcie. Budujeme smart fitness ekosystém, ktorý dokáže škálovať</div>
        </Block>


          <Table
            title="💰 Počiatočná investícia"
            items={[
              { label: "Položka", value: "Náklady" },
              { label: "Vývoj mobilnej aplikácie", value: "≈ 8 500 €" },
              { label: "Vývoj webu", value: "≈ 8 500 €" },
              { label: "Implementácia AI", value: "≈ 5 000 €" },
              { label: "Testovanie", value: "≈ 1 000 €" },
              { label: "Úvodná reklama", value: "≈ 3 000 – 5 000 €" },
            ]}
            totalValue="≈ 26 000 – 28 000 €"
          />


          <Table
            title="📌 Mesačné náklady"
            items={[
              { label: "Náklad", value: "Cena" },
              { label: "Osobní tréneri", value: "1 200 €" },
              { label: "Hlavný tréner (plány)", value: "850 €" },
              { label: "Technická podpora", value: "1 000 €" },
            ]}
            totalValue="≈ 4 250 € / mesiac"
          />
          <b className="text-center">Pozn.: Náklady sa môžu meniť podľa reálneho využitia a počtu klientov.</b>

        <Table
        title="💳 Tarify"
        items={[
          { label: "Tarifa", value: "Cena" },

          { label: "Basic — plný prístup k AI", value: "15 €" },
          { label: "Premium — osobný tréner + AI", value: "25 €" },
          {
            label:
              "Platinum — AI + strava + analýzy videí + doplnky regenerácia",
            value: "40 €",
          },
          { label: "Bez reklám — doplnok k free verzii", value: "10 €" },
        ]}
        totalLabel="Celkom (voliteľne):"
        totalValue="—"
      />

        <Block title="📢 Reklama & Partnerstvá">
          <div>
            <ul>
              <li className="before:content-['•']">Bannerové reklamy: 500 € / banner</li>
              <li className="before:content-['•']">Video reklamy (30 s): 500 € / video</li>
              <li className="before:content-['•']">Partnerstvo so značkou výživy: ≈ 1 500 € / mesiac</li>
              <li className="before:content-['•']">Odporúčania značky</li>
              <li className="before:content-['•']">Sekcia Market s maržou</li>
            </ul>
          </div>
        </Block>

        <Block title="📈 Predpokladaná mesačná báza používateľov">
          <div>
            <ul>
              <li className="before:content-['•']">Platinum: 100 × 40 €</li>
              <li className="before:content-['•']">Premium: 200 × 25 €</li>
              <li className="before:content-['•']">Basic: 200 × 15 €</li>
              <li className="before:content-['•']">Bez reklám: 100 × 10 €</li>
              <li className="before:content-['•']">Free verzia: ~400 používateľov (monetizácia reklamou)</li>
            </ul>
          </div>
        </Block>

        <Block title="📊 Mesačné príjmy (odhad)">
          <div>
            <ul>
              <li className="before:content-['•']">Predplatné: 13 000 €</li>
              <li className="before:content-['•']">Bannery: ≈ 1 000 €</li>
              <li className="before:content-['•']">Video reklamy: ≈ 2 500 €</li>
              <li className="before:content-['•']">Partnerstvá: ≈ 1 500 €</li>
              <li className="before:content-['•']">Celkové príjmy: ≈ 18 000 € / mesiac</li>
            </ul>
          </div>
        </Block>

        <Block title="💵 Hrubý zisk">
          <div>
            <ul>
              <li className="before:content-['•']">18 000 € – 4 250 € = ≈ 13 750 € / mesiac</li>
            </ul>
          </div>
        </Block>

        <Block title="⚡ Návratnosť investície">
          <div>
            <ul>
              <li className="before:content-['•']">Investícia: ≈ 26 000 – 28 000 €</li>
              <li className="before:content-['•']">Hrubý zisk: ≈ 13 750 € / mesiac</li>
              <li className="before:content-['•']">Návratnosť: ~ 1,9 – 2,0 mesiaca (8 – 9 týždňov)</li>
            </ul>
          </div>
        </Block>


      </div>
     </GanttLayout>
   );
}