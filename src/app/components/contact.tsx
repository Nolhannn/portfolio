"use client"
 
export default function Contact(){
  return(
     <div className="flex z-2 flex-col gap-15 justify-center items-center mt-20 mb-20">
    <div className="flex justify-center gap-25 align-center items-center" id="contact">
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
        <h1 className="text-3xl">Contact :</h1>
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
    </div>
        <div className="flex flex-wrap max-w-full gap-5 items-center justify-center">
            <div className="min-w-fit grow shrink basis-[0] bg-black/30 p-5 rounded-xl border border-[#38396b]  flex  gap-20 items-center justify-center text-wrap cursor-pointer  max-w-[80%]">
              <img src="/telephon.svg" alt="" className="h-24 w-24"/>
              <div>Téléphone : +336 13 38 71 64</div>
            </div>
            <div className="min-w-fit grow shrink basis-[0] bg-black/30 p-10 rounded-xl border border-[#38396b]  flex  gap-20 items-center justify-center text-wrap cursor-pointer  max-w-[80%]">
              <img src="/mail.svg" alt="" className="h-12 w-12"/>
              <div>Email : nolhanmadani@gmail.com</div>
            </div>
            <div className=" grow shrink basis-[0] bg-black/30 p-10 rounded-xl border border-[#38396b]  flex  gap-20 items-center justify-center text-wrap cursor-pointer  max-w-[80%]">
              <img src="/linkedin-white.svg" alt="" className="h-12 w-12"/>
              <button className="cursor-pointer" onClick={()=>{window.open("https://www.linkedin.com/in/nolhan-madani-740743241/")}}>
                Linkedin : https://www.linkedin.com/in/nolhan-madani-740743241/
                </button>
            </div>
        </div>
      </div>
  )
}