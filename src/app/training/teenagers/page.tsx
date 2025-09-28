import Training from "athletic/components/Training";
import { Images } from "athletic/images/images";


export const metadata = {
  title: 'Child training',
  description: 'Child training programm.',
}

const schedule = [
  {
    day: "Pondelok",
    isFree: false,
    training: [
      "Bench press 3 série po 10 opakovaní",
      "Stroj „butterfly“ 3 série po 10–12 opakovaní",
      "Hammer press na spodné prsia 3 série po 10 opakovaní",
      "Zdvih EZ tyče na biceps 3 série po 12 opakovaní",
      "Kladivové zdvihy (hammer curls) 3 série po 10 opakovaní",
    ],
  },
  {
    day: "Utorok",
    isFree: true,
    training: [],
  },
  {
    day: "Streda",
    isFree: false,
    training: [
      "Sťahovanie hornej kladky 3 série po 10 opakovaní",
      "Príťahy s pákovým strojom 3 série po 10 opakovaní",
      "Pullover 3 série po 12 opakovaní",
      "Triceps na kladke 3 série po 10 opakovaní",
      "Francúzsky tlak 3 série po 8 opakovaní",
    ],
  },
  {
    day: "Štvrtok",
    isFree: true,
    training: [],
  },
  {
    day: "Piatok",
    isFree: false,
    training: [
      "Rozpažovanie s činkami 3 série po 10 opakovaní",
      "Tlak v Smithovom stroji na predné ramená 3 série po 10 opakovaní",
      "Upážovanie na zadné ramená 3 série po 10 opakovaní",
      "Leg press 3 série po 10 opakovaní",
      "Predkopávanie v stroji 3 série po 10 opakovaní",
      "Zakopávanie v stroji 3 série po 10 opakovaní",
    ],
  },
  {
    day: "Sobota",
    isFree: true,
    training: [],
  },
  {
    day: "Nedeľa",
    isFree: true,
    training: [],
  },
];



const text = `Tínedžerom sa odporúča cvičiť v posilňovni do 4-krát za týždeň.
Podľa programu „split“. Tento program umožňuje lepšie sústrediť sa na určité svaly, na rozdiel od „full-body“.`

export default async function Teenagers ({
  
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   return Training({ text: text, image: Images.Teenager, schedule })
}