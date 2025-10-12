import { Images } from "athletic/images/images";
import SWOTLayout from "./layout";
import Image from "next/image";

export const metadata = {
  title: 'SWOT',
  description: 'SWOT analize for AthletiCore Project.',
}

export default async function SWOT ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   return (
     <SWOTLayout>
      <div className="flex-1 min-w-[300px] flex flex-col justify-center items-center gap-y-[15px]">
        <h3 className="font-[400] text-[24px] lg:text-[32px]">
          <span className="font-bold">SWOT</span> analýza je nástroj na hodnotenie projektu alebo organizácie. Skúma silné stránky 
          (<span className="font-bold">Strengths</span>), slabé stránky 
          (<span className="font-bold">Weaknesses</span>), príležitosti 
          (<span className="font-bold">Opportunities</span>) a hrozby 
          (<span className="font-bold">Threats</span>). Pomáha lepšie pochopiť vnútorné aj vonkajšie faktory, ktoré ovplyvňujú úspech projektu.
        </h3>
      </div>
      <div className="pt-[35px]">
        <Image alt="SWOT" src={Images.SWOT} className="h-2/3-screen w-auto object-cover" />
      </div>
     </SWOTLayout>
   );
}