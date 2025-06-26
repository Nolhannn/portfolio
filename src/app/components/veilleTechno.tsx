"use client"

 
export default function VeilleTechno(){
  function goto(a:string){
    window.open(a)
  }
  return(
   <div className="flex z-2 flex-col flex-wrap gap-15 justify-center items-center mt-20 mb-20">
    <div className="flex justify-center gap-25 align-center items-center" id="veille">
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
        <h1 className="text-3xl">Veille Technologique :</h1>
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
    </div>
    <div className="flex max-w-[90%] bg-black/30 items-center align-center justify-center flex-wrap gap-15 border border-[#38396b] rounded-xl border-4 p-8">
      <div className="flex gap-5 items-center  flex-col">
        <h1 className="text-4xl text-center">Système d&apos;accès :</h1>
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="flex flex-col gap-10 justify-center text-center border-[#38396b] rounded-xl border-4 p-8">
            <h1 className="text-xl justify-center">RBAC</h1>
            <div className="flex-wrap flex gap-10 justify-center">
              <div className="flex gap-5 flex-col border-[#38396b] rounded-xl border-4 p-8 w-100">
                <h1>Qu&apos;est-ce que c&apos;est ?</h1>
                <p>RBAC (role based acces control), il s&apos;agit d&apos;un système d&apos;accès basé sur des permissions et des utilisateurs assignés à des rôles. </p>
              </div>
              <div className="flex-col flex gap-5 border-[#38396b] rounded-xl border-4 p-8 w-100">
                <h1>Comment cela fonctionne ?</h1>
                <p> En RBAC, on définit des rôles en lien avec les différents postes dans l&apos;entreprise (IT, RH, etc), puis des permissions 
                    sont associées à ces rôles. Ensuite, les différents membres sont associés à un rôle. Lorsque un utilisateur essaie d&apos;effectuer
                    une action, le système vérifie si le rôle qu&apos;il lui est attribué permet d&apos;accéder à cette action.
                </p>
              </div>
              <div className="flex flex-col gap-5 border-[#38396b] rounded-xl border-4 p-8 w-100">
                <h1>Cas type :</h1>
                <p>L&apos;utilisateur possède t&apos;il un rôle ayant des accès permettant d&apos;effectuer une action sur cette ressources ? 
                  Si oui, l&apos;accèss est accordé, sinon, l&apos;accès est refusé.
                </p>
              </div>
            </div>
             <img src="/RBAC.png" className="rounded-xl self-center justify-center w-200" alt="" />
          </div>
          <div className="flex flex-col gap-10 justify-center text-center border-[#38396b] rounded-xl border-4 p-8">
            <h1 className="text-xl justify-center">ABAC</h1>
           <div className="flex-wrap flex justify-center gap-10">
              <div className="flex gap-5 flex-col border-[#38396b] rounded-xl border-4 p-8 w-100">
                <h1>Qu&apos;est-ce que c&apos;est ?</h1>
                <p>ABAC (attribute based acces control), il s&apos;agit d&apos;un système d&apos;accès basé sur des attributs associés à des ressources, actions, utilisateurs et à l&apos;environnement.
                  L&apos;ABAC permet d&apos;analyser les permissions à travers des facteurs multiples en temps-réel.</p>
              </div>
              <div className="flex-col flex gap-5 border-[#38396b] rounded-xl border-4 p-8 w-100">
                <h1>Comment cela fonctionne ?</h1>
                <p> En RBAC, le système se base sur l&apos;utilisation de if-then afin de décomposer l&apos;analyse des permissions. 
                  Il existe quatre catégories à partir desquelles le système fonctionne : l&apos;utilisateur (intitulé du poste, du département, etc),
                  les ressources (type de donnée, sensibilité de la donné, etc), des actions (lecture, écriture, suppression et validation),
                  l&apos;environnement (la localisation, temps, etc).
                </p>
              </div>
              <div className="flex flex-col gap-5 border-[#38396b] rounded-xl border-4 p-8 w-100"> 
                <h1>Cas type :</h1>
                <p> <strong>SI</strong> l&apos;utilisteur est un docteur <strong>ET</strong> que le dossier du patient appartient à l&apos;un des patient du docteur 
                  <strong> ET</strong> que la demande à lieu lors des heures de travails <strong>ALORS</strong> l&apos;accès en mode lecture est authorisé.
                </p>
              </div>
            </div>
             <img src="/ABAC.png" className="rounded-xl self-center justify-center w-200" alt="" />
          </div>
          <div className="flex flex-col gap-10 justify-center text-center border-[#38396b] rounded-xl border-4 p-8">
            <h1 className="text-xl justify-center">PBAC</h1>
            <div className="flex-wrap justify-center flex gap-10">
              <div className="flex gap-5 flex-col border-[#38396b] rounded-xl border-4 p-8 w-100">
                <h1>Qu&apos;est-ce que c&apos;est ?</h1>
                <p>Le PBAC (policy based acces control) reprend les principes du ABAC et RBAC en rajoutant une couche de centralisation.</p>
              </div>
              <div className="flex-col flex gap-5 border-[#38396b] rounded-xl border-4 p-8 w-100">
                <h1>Comment cela fonctionne ?</h1>
                <p> En PBAC la centralisation permet d&apos;organiser le système par niveau et applique des règles de façon standardisées à travers les systèmes.
                  Il permet aussi d&apos;écrire le système dans un language compréhensible côté buisness. De même, les décisions d&apos;accès permettent d&apos;incorporer en temps réel la gestion de risque.
                  Enfin, il est possible d&apos;associer différents système d&apos;authorisation afin de gérer des situations complexes.
                </p>
              </div>
              <div className="flex flex-col gap-5 border-[#38396b] rounded-xl border-4 p-8 w-100">
                <h1>Cas type :</h1>
                <p>
                  Authoriser à un client l&apos;accès à ses données financières pour les dossiers en cours, par des employés 
                  qui ont validés leurs formations de sécurité, avec un niveau d&apos;exigeance plus élevé dans le cas d&apos;acès à distance.
                </p>
              </div>
            </div>
            <img src="/PBAC.png" className="rounded-xl self-center justify-center w-200" alt="" />
          </div>
          <div className="flex flex-col gap-10 justify-center text-center border-[#38396b] rounded-xl border-4 p-8">
            <h1 className="text-xl justify-center">Tableau comparatif :</h1>
            <div className="flex-wrap justify-center flex gap-10">
              <div className="flex gap-5 flex-col  ">
               <table className="border-[#38396b] rounded border-4"> 
                <thead>    
                <tr >
                  <th className="border-b  bg-[#38396b] font-medium p-4 pl-8 pt-4 pb-3">Feature</th>
                  <th className="border-b bg-[#38396b]   font-medium p-4 pl-8 pt-4 pb-3">RBAC</th>
                  <th className="border-b bg-[#38396b]  font-medium p-4 pl-8 pt-4 pb-3">ABAC</th>
                  <th className="border-b bg-[#38396b]  font-medium p-4 pl-8 pt-4 pb-3">PBAC</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Complexité</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Bas</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Moyen</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Élevé</td>
                </tr>
                <tr >
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Fléxibilité</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Bas</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Moyen</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Élevé</td>
                </tr>
                <tr  >
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Contexte</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Aucun</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Élevé</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Très élevé</td>
                </tr>
                <tr >
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Difficulté d&apos;implentation</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Bas</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Moyen</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Élevé</td>
                </tr>
                <tr>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Maintenace</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Moyen</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Moyen</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Bas</td>
                </tr>
                <tr>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Mise à l&apos;échelle</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Bas</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Élevé</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Très élevé</td>
                </tr>
                <tr>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Facilité des audits</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Très élevé</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Bas</td>
                  <td className="bg-white/10 font-medium p-4 pl-8 pt-4 pb-3">Très élevé (avec outils)</td>
                </tr>
                <tr>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Adaptabilité</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Bas</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Élevé</td>
                  <td className="bg-black/40 font-medium p-4 pl-8 pt-4 pb-3">Très élevé</td>
                </tr>
                </tbody>
               </table>
              </div>
            </div>
          </div>
        </div>
      </div>   
      <div className="flex max-w-[90%] wrap gap-4 items-center justify-center">
          <button
              className="border border-[#38396b] rounded-xl p-3 border-5 cursor-pointer"
              onClick={()=>{goto("https://stytch.com/blog/rbac-vs-pbac-vs-abac/") }}>{">Source n°1<"}
          </button>
          <button
              className="border border-[#38396b] rounded-xl p-3 border-5 cursor-pointer"
              onClick={()=>{goto("https://rublon.com/blog/pbac-vs-rbac-whats-the-difference") }}>{">Source n°2<"}
          </button>
          <button
              className="border border-[#38396b] rounded-xl p-3 border-5 cursor-pointer"
              onClick={()=>{goto("https://www.adminbyrequest.com/en/blogs/access-control-made-easy-rbac-vs-abac-vs-pbac") }}>{">Source n°3<"}
          </button>
      </div>
    </div>
   </div>
  )
}