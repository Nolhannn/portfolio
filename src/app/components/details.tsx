"use client"

import { useState } from "react"

export default function Detail(){
     const [zoom,setZoom]=useState(false)
     const [zoom2,setZoom2]=useState(false)
     const [zoom3,setZoom3]=useState(false)
     const [zoom4,setZoom4]=useState(false)
     const [zoom5,setZoom5]=useState(false)
     const [zoom6,setZoom6]=useState(false)
     const [zoom7,setZoom7]=useState(false)
  return(
    <div className=" z-2 flex flex-col gap-15 justify-center items-center mt-20 mb-20">
    <div className="flex justify-center gap-25 align-center items-center" id="stage">
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
        <h1 className="text-3xl">Stage de Première année :</h1>
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
    </div>
          <div className="flex flex-wrap items-center justify-center">
              <div className="experiencepro min-w-150">
                <div className=" text-3xl justify-center text-center mb-15">
                  L'entreprise : 
                </div>
                <div className=" flex flex-col gap-15">
                <div className="flex max-w-150">
                  <img src="/faseya.svg" className={(zoom?"hover:scale-150":"")} height={40} width={160} />
                  <div className="text-wrap items-center text-center max-w-150">
                    FASEYA est une société de conseil numérique spécialisé dans le développement de logiciels, site web et application mobile. Elle est composée de 10 à 20 employés en France et dans plusieurs pays d'Afrique de l'Ouest.
                    Elle travaille avec des entreprises principalement basées en Afrique mais aussi en France et aux USA.
                  </div>
                </div>
                <div className="flex max-w-150 gap-5">
              <div className="text-wrap items-center text-center max-w-150">
                  J'ai pu travailler dans cette entreprise durant la période du 28 avril au 25 juin. Lors de ma période de stage, j'ai pu travailler sur l'application Yatouze.
                  Cette application a pour but d'offrir un service complet aux entreprises afin de gérer de leur service RH, à la gestion de contrat en passant par l'organisation des projets.
                </div>
                  <img src="/yatouze.jpg" alt="" className="rounded-3xl" height={40} width={160}/>
              </div>
            </div>
            <div className="pt-15 text-3xl justify-center text-center mb-15">
                  Détails des projets en entreprise : 
                </div>
                <div className=" flex flex-col gap-15">
                  <div className="flex flex-col max-w-150">
                    <h1 className="text-2xl text-center p-5">Section RH :</h1>
                    <div className="text-wrap items-center text-center max-w-150">
                      Mon premier projet à Faseya a consisté à reproduire sur une application NextJS la section RH de Yatouze.
                      Dans cette dernière, il fallait que l'on puisse créer, modifier et supprimer des départements, mais aussi des profils qui y étaient associés. 
                      Ensuite, il fallait coder un onglet où l'on pouvait ajouter et modifier des utilisateurs.      
                    </div>
                    <img src="/yatouzecode1-2.png" onClick={()=>{
                      setZoom7(x=>!x)
                    }}
                    alt="" height={80} className={"max-w-full  cursor-pointer "+(zoom7?"hover:scale-150":"") }/>
                  </div>
                  <div className="flex flex-col max-w-150 gap-5">
                  <div className="text-wrap items-center text-center max-w-150">
                      Pour accomplir ce projet, j'ai pu travailler à partir de NextJS et donc de React, avec l'aide de Swagger pour interagir avec la BDD à travers des API. 
                      Pour le style, puisque nous sommes sur NextJS, j'ai pu utiliser Tailwind CSS.
                    </div>
                      <img src="/yatouzecode2-2.png" 
                      onClick={()=>{
                      setZoom6(x=>!x)
                    }}
                      alt="" height={80} className={"max-w-full  cursor-pointer " + (zoom6?"hover:scale-150":"")}/>
                  </div>
                  <div className="flex flex-col max-w-150 gap-5">
                  <div className="text-wrap items-center text-center max-w-150">
                      Le résultats fut concluant, j'ai pu reproduire les fonctionnalités désirées dans les délais.
                  </div>
                      <img src="/yatouzerh.png" onClick={()=>{
                      setZoom5(x=>!x)
                    }} alt=""  height={80} className={"max-w-full  cursor-pointer " + (zoom5?"hover:scale-150":"")}/>

                  </div>
                  <div className="flex flex-col max-w-150">
                    <h1 className="text-2xl text-center p-5">Projet carte :</h1>
                    <div className="text-wrap items-center p-5 text-center max-w-150">
                      Mon second projet a consisté à développer une carte interactive qui permettait de connaître et de représenter sur celle-ci, la nationalité des utilisateurs du site Yatouze.
                      Cette fonctionnalité avait pour objectif d'offrir une meilleure vision aux commerciaux et au directeur général. Mais aussi d'ajouter un argument de vente
                      auprès des potentiels clients en montrant la portée internationale de l'outil.     
                    </div>
                    <img src="/mapcode.png" alt=""  height={80}
                    onClick={()=>{
                      setZoom4(x=>!x)
                    }}  className={"max-w-full  cursor-pointer " + (zoom4?"hover:scale-150":"")}/>

                    <div className="text-wrap items-center text-center max-w-150 p-5">
                      En plus des technologies citées plus haut, j'ai choisi d'utiliser la bibliothèque React-simple-maps qui offre des outils pour développer les fonctionnalités désirées.     
                    </div>
                    <img src="/reactmap.png"
                    onClick={()=>{
                      setZoom3(x=>!x)
                    }}  alt=""  height={80} className={"max-w-full  cursor-pointer " + (zoom3?"hover:scale-150":"")}/>
                  </div>
                  <div className="flex flex-col max-w-150">
                    <h1 className="text-2xl text-center p-5">Projet graphique :</h1>
                    <div className="text-wrap items-center p-5 text-center max-w-150">
                      Mon dernier projet a consisté à développer deux puis au final un graphique représentant l'évolution du nombre d'utilisateurs actifs.
                      De même, cette fonctionnalité était sensé permettre à l'équipe commerciale de connaître l'utilisation réelle de l'application.    
                    </div>
                    <img src="/chartcode.png"
                    onClick={()=>{
                      setZoom2(x=>!x)
                    }} 
                    alt=""  height={80} className={"max-w-full  cursor-pointer  " + (zoom2?"scale-150":"")}/>
                    <div className="text-wrap items-center text-center max-w-150 p-5">
                      Cette fois, je me suis dirigé vers la bibliothèque React-chartjs-2 qui s'adaptait parfaitement aux demandes de notre chef de projet.     
                    </div>
                    <img onClick={()=>{
                        setZoom(x=>!x)
                      }}  src="/chart.png" alt=""  height={80} className={"max-w-full cursor-pointer " + (zoom?"scale-150":"")}/>
                  </div>
                  
                  
            </div>
                
            </div>
        </div>
      </div>
  )
}