export default  function Presentation(){
  return(
   <div className="flex z-2  flex-col gap-15 justify-center items-center mt-20 mb-20">
    <div className="flex justify-center gap-25 align-center items-center" id="presentation">
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
        <h1 className="text-3xl">Présentation:</h1>
        <div className="w-0 h-0 shadow-[inset_0px_0px_20px_5px,0px_0px_10px_10px] rotate-45 shadow-white  animate-pulse"></div>
    </div>
        <div className="section1 flex max-w-full justify-center text-center flex-wrap">
          <div className="imgdiv">
            <img id="imgperso" src="/photocv.jpg" alt=""/>
          </div>
          <div className="presentation">
            <p>Bonjour, je suis développeur web :</p>
            <p>J'ai 26 ans et je suis  passionné par la programmation. 
              Actuellement en reconversion professionnelle,
              je poursuis une formation en BTS SIO option SLAM.
              Cette formation est centrée sur le développement web et la gestion de bases de données.
            </p>
          </div>
        </div>
      </div>)
}