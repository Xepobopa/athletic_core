import Training from "athletic/components/Training"
import { Images } from "athletic/images/images"

export const metadata = {
  title: 'Child training',
  description: 'Child training programm.',
}

const schedule = [
  {
    day: "Pondelok",
    isFree: false,
    training: [
      "Tlak s činkami na rovnej lavičke 3 série po 10 opakovaní",
      "Zdvihy činiek na biceps 3 série po 12 opakovaní",
      "Drepy 3 série po 15 opakovaní",
      "Sťahovanie hornej kladky 3 série po 10 opakovaní",
      "Rozpažovanie s činkami 3 série po 10 opakovaní",
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
      "Príťahy s pákovým strojom 3 série po 10 opakovaní",
      "Triceps na kladke 3 série po 10 opakovaní",
      "Drepy 3 série po 15 opakovaní",
      "Tlak s činkami na lavičke v uhle 30° 3 série po 8–10 opakovaní",
      "Hyperextenzia 3 série po 12 opakovaní",
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
      "Drepy 3 série po 10–15 opakovaní",
      "Tlak s činkami na predné ramená 3 série po 12 opakovaní",
      "Sťahovanie hornej kladky 3 série po 10–12 opakovaní",
      "Kľuky 3 série po 10–12 opakovaní",
      "Zdvihy činiek na biceps 3 série po 10 opakovaní",
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


const text = `Pre starších ľudí sa rovnako ako pre deti odporúča program „full-body“, pretože pomáha udržiavať telo v dobrej forme a nepreťažuje ho. Odporúča sa tiež robiť každodenné kardio. Najlepšie je cvičiť 3-krát do týždňa.`

export default async function Old ({
  
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
   return Training({ text: text, image: Images.Old, schedule })
}