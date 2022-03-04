
     const next1=document.querySelector(".section-1 .main-bar .nav-btns #next1");
     const prev1=document.querySelector(".section-1 .main-bar .nav-btns #prev1");

     const slider1=document.querySelector(".section-1 .main-bar #slide-bar1");

    //  const slider_pos=slider.getBoundingClientRect();
    //  var style = slider.currentStyle || window.getComputedStyle(slider);
    //  console.log("left: "+slider_pos.left);
    //  console.log("right: "+slider_pos.right);
    //  console.log("left: "+style.marginLeft);
    //  console.log("right: "+style.marginRight);
     let pos1=0;

    next1.addEventListener("click",()=>{

    pos1-=270;
      if(pos1==-810){

        document.getElementById("next1").disabled = true;
        
      }
 

    slider1.style.transform=`translateX(${pos1}px)`;
    document.querySelector(".section-1 .main-bar .nav-btns #prev1").disabled = false;




});
      if(pos1==0){

          document.querySelector(".section-1 .main-bar .nav-btns #prev1").disabled = true;

      }

      
      
    prev1.addEventListener("click",()=>{
      pos1+=270;
     

        if(pos1==0){

          document.querySelector(".section-1 .main-bar .nav-btns #prev1").disabled = true;

          }
          else{

            document.querySelector(".section-1 .main-bar .nav-btns #prev1").disabled = false;
          }
      slider1.style.transform=`translateX(${pos1}px)`;
      console.log(pos1);

  
      document.getElementById("next1").disabled = false;

    });