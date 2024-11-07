import Hero from '@/components/Hero'
import React from 'react'
import hero from '../assets/hero.png'
import Text_block from '@/components/Text_block'
import Services from '@/components/Services'
import Roller from '@/components/Roller'
import Case from '@/components/Case'

export const ServicesObject = [
  {
    id: 1,
    title: "Nyproduktion",
    text: "El Cures har erfarenhet med flertals nyproduktionsarbeten och är där från planering till färdigställande. Vi säkerställer att alla elektriska system uppfyller dagens höga krav på säkerhet och effektivitet."
  },
  {
    id: 2,
    title: "Kraftinstallationer",
    text: "Inom kraftinstallationer erbjuder vi robusta lösningar för att hantera högre strömmar och spänningar. Vi arbetar med kraftdistribution i industriella och kommersiella fastigheter, och ser till att alla installationer är säkra och energieffektiva."
  },
  {
    id: 3,
    title: "Fiber",
    text: "Vi erbjuder installation av fibernät och kommunikationslösningar för bostäder och företag. Våra installationer garanterar snabb och pålitlig uppkoppling med hög kapacitet, oavsett om det gäller enskilda hushåll eller större nätverk."
  },
  {
    id: 4,
    title: "Solcellsanläggningar",
    text: "El Cures erbjuder installation av skräddarsydda solcellsystem som är utformade för att maximera energieffektiviteten och säkerställa en pålitlig energiförsörjning året runt."
  },
  {
    id: 5,
    title: "Service",
    text: "Vårt team har bred kompetens och ger dig snabb och kompetent service inom säkerhet- och elinstallationer. Vi säkerställer att de fungerar och är optimerade för morgondagen."
  },
  {
    id: 6,
    title: "Projektering",
    text: "Med vår projekteringstjänst tar vi fram detaljerade ritningar och planlösningar som matchar kundens specifika behov. Vi samarbetar tätt med både arkitekter och byggentreprenörer för att säkerställa att varje elinstallation integreras smidigt i byggprocessen."
  },
  {
    id: 7,
    title: "Säkerhetssystem",
    text: "Vi installerar avancerade säkerhetssystem som inkluderar brandlarm, inbrottslarm, övervakningskameror och passagessystem. Vi ger säker och smidig kontroll över in- och utpassering som kan enkelt anpassas efter dina specifika behov."
  },
  {
    id: 8,
    title: "Energiinstallationer",
    text: "Vi erbjuder energiinstallationer som hjälper dig att effektivisera energiförbrukningen i din fastighet. Från installation av energisparsystem till laddstationer för elbilar, fokuserar vi på hållbara lösningar som både sparar pengar och gynnar miljön."
  }
];

export const CasesObject = [
  {
    title: "Kryddpepparn",
    description: "Kv. Kryddpepparn 1 & 2 är två kvarter med 190 lägenheter uppförda i början av 1960-talet, belägna i Hökarängen i södra Stockholm. I höst 2024 startade vi ett stort rotprojekt tillsammans med Byggmästargruppen Stockholm BMG AB. I arbetet så skötte vi renovering av elnätverket samt utbyte ut befintliga elserviser.",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Berghusen",
    description: "EL Cures har fått förtroendet av Hawila Projekt AB att utföra projektet Kv. Berghusen. Projektet innebär elinstallationer i 211 lägenheter samt allmänna utrymmen som exempelvis garage och hallar. Vi kommer att leverera el och kraftinstallationer samt fiber och passagesystem. ",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Modellören",
    description: "Vi har fått glädjen att tillsammans med 2xA Entreprenad utföra elinstallationer i 76 lägenheter i Gustavsberg. Det innehåller el och tele installationer, passersystem, byggström och solceller.",
    image: "/placeholder.svg?height=400&width=600"
  }
]

const Home = () => {

  return (
    <div>
      <Hero image={hero} text={"Din certifierade elektriker i Stockholm som kan hjälpa till med allt från service till installationer."} title={"Specialister inom elinstallationer"} />
      <Text_block title={'Din trygga elinstallatör'} text={
        'Vi på El Cures är din kompletta partner för elinstallationer i Stockholm. Med lång och bred erfarenhet så hjälper vi med allt från kortare uppdrag som behöver respons snabbt till komplexa projekt som kräver stor noggrannhet och precision. Oavsett om det gäller att stambyta en fastighet eller installera ett komplett säkerhetssystem, kan du räkna med att vi levererar med högsta kvalitet.Vi specialiserar oss på en bred variation av elinstallationer och jobbar med allt från stora entreprenader till solceller och elbilsladdare. Vi tar även hand om säkerhetssystem som brandlarm, fiber och inbrottslarm. Hos oss får du inte bara pålitlig service utan även installationslösningar som håller hög standard, är snygga och framför allt säkra.'
      }
        button_text={'Läs mer om oss'}
        button_link={'/om-oss'}
        show_button={true}
      />
      <Services services={ServicesObject} title={'Våra tjänster'} />
      <Roller services={ServicesObject} />

      <Case cases={CasesObject} show_button={true} button_text={'Se fler referensuppdrag'} button_link={'/case'} title={'Referensuppdrag'} />
    </div>
  )
}

export default Home
