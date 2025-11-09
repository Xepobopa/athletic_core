import PlanKvalityLayout from "./layout";

export const metadata = {
  title: 'Plan kvality',
  description: 'Plan kvality for AthletiCore project.',
}

export default async function AnalizaRizik ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   return (
     <PlanKvalityLayout>
      <div className="max-w-4xl mx-auto px-4 py-4 text-black">
        <h1 className="text-5xl font-bold mb-6 border-b-2 border-black pb-3 uppercase tracking-wide">
          Metriky kvality
        </h1>

        {/* KPI 1 */}
        <section className="space-y-5 mb-12">
          <h2 className="text-4xl font-semibold border-l-4 border-black pl-3">
            KPI 1 — Úroveň spokojnosti používateľov
          </h2>

          <div className="space-y-4 text-xl leading-relaxed">
            <p>
              <strong>Opis:</strong> Tento ukazovateľ vyjadruje, do akej miery
              sú používatelia spokojní s platformou <em>Athletic-Core</em> — jej
              používateľským rozhraním, dizajnom, stabilitou systému, rýchlosťou
              fungovania a efektivitou odporúčaní AI-asistenta.
            </p>

            <p>
              <strong>Cieľová hodnota:</strong> ≥ 90% používateľov je
              spokojných s produktom (hodnotenie 4 alebo 5 z 5) po 6 mesiacoch
              od spustenia.
            </p>

            <div>
              <strong>Metódy merania:</strong>
              <ul className="list-disc list-inside mt-1 ml-3 space-y-1.5">
                <li>Analýza recenzií a hodnotení v App Store a Google Play.</li>
                <li>Online dotazníky v rámci aplikácie.</li>
                <li>Meranie priemerného skóre spokojnosti (NPS).</li>
                <li>Počet sťažností doručených zákazníckej podpore.</li>
              </ul>
            </div>

            <p>
              <strong>Dôvod výberu:</strong> Tento ukazovateľ priamo odráža
              kvalitu používateľskej skúsenosti (UX) a stabilitu systému. Ak je
              úroveň spokojnosti vysoká, znamená to, že produkt je vnímaný
              pozitívne a používatelia sú motivovaní pokračovať v jeho používaní
              alebo ho odporučiť ostatným.
            </p>

            <div>
              <strong>Akcie na dosiahnutie cieľa:</strong>
              <ol className="list-decimal list-inside mt-1 ml-3 space-y-1.5">
                <li>Pravidelný zber spätnej väzby po tréningoch.</li>
                <li>Optimalizácia rýchlosti a stability aplikácie.</li>
                <li>Zavedenie systému odmien za hodnotenia a recenzie.</li>
                <li>Mesačné aktualizácie obsahu (nové plány, výzvy).</li>
              </ol>
            </div>
          </div>
        </section>

        {/* KPI 2 */}
        <section className="space-y-5">
          <h2 className="text-4xl font-semibold border-l-4 border-black pl-3">
            KPI 2 — Úroveň udržania používateľov
          </h2>

          <div className="space-y-4 text-xl leading-relaxed">
            <p>
              <strong>Opis:</strong> Tento ukazovateľ ukazuje percento
              používateľov, ktorí zostávajú aktívni po určitom čase od
              registrácie (napríklad po 30 dňoch). Pre projekt{" "}
              <em>Athletic-Core</em> je to veľmi dôležité, pretože platforma
              funguje na báze predplatného.
            </p>

            <p>
              <strong>Cieľová hodnota:</strong> ≥ 75% používateľov zostáva
              aktívnych 30 dní po registrácii.
            </p>

            <div>
              <strong>Metódy merania:</strong>
              <ul className="list-disc list-inside mt-1 ml-3 space-y-1.5">
                <li>
                  Interná analytika: počet používateľov, ktorí sa prihlásili do
                  systému počas 30 dní.
                </li>
                <li>
                  Porovnanie aktívnych používateľov s celkovým počtom nových
                  registrácií.
                </li>
                <li>
                  Analýza správania používateľov (počet tréningov, zobrazení
                  videí, čas strávený v aplikácii).
                </li>
              </ul>
            </div>

            <p>
              <strong>Dôvod výberu:</strong> Miera udržania (Retention Rate)
              ukazuje lojalitu používateľov a skutočnú hodnotu produktu. Ak
              používatelia zostávajú aktívni, znamená to, že{" "}
              <em>Athletic-Core</em> im pomáha dosahovať výsledky a udržiava ich
              motiváciu.
            </p>

            <div>
              <strong>Akcie na dosiahnutie cieľa:</strong>
              <ol className="list-decimal list-inside mt-1 ml-3 space-y-1.5">
                <li>Týždenné výzvy na zvýšenie motivácie.</li>
                <li>Personalizované pripomienky od AI-asistenta.</li>
                <li>
                  Vizualizácia pokroku (grafy, odznaky, štatistiky v aplikácii).
                </li>
                <li>Systém bonusov pre stálych používateľov.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Testovacie scenáre */}
        <section className="space-y-6 mt-12">
          <h1 className="text-5xl font-bold mb-6 border-b-2 border-black pb-3 uppercase tracking-wide">
            Testovacie scenáre
          </h1>

          {/* Test 1 */}
          <div className="space-y-4 text-xl leading-relaxed">
            <h2 className="text-3xl font-semibold border-l-4 border-black pl-3">
              1. Test registrácie používateľa
            </h2>
            <p>
              <strong>Vstup / Kroky:</strong> 
              Vytvoriť 50 testovacích účtov cez webovú aj mobilnú verziu aplikácie. 
              Overiť, či sa všetky účty vytvárajú bez chýb a bez duplikátov.
            </p>
            <p>
              <strong>Očakávaný výsledok:</strong> 
              Aspoň 98 % registrácií prebehne úspešne a údaje používateľov sa ukladajú správne.
            </p>
            <p>
              <strong>Dôvod testu:</strong> 
              Overiť, že proces registrácie funguje stabilne a bez technických chýb, 
              pretože ide o prvý krok interakcie používateľa s platformou.
            </p>
          </div>

          {/* Test 2 */}
          <div className="space-y-4 text-xl leading-relaxed">
            <h2 className="text-3xl font-semibold border-l-4 border-black pl-3">
              2. Test generovania AI tréningového plánu
            </h2>
            <p>
              <strong>Vstup / Kroky:</strong> 
              Vytvoriť 10 testovacích používateľov s rôznymi cieľmi: chudnutie, 
              naberanie svalov, udržiavanie formy. 
              Pre každého z nich vygenerovať osobný plán od AI asistenta.
            </p>
            <p>
              <strong>Očakávaný výsledok:</strong> 
              Každý používateľ dostane jedinečný plán, ktorý zodpovedá zadaným parametrom 
              (vek, pohlavie, úroveň prípravy, cieľ).
            </p>
            <p>
              <strong>Dôvod testu:</strong> 
              Overiť kvalitu personalizácie, logiku fungovania AI systému 
              a presnosť odporúčaní.
            </p>
          </div>

          {/* Test 3 */}
          <div className="space-y-4 text-xl leading-relaxed">
            <h2 className="text-3xl font-semibold border-l-4 border-black pl-3">
              3. Test stability serverov
            </h2>
            <p>
              <strong>Vstup / Kroky:</strong> 
              Simulovať záťaž 1 000 súčasných požiadaviek na server. 
              Zmerať čas odozvy a sledovať možné chyby alebo stratu dát.
            </p>
            <p>
              <strong>Očakávaný výsledok:</strong> 
              Priemerný čas odozvy nepresiahne 2 sekundy, systém je stabilný 
              a údaje sa nestrácajú.
            </p>
            <p>
              <strong>Dôvod testu:</strong> 
              Overiť spoľahlivosť platformy počas špičkovej záťaže 
              a zaručiť bezproblémové fungovanie pre veľký počet používateľov.
            </p>
          </div>
          
          {/* Test 4 */}
          <div className="space-y-4 text-xl leading-relaxed">
            <h2 className="text-3xl font-semibold border-l-4 border-black pl-3">
              4. Test bezpečnosti a ochrany dát
            </h2>
            <p>
              <strong>Vstup / Kroky:</strong> 
              Zaregistrovať testovacieho používateľa a zadať osobné údaje. 
              Overiť šifrovanie a prístup cez rôzne účty.
            </p>
            <p>
              <strong>Očakávaný výsledok:</strong> 
              Všetky údaje sa prenášajú cez HTTPS, sú uložené šifrovane 
              a neoprávnený prístup nie je možný.
            </p>
            <p>
              <strong>Dôvod testu:</strong> 
              Overiť, že systém spĺňa požiadavky GDPR a zaručuje bezpečnosť 
              osobných údajov používateľov.
            </p>
          </div>

          {/* Test 5 */}
          <div className="space-y-4 text-xl leading-relaxed">
            <h2 className="text-3xl font-semibold border-l-4 border-black pl-3">
              5. Test platobnej funkcie predplatného
            </h2>
            <p>
              <strong>Vstup / Kroky:</strong> 
              Vykonať 20 testovacích transakcií cez Stripe a Apple Pay 
              (úspešné aj zámerne chybné). 
              Overiť správnosť zobrazenia platieb a stavov v profile používateľa.
            </p>
            <p>
              <strong>Očakávaný výsledok:</strong> 
              Všetky úspešné platby sa spracujú správne, chybné transakcie 
              sa odmietnu bez odpočítania peňazí.
            </p>
            <p>
              <strong>Dôvod testu:</strong> 
              Overiť stabilitu platobného systému a predísť finančným chybám 
              alebo stratám.
            </p>
          </div>

          {/* Test 6 */}
          <div className="space-y-4 text-xl leading-relaxed">
            <h2 className="text-3xl font-semibold border-l-4 border-black pl-3">
              6. Test aktivity používateľov (Retention Test)
            </h2>
            <p>
              <strong>Vstup / Kroky:</strong> 
              Vybrať 100 testovacích používateľov a sledovať ich aktivitu 
              počas 30 dní. 
              Analyzovať počet prihlásení, dokončených tréningov 
              a zobrazení obsahu.
            </p>
            <p>
              <strong>Očakávaný výsledok:</strong> 
              Aspoň 75 % používateľov zostáva aktívnych 
              30 dní po registrácii.
            </p>
            <p>
              <strong>Dôvod testu:</strong> 
              Vyhodnotiť úroveň zapojenia používateľov a účinnosť 
              motivačných mechanizmov (pripomienky, výzvy, odznaky, 
              štatistiky pokroku).
            </p>
          </div>

        </section>
      </div>
     </PlanKvalityLayout>
   );
}