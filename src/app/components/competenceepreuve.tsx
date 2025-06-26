export default function CompetenceEpreuve(){
  return(
    <>
    <div className="flex justify-center gap-25 align-center items-center" id="epreuveComp">
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
        <h1 className="text-3xl">Compétences clefs  :</h1>
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
    </div>  
     <div className=" z-2 flex flex-col gap-15 justify-center justify-self-center experiencepro   mt-20 mb-20 max-w-200">
    
                  <div className=" self-center flex flex-col justiy-center max-w-150 ">
                    <div className="flex flex-col justify-center text-center items-center max-w-150 ">
                      <div className="flex">
                    <img src="/collaboration.svg" alt="" />
                      <h1 className="text-2xl text-center p-5 max-w-150 ">Collaboration dans un projet informatique : </h1>
                      <img src="/collaboration.svg" alt="" />
                   </div>
                    <div className="text-wrap items-center text-center max-w-150 p-5">
                      Lors de ces projets j&apos;ai pu travailler en équipe à travers Gitlab. Une chaîne de commandement permettait une mise en place des travaux de chacun sans que l&apos;une rentre en conflit avec une autre.
                      Notamment, mon référent du jour devait valider mon travail avant chaque push sur la branche principale de la dev. Ensuite, la branche principale de la dev devait être validée par le chef de projet (product owner).
                      C&apos;est à partir de cette étape que nous pouvions push dans la prod (côté utilisateur). C&apos;est ce travail en équipe qui permet de maintenir une efficacité dans le travail et une cohérence dans le développement. Par exemple, 
                      lorsque j&apos;ai présenté une version stable d&apos;une carte sur react-simple-maps, les développeurs ont adopté cette bibliothèque pour produire les cartes futures.
                    </div>
                  </div>
                  <div className="flex flex-col justify-center text-center items-center max-w-150 ">
                    <div className="flex">
                    <img src="/solution.svg" alt="" />
                   <h1 className="text-2xl text-center p-5 max-w-150 ">Réalisation de tests et validation des solutions : </h1>
                   <img src="/solution.svg" alt="" />
                   </div>
                   <div className="text-wrap items-center text-center max-w-150 p-5">
                    En tant que novice, j&apos;ai dû participer fortement à cette étape du développement. En effet, il est nécessaire de tester les différentes fonctionnalités afin de s&apos;assurer qu&apos;aucun bug ou défaut n&apos;a été implanté.
                    J&apos;ai ainsi eu l&apos;occasion de tester des fonctionnalités en développement mais aussi des fonctionnalités déjà validées qui pourraient avoir été affectées par de nouveaux ajouts dans le code. Lors de grand projet, il existe aussi 
                    des tests automatisés, des fonctions sont préparées pour tester les bugs lorsque des éléments fonctionnent de manière similaire.
                    </div>
                  </div>
                  <div className="flex flex-col justify-center text-center items-center max-w-150 ">
                    <div className="flex ">
                      <img src="/database.svg" alt="" />
                    <h1 className="text-2xl text-center p-5 max-w-150 ">Gestion des bases de données  : </h1>
                    <img src="/database.svg" alt="" />
                    </div>
                    <div className="text-wrap items-center text-center max-w-150 p-5">
                    Lors de mon stage, j&apos;ai pu pleinement travailler dans la gestion de BDD. En effet, la modélisation (la représentation) des données est primordiale afin de pouvoir exploiter au maximum les informations récoltées.
                    L&apos;utilisation et l&apos;exploitation des données récoltées sont primordiales pour que l&apos;entreprise comprenne et maîtrise son environnement, son impact et puisse maximiser ses profits.
                    Ainsi, la représentation par une carte et des graphiques est une façon d&apos;exploiter et de modéliser des données de la base de données de Yatouze à l&apos;aide d&apos;API.
                    </div>
                   </div>
                   </div>
        </div>
    </>
  )
}