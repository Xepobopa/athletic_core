import { Images } from "athletic/images/images";
import GanttLayout from "./layout";
import Image from "next/image";

export const metadata = {
  title: 'Gantt chat',
  description: 'Gantt chart for the AthleticCore project.',
}

export default async function Gantt ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   return (
     <GanttLayout>
      <div className="flex-1 min-w-[300px] flex flex-col justify-center items-center gap-y-[15px]">
        <h3 className="font-[400] text-[24px] lg:text-[32px]">
          Ganttov diagram je graf plánovania, ktorý zobrazuje úlohy v čase - ukazuje, kedy sa začínajú, končia a ako sa prekrývajú.
        </h3>
        <div className="pt-[35px]">
            <Image alt="Gantt chart" src={Images.Gantt} className="h-2/3-screen w-auto object-cover" />
        </div>
      </div>
     </GanttLayout>
   );
}