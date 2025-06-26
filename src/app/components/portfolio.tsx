"use client"
 
import Java from "./langue/java"
import Php from "./langue/php"
import Sql from "./langue/sql"
import React from "./langue/react"
import NextJS from "./langue/next"
import PostgreSQL from "./langue/postgresql"
import Javascript from "./langue/javascript"
import Css from "./langue/css"
import Tailwind from "./langue/tailwind"
import Swagger from "./langue/swagger" 

export default function Portfolio(){ 
  
  return(
   <div className="flex z-2 flex-col flex-wrap gap-15 justify-center items-center mt-20 mb-20">
    <div className="flex justify-center gap-25 align-center items-center" id="portfolio">
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
        <h1 className="text-3xl">Portfolio :</h1>
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
    </div>
    <div className="flex max-w-[80%] bg-black/30 justify-center flex-wrap gap-15 border border-[#38396b] rounded-xl border-4 p-8">
      <div onClick={()=>{
        window.open("https://gitlab.com/NolhanMM/bibliotheque")
        
      }} id="" className="gap-5 flex flex-col  cursor-pointer border border-[#38396b] rounded-xl border-5 w-fit p-2 hover:shadow-[0px_0px_10px_10px] shadow-white/50">
        <img src="/siteBiblio.png" alt="" className="w-100 h-100"/>
        <div className="max-w-100 flex flex-col gap-5">
          <p className="text-wrap text-center">Site fictif d&apos;une bibliothèque, comprenant la liste et description des ouvrages, un système de compte, de modération, d&apos;une gestion de BDD, etc.</p>
          <div className="justify-center align-center max-w-full flex gap-5">
            <Php/>
            <Sql/>
            <Css/>
          </div>
        </div>
      </div>
      <div onClick={()=>{    
        window.open("https://gitlab.com/NolhanMM/projet-respire")

      }} id="" className="gap-5 flex flex-col cursor-pointer border border-[#38396b] rounded-xl border-5 w-fit p-2 hover:shadow-[0px_0px_10px_10px] shadow-white/50">
        <img src="/respireStat.png" alt="" className={" w-100 h-100 "}/>
        <div className="max-w-100 flex flex-col gap-5">
          <p className="text-wrap text-center">Logiciel de représentation de statistique basé sur les données du gouvernement sur la qualité de l&apos;air des écoles en île-de-France.</p>
          <div className=" align-center justify-center flex">
            <Java/>
          </div>
        </div>
      </div>
      <div onClick={()=>{
        window.open("https://gitlab.com/NolhanMM/sitevetement/-/tree/dev")
      }} id="" className="gap-5 flex flex-col cursor-pointer border border-[#38396b] rounded-xl border-5 w-fit p-2 hover:shadow-[0px_0px_10px_10px] shadow-white/50">
        <img src="/sitevetement.png" alt="" className=" w-100 h-100"/>
        <div className="max-w-100 flex flex-col gap-5">
          <p className="text-wrap text-center">Site de vente de vêtement basé sur NextJS, utilisant Neon et Drizzle pour le backend. EN COURS.</p>
          <div className="justify-center flex-wrap flex gap-5">
            <React/>
            <NextJS/>
            <PostgreSQL/>
            <Tailwind/>
          </div>
        </div>
      </div>
      <div onClick={()=>{
        window.open("https://gitlab.com/NolhanMM/mon-portfolio/-/tree/main/jeuDuSinge?ref_type=heads")
      }} id="" className="gap-5 flex flex-col cursor-pointer border border-[#38396b] rounded-xl border-5 w-fit p-2 hover:shadow-[0px_0px_10px_10px] shadow-white/50">
        <img src="/ImageduJeu.png" alt="" className=" w-100 h-100"/>
        <div className="max-w-100 flex flex-col gap-5">
          <p className="text-wrap text-center">Mini jeu de mémoire.</p>
          <div className="justify-center gap-5 flex">
            <Javascript/>
            <Css/>
          </div>
        </div>
      </div>
      <div onClick={()=>{
        window.open("https://github.com/Nolhannn/departement")
      }} id="" className="gap-5 flex flex-col cursor-pointer border border-[#38396b] rounded-xl border-5 w-fit p-2 hover:shadow-[0px_0px_10px_10px] shadow-white/50">
        <img src="/yatouzerh.png" alt="" className=" w-100 h-100"/>
        <div className="max-w-100 flex flex-col gap-5">
          <p className="text-wrap text-center">Site de gestion d&apos;entreprise, section RH ayant recours à des API pour intéragir avec la BDD.</p>
          <div className="justify-center flex-wrap flex gap-5">
            <React/>
            <NextJS/>
            <Sql/>
            <Swagger/>
            <Tailwind/>
          </div>
        </div>
      </div>
      <div onClick={()=>{
        window.open("https://github.com/Nolhannn/departement")
      }} id="" className="gap-5 flex flex-col cursor-pointer border border-[#38396b] rounded-xl border-5 w-fit p-2 hover:shadow-[0px_0px_10px_10px] shadow-white/50">
        <img src="/reactmap.png" alt="" className=" w-100 h-100"/>
        <div className="max-w-100 flex flex-col gap-5">
          <p className="text-wrap text-center">Site de gestion d&apos;entreprise, partie Backend représentant la localisation des utilisateurs, basé sur la bibliothèque React-simple-maps.</p>
          <div className="justify-center flex-wrap flex gap-5">
            <React/>
            <NextJS/>
            <Sql/>
            <Swagger/>
            <Tailwind/>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}