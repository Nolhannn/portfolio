"use client"
export default function Nav(){
  function goTO(id:string){
    const offsetTop  = document.getElementById(id)!.offsetTop;
    window.scrollTo({
      top: offsetTop-100, 
      behavior: "smooth"
    })
  }
  
  return(
    <div className="fixed z-20 bg-[#0b0b1d] animate-[extend_1s_forwards_ease-out] shadow-[0px_0px_15px_1px] top-[65px] right-0  h-screen ">
      <div className="flex mt-20 items-center flex-col gap-10 animate-[shower_2s_ease-out_forwards]"> 
        <span onClick={()=>{
          goTO("presentation")
        }} className="border rounded-3xl  p-3 cursor-pointer flex items-center justify-center min-w-[90%] gap-2 hover:animate-pulse hover:bg-white/50 ">
          <img src="/account.svg" alt="" />
          <p>Présentation</p>
          </span>
        <span onClick={()=>{
          goTO("competence")
        }} className="border rounded-3xl p-3 cursor-pointer flex shrink grow justify-center min-w-[90%] items-center gap-2 hover:animate-pulse hover:bg-white/50 ">
          <img src="/skills-white.svg" alt="" />
          <p>Compétence</p>
          </span>
        <span onClick={()=>{
          goTO("parcours")
        }} className="border rounded-3xl flex   items-center gap-2 shrink grow justify-center min-w-[90%] p-3 cursor-pointer hover:animate-pulse hover:bg-white/50 ">
          <img src="/school-white.svg" alt="" />
          <p>Parcours</p>
          </span>
        <span onClick={()=>{
          goTO("portfolio")
        }} className="border rounded-3xl flex items-center gap-2  shrink grow justify-center min-w-[90%] p-3 cursor-pointer hover:animate-pulse hover:bg-white/50 ">
          <img src="/work-white.svg" alt="" />
          <p>Portfolio</p>
          </span>
          <span onClick={()=>{
          goTO("stage")
        }} className="border rounded-3xl flex items-center gap-2  p-3 shrink grow justify-center min-w-[90%] cursor-pointer hover:animate-pulse hover:bg-white/50 ">
          <img src="/internship-icon.svg" alt="" />
          <p>Stage</p>
          </span>
          <span onClick={()=>{
          goTO("epreuveComp")
        }} className="border rounded-3xl flex items-center gap-2 max-w-[90%] p-3 shrink grow justify-center min-w-[90%] cursor-pointer hover:animate-pulse hover:bg-white/50 ">
          <img src="/exam-white.svg" alt="" />
          <p className="wrap text-center">Compétences clefs</p>
          </span>
          <span onClick={()=>{
          goTO("epreuve")
        }} className="border rounded-3xl flex items-center gap-2 max-w-[90%] p-3 shrink grow justify-center min-w-[90%] cursor-pointer hover:animate-pulse hover:bg-white/50 ">
          <img src="/exam-white.svg" alt="" />
          <p className="wrap text-center">Détails de l&apos;épreuve</p>
          </span>
          <span onClick={()=>{
          goTO("veille")
        }} className="border rounded-3xl flex items-center gap-2 max-w-[90%] p-3 shrink grow justify-center min-w-[90%] cursor-pointer hover:animate-pulse hover:bg-white/50 ">
          <img src="/veille-white.svg" alt="" />
          <p className="wrap text-center">Veille technologique</p>
          </span>
        <span onClick={()=>{
          goTO("contact")
        }} className="border rounded-3xl flex items-center gap-2  p-3 shrink grow justify-center min-w-[90%] cursor-pointer hover:animate-pulse hover:bg-white/50 ">
          <img src="/contact-white.svg" alt="" />
          <p>Contact</p>
          </span>
      </div>
    </div>
  )
}