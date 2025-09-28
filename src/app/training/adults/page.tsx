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
      "Stroj „butterfly“ 3 série po 10-12 opakovaní",
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
      "Hyperextenzia 3 série po 15 opakovaní",
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
      "Leg press 3 série po 10 opakovaní",
      "Výpady 3 série po 10 opakovaní",
      "Predkopávanie v stroji 3 série po 10 opakovaní",
      "Zakopávanie v stroji 3 série po 10 opakovaní",
      "Stoj na lýtka (calf raises) 3 série po 15 opakovaní",
    ],
  },
  {
    day: "Sobota",
    isFree: true,
    training: [],
  },
  {
    day: "Nedeľa",
    isFree: false,
    training: [
      "Rozpažovanie s činkami 3 série po 10 opakovaní",
      "Tlak v Smithovom stroji na predné ramená 3 série po 10 opakovaní",
      "Upážovanie na zadné ramená 3 série po 10 opakovaní",
      "„Shrugs“ (zdvíhanie pliec) 3 série po 10 opakovaní",
    ],
  },
];


const text = `Môžete cvičiť až 6-krát do týždňa, ak sa dodržuje správna strava, dostatok spánku a dobré rozdelenie záťaže.`

export default async function Adults ({
  
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   return Training({ text: text, image: Images.Adult, schedule })
}