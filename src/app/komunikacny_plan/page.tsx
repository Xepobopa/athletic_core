import KomunikacnyPlanLayout from "./layout";
import { FootnotesContainer } from "./Legenda";
import { artemAnton, dmytro, pavlo, Stakeholder, sviat } from "./stakeholder";
import { TableSection, Telegram, Timeghost } from "./table";

export const metadata = {
  title: 'Komunikacny plan',
  description: 'Komunikacny plan for AthletiCore project.',
}

export default async function komunikacnyPlan ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   return (
     <KomunikacnyPlanLayout>
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold tracking-wide mb-3">
            Stakeholderi projektu
          </h1>
        </div>
        <Stakeholder {...pavlo} />
        <Stakeholder {...dmytro} />
        <Stakeholder {...artemAnton} />
        <Stakeholder {...sviat} />

        <div className="flex justify-center">
          <h1 className="text-3xl font-bold tracking-wide mb-3">
            Komunikacna matica
          </h1>
        </div>
        <TableSection/>
        <FootnotesContainer 
          left={[
            { label: "↑↑↑", meaning: "Častá komunikácia" },
            { label: "↑↑", meaning: "Stredná komunikácia" },
            { label: "↑", meaning: "Zriedkavá komunikácia" },
          ]}

          right={[
            { image: () => <Telegram/>, meaning: "Telegram" },
            { image: () => <Timeghost/>, meaning: "Timeghost" },
          ]}
        />


     </KomunikacnyPlanLayout>
   );
}