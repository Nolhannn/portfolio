export default function Parcours(){
  return(
    <div className=" z-2 flex flex-col gap-15 justify-center items-center mt-20 mb-20">
    <div className="flex justify-center gap-25 align-center items-center" id="parcours">
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
        <h1 className="text-3xl">Parcours :</h1>
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
    </div>
          <div className="flex flex-wrap gap-10 justify-center">
              <div className="experiencepro min-w-150">
                <div className="experienceproTitre mb-15">
                  Expériences Professionnelles
                </div>
                <div className="experienceproTexteLigne">
                  <div className="experienceproLigne">
                    <div className="ligne">
                      <div className="point pointA"></div>
                      <div className="point pointB"></div>
                      <div className="point pointC"></div>
                      <div className="point pointC"></div>
                    </div>        
                  </div>
                  <div className="experienceproTexte">
                    <div className="exp expA flex flex-col gap-5">
                      <p className="expMaj">Stage développeur front-end</p>
                      <p className="expMin">avril 2025 - juin 2025 Faseya</p>
                    </div>
                    <div className="exp expA flex flex-col gap-5">
                      <p className="expMaj">Employé de restauration</p>
                      <p className="expMin">2023-2024 Disneyland Paris</p>
                    </div>
                    <div className="exp expC flex flex-col gap-5">
                      <p className="expMaj">Frigoriste</p>
                      <p className="expMin">2022-2023 EspritClim</p>
                    </div>
                    <div className="exp expB flex flex-col gap-5">
                      <p className="expMaj">Empoyé polyvalent</p>
                      <p className="expMin">2018-2021-NOZ</p>  
                    </div>
                  </div>
              </div>
            </div>
            <div className="experienceEcole  min-w-150">
                <div className="experienceEcoleTitre">
                    Formations
                </div>
                <div className="experienceEcoleTexteLigne">
                  <div className="experienceEcoleLigne">
                    <div className="ligne">
                      <div className="point pointA"></div>
                      <div className="point pointB"></div>
                      <div className="point pointC"></div>
                      <div className="point pointC"></div>
                    </div>
                  </div>
                  <div className="experienceEcoleTexte">
                    <div className="exp expB flex flex-col gap-5">
                      <p className="expMaj">BTS SIO SLAM</p>
                      <p className="expMin">2024-en cours IPSSI</p>
                    </div>
                    <div className="exp expB flex flex-col gap-5">
                      <p className="expMaj">CAP Frigoriste</p>
                      <p className="expMin">2022-2023 Les Compagnons du Devoir</p>
                    </div>
                    <div className="exp expC flex flex-col gap-5">
                      <p className="expMaj">Maîtrise d&apos;Histoire</p>
                      <p className="expMin">2016-2021 Université Paris-Sorbonne</p>
                    </div>
                    <div className="exp expA flex flex-col gap-5">
                      <p className="expMaj">Baccalauréat</p>
                      <p className="expMin">2016 Lycée Jean Monnet</p>
                    </div>
                  </div>
                </div>
            
          </div> 
        
        </div>
      </div>
  )
}