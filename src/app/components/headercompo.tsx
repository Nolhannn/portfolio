"use client"

import { useState } from "react"
import Nav from "./nav"

export default function Headercompo(){
  const [hover,setHover]=useState(false)
  const [firstHover,setFirstHover]=useState(false)
  const [select,setSelect]=useState(false)
  return(
    <>
    <header>
          <nav className="flex bg-[#0b0b1d] w-full justify-between p-5 m-0 max-w-full text-white fixed top-0 z-50">
            <div>Madani Nolhan</div>
            <div className="flex align-center items-center gap-5">
              <div className={"w-0 h-0 shadow-[inset_0px_0px_10px_2px,0px_0px_7px_7px]  rotate-45 shadow-white align-center animate-pulse"+(select || hover?"":" hidden ") + ( select&&" ring-10")}>
              </div>
              <div 
              onMouseEnter={()=>{setHover(true)
                setFirstHover(true)
              }}
              onMouseLeave={()=>{setHover(false)}}
              onClick={()=>{setSelect(x=>!x)}}
              className={"cursor-pointer flex flex-col p-1 gap-1 rounded-4xl"+(select?" animate-[rotate_1s_forwards_ease-out]":(hover?" animate-[rotate_1s_forwards_ease-out]": firstHover?" animate-[rotateOut_1s_forwards_ease-out]":""))}>
                <span className="spanbarre "></span>
                <span className="spanbarre"></span>
                <span className="spanbarre"></span>
              </div>
            </div>
          </nav>
        </header>
        {select && <Nav/>}
        </>
  )
}