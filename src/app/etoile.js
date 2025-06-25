export function etoile (){
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
  let body = document.getElementById('body');
  body.innerHTML+= `<div class="etoile `+etoiletaille+`" id="`+etoile+`"></div>`; 
  let selectetoile= document.getElementById(etoile);
  selectetoile.style.top = Math.random()*2000+"px";
  selectetoile.style.right = Math.random()*3000+"px";
  selectetoile.style.animationDuration = (Math.random()*(120-80)+80)+'s';
}
}
function gitjds(){
  window.open("https://gitlab.com/NolhanMM/mon-portfolio/","_blank");
}
setTimeout(()=>{
  document.getElementById('jds').addEventListener("click",gitjds);
},1000);

etoile ();