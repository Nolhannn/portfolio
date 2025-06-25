export default function Etoile(){
    function etoile (){

          let obj=[]
          for(let i=1;i<500;i++){
          let etoile = "etoile"+i;
          let lettre = ['A','B','C'];
          let etoiletaille="";
          if(i%2==0){
            etoiletaille= 'etoilesize'+lettre[2];
          }else if(i%3==0){
            etoiletaille= 'etoilesize'+lettre[1];
          }else{
            etoiletaille= 'etoilesize'+lettre[0];
          };
          obj.push(etoiletaille)
        }
        return  obj
        } 
      const etoiles = etoile()
  function genRight(){
    let nb = Math.round(Math.random()*3000)
        return nb
  } 
  function genTop(){
    return Math.round(Math.random()*2000)
  } 
  return(
    <>
    {
      etoiles.map((x:string)=>{
        return(
          <div className={"etoile z-1 "+x+" top-32 "}  
              style={{ right:genRight(),
                      top:genTop(),
                      animationDuration:(Math.random()*(120-80)+80)+'s'
               }}
          ></div>
        )
      })
    }
    </>
  )

}