"use client"

import { useState } from "react"

export default function Epreuve(){
   const [zoom,setZoom]=useState(false)
  return(
     <div className=" z-2 flex flex-col gap-15 justify-center items-center mt-20 mb-20">
    <div className="flex justify-center gap-25 align-center items-center" id="epreuve">
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
        <h1 className="text-3xl">Détails épreuve :</h1>
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
    </div>
    <div className="section1 flex max-w-full justify-center text-center flex-wrap"> 
          <img onClick={()=>{
            setZoom(x=>!x)
          }} src="/epreuvee.png" className={"rounded-3xl cursor-pointer "+ (zoom?"hover:scale-150":"")}alt="" />
    </div>
      </div>
  )




}