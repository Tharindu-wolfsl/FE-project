if(mediaQuery1.matches){

let cn=document.getElementById('check');
let btnDrop1=document.getElementById('btn-drop-1');
let btnDrop2=document.getElementById('btn-drop-2');
let btnDrop3=document.getElementById('btn-drop-3');
var btn_drop=document.getElementById('btn-drop-5');
var close_btn=document.getElementById('close-btn');





close_btn.addEventListener("click",function(){

    document.querySelector('#mob-nav').style.display="none";
    document.querySelector(".blur-sec").style.display="none";
    


});



btn_drop.addEventListener('change',function(){

    if(btn_drop.checked==true){

        document.querySelector('#drop-d-5').style.display="block";
        document.querySelector('#btn-drop-5').style.transform="rotate(45deg)";

    }
    else{

        document.querySelector('#drop-d-5').style.display="none";
        document.querySelector('#btn-drop-5').style.transform="rotate(-45deg)";
    }


});

cn.addEventListener("click",function(){

    document.getElementById("mob-nav").style.display="block";
    document.querySelector(".blur-sec").style.display="block";
    







});
// changeNav();
// function changeNav(){

//     if(cn.checked==true){
    
    
    
//         document.getElementById("mob-nav").style.display="block";
//      
    
    
       
//     }
       
    
//  else{
    
//      document.getElementById("mob-nav").style.display="none";
       
//     }
    
//     }


}