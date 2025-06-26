
import Image from "next/image";
import Presentation from "./components/presentation";
import Competence from "./components/competence";
import Parcours from "./components/parcours";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import VeilleTechno from "./components/veilleTechno";
import Detail from "./components/details";
import Epreuve from "./components/epreuve";
import CompetenceEpreuve from "./components/competenceepreuve";

export default function Home() {

  return (
    <>
   
      <main className="flex items-center justify-center max-w-full">
      
      <Presentation/>
      <Competence/>
      <Parcours/>
      <Portfolio/>
      <Detail/>
      <CompetenceEpreuve/>
      <Epreuve/>
      <VeilleTechno/>
      <Contact/>
    </main>
    </>
  )
}
