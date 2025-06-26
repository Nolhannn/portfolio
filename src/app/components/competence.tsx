export default function Competence(){
  return(
      <div className=" z-2 flex flex-col gap-15 justify-center items-center mt-20 mb-20">
    <div className="flex justify-center gap-25 align-center items-center" id="competence">
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
        <h1 className="text-3xl">Compétences :</h1>
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
    </div>
          <div className="flex flex-wrap min-w-fit gap-5 w-full justify-center">
            <div className="listeInfo min-w-100">
              <div className="titrecompetence">Frontend :</div>
              <div className="langageInfo flex  gap-5 hide" id="html">

                <img src="/icons8-html5-48.svg" alt=""/>
                  <div>HTML</div>
                  <div className="barreGrise">
                      <div className="barreProgr0"></div>
                  </div>
              </div>
              <div className="langageInfo flex  gap-5 hide" id="css">
                <img src="/icons8-css.svg" alt=""/>
                  <div >CSS</div>
                  <div className="barreGrise">
                      <div className="barreProgr0"></div>
                  </div>
              </div>
              <div className="langageInfo flex  gap-5 hide" id="javascript">
                <img src="/icons8-javascript.svg" alt=""/>
                  <div>JavaScript</div>
                  <div className="barreGrise">
                      <div className="barreProgr2"></div>
                  </div>
              </div>
              <div className="langageInfo flex  gap-5 hide" id="javascript">
                <img src="/logo-react-white.svg" alt=""/>
                  <div>React</div>
                  <div className="barreGrise">
                      <div className="barreProgr3"></div>
                  </div>
              </div>
              <div className="langageInfo flex  gap-5 hide" id="javascript">
                <img src="/nextjs-white.svg" alt=""/>
                  <div>NextJS</div>
                  <div className="barreGrise">
                      <div className="barreProgr3"></div>
                  </div>
              </div>
            </div>
                 
          <div className="listeInfo min-w-100">
              <div className="titrecompetence">Backend :</div>
                <div className="langageInfo  flex  gap-5 hide"  id="mysql">
                  <img src="/mysql-svgrepo-com.svg" alt=""/>
                  <div>MySQL</div>
                  <div className="barreGrise">
                      <div className="barreProgr1"></div>
                  </div>
              </div>
              <div className="langageInfo flex  gap-5 hide hide" id="php">
                <img src="/php-programming-language-svgrepo-com.svg" alt=""/>
                  <div>PHP</div>
                  <div className="barreGrise">
                      <div className="barreProgr2"></div>
                  </div>
              </div>
              <div className="langageInfo flex  gap-5 hide" id="php">
                <img src="/drizzle-logo.svg" alt=""/>
                  <div>Drizzle</div>
                  <div className="barreGrise">
                      <div className="barreProgr3"></div>
                  </div>
              </div>
              <div className="langageInfo flex  gap-5 hide" id="php">
                <img src="/swagger-white.svg" alt=""/>
                  <div>Swagger</div>
                  <div className="barreGrise">
                      <div className="barreProgr4"></div>
                  </div>
              </div>
              <div className="langageInfo flex  gap-5 hide" id="php">
                <img src="/java-white.svg" alt=""/>
                  <div>Java</div>
                  <div className="barreGrise">
                      <div className="barreProgr4"></div>
                  </div>
              </div>
            </div>
          <div className="outils min-w-100">
            <div className="titrecompetence">Environnement :</div>
            <div className="langageInfo flex  gap-5" id="vscode">
              <img src="/visual-studio-code-svgrepo-com.svg" alt=""/>
              <div>VSCode</div>
              <div className="barreGrise">
                  <div className="barreProgr0"></div>
              </div>
            </div>
            <div className="langageInfo flex  gap-5" id="git">
              <img src="/icons8-git-50.svg" alt=""/>
              <div >Git</div>
              <div className="barreGrise">
                  <div className="barreProgr2"></div>
              </div>
            </div>
            <div className="langageInfo flex  gap-5" id="git">
              <img src="/eclipse-white.svg" alt=""/>
              <div >Eclipse</div>
              <div className="barreGrise">
                  <div className="barreProgr2"></div>
              </div>
            </div>
          </div>
        </div>  
        </div>
      
  )
}