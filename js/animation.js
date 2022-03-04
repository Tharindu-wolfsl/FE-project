
     const next=document.querySelector(".popular-articles .nav-btns #next");
     const prev=document.querySelector(".popular-articles .nav-btns #prev");

     const slider=document.querySelector("#slide-bar");

    //  const slider_pos=slider.getBoundingClientRect();
    //  var style = slider.currentStyle || window.getComputedStyle(slider);
    //  console.log("left: "+slider_pos.left);
    //  console.log("right: "+slider_pos.right);
    //  console.log("left: "+style.marginLeft);
    //  console.log("right: "+style.marginRight);
     let pos=0;

    next.addEventListener("click",()=>{

    pos-=400;
      if(pos==-800){

        document.getElementById("next").disabled = true;
        
      }
 

    slider.style.transform=`translateX(${pos}px)`;
    document.querySelector(".popular-articles .nav-btns #prev").disabled = false;




});
      if(pos==0){

          document.querySelector(".popular-articles .nav-btns #prev").disabled = true;

      }

      
      
    prev.addEventListener("click",()=>{
      pos+=400;
     

        if(pos==0){

          document.querySelector(".popular-articles .nav-btns #prev").disabled = true;

          }
          else{

            document.querySelector(".popular-articles .nav-btns #prev").disabled = false;
          }
      slider.style.transform=`translateX(${pos}px)`;
      console.log(pos);

  
      document.getElementById("next").disabled = false;

    });