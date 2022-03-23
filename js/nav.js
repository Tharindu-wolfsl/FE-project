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

btnDrop1.addEventListener('change',function(){
    if(btnDrop1.checked==true){
        document.querySelector('#arr-down-1').style.transform=("rotate(180deg)");
    }else{

        document.querySelector('#arr-down-1').style.transform=("rotate(0deg)");

    }
   
});
btnDrop2.addEventListener('change',function(){
    if(btnDrop2.checked==true){
        document.querySelector('#arr-down-2').style.transform=("rotate(180deg)");
    }else{

        document.querySelector('#arr-down-2').style.transform=("rotate(0deg)");

    }
   
});
btnDrop3.addEventListener('change',function(){
    if(btnDrop3.checked==true){
        document.querySelector('#arr-down-3').style.transform=("rotate(180deg)");
    }else{

        document.querySelector('#arr-down-3').style.transform=("rotate(0deg)");

    }
   
});



btn_drop.addEventListener('change',function(){

    if(btn_drop.checked==true){

        document.querySelector('#drop-d-5').style.display="block";
        document.querySelector('#arr-down-mob').style.transform="rotate(180deg)";

    }
    else{

        document.querySelector('#drop-d-5').style.display="none";
        document.querySelector('#arr-down-mob').style.transform="rotate(0deg)";
    }


});

cn.addEventListener("click",function(){

    document.getElementById("mob-nav").style.display="block";
    // document.getElementById("mob-nav").style.transform="scale(100%)";
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