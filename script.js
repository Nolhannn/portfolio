
function etoile (){
  for(i=1;i<500;i++){
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
  window.open("https://gitlab.com/NolhanMM/mon-portfolio/-/tree/newbranch/jeuDuSinge?ref_type=heads","_blank");
}
function selectione () {
  document.getElementById('jds').style.animation='selectionne  2s forwards';
}
function deselectione () {
  document.getElementById('jds').style.animation='';
}
function pointselection(a){
  
  let element =document.getElementById(a);
  element.style.animation='pointselect  2s infinite';
}
function pointdeselection(point){
  document.getElementById(point).style.animation='';
}
setTimeout(()=>{
  document.getElementById('jds').addEventListener("click",gitjds);
  document.getElementById('jds').addEventListener("mouseover",selectione);
  document.getElementById('jds').addEventListener("mouseout",deselectione);
  for(i=0;i<document.getElementsByClassName('point').length;i++){
    let point = "point"+i;
    document.getElementsByClassName('point')[i].setAttribute("id",point);
    document.getElementsByClassName('point')[i].addEventListener("mouseover",()=>{pointselection(point)});
    document.getElementsByClassName('point')[i].addEventListener("mouseout",()=>{pointdeselection(point)});
  }
  
},1000);

etoile ();