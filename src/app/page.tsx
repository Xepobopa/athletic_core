import { Button } from "athletic/components/Button";
import {Images} from "athletic/images/images";
import Image from "next/image";

export default function Home() {
  return (
    <div className="global-px">
      <section className="flex flex-wrap items-center">
        <div className="w-1/2 ">
          <div>
            <p className="text-[64px] font-bold">Atletic Core</p>
            <p className="pt-[10px] pb-[60px] text-[#000000BF] text-[24px] font-normal">Váš osobný tréner vo vrecku</p>
            <Button isSelected href="/training/adults">Začnite trénovať</Button>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={Images.ManMainPage} alt="Big man"/>          
        </div>
      </section>

      <section className="flex flex-wrap text-center pt-[20px]">
        <div className="flex-1 min-w-[250px] flex flex-col items-center gap-y-[15px] gap-x-[20px]">
          <Image alt="list" src={Images.ListMainPage} height={61} width={61}/>
          <p className="font-[800] text-[28px]">Prispôsobiteľné tréningy</p>
        </div>
        <div className="flex-1 min-w-[250px] flex flex-col items-center gap-y-[15px]">
          <Image alt="list" src={Images.PlusMainPage} height={61} width={61}/>
          <p className="font-[800] text-[28px]">Bezpečná rozcvička pred tréningom</p>
        </div>
        <div className="flex-1 min-w-[250px] flex flex-col items-center gap-y-[15px]">
          <Image alt="list" src={Images.UpMainPage} height={61} width={61}/>
          <p className="font-[800] text-[28px]">Zlepšenie flexibility</p>
        </div>
      </section>

      <section className="py-[20vh]">
        <p className="text-[30px] font-normal italic">
          <span className="text-[35px] font-bold">Athletic Core</span> je online kolekcia cvičení na tréning v posilňovni, rozcvičky, strečing a crossfit. Vytvorte si vlastný plán, dosiahnite svoje ciele bez zranení a rýchlejšie sa zotavte.
        </p>
      </section>

      <section className="grid gap-[20px] text-center pt-[20px] grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
  <div className="flex flex-col items-center gap-y-[15px]">
    <Image alt="list" src={Images.Girl1MainPage}/>
    <p className="font-[600] text-[24px]">Warm-up - prepare your body for workouts</p>
  </div>
  <div className="flex flex-col items-center gap-y-[15px]">
    <Image alt="list" src={Images.Girl2MainPage}/>
    <p className="font-[600] text-[24px]">Workout - choose exercises for strength, endurance, or muscle gain</p>
  </div>
  <div className="flex flex-col items-center gap-y-[15px]">
    <Image alt="list" src={Images.Girl3MainPage}/>
    <p className="font-[600] text-[24px]">Stretching - speed up recovery and improve flexibility</p>
  </div>
</section>



    </div>
  );
}
