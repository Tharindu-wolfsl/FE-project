if(mediaQuery1.matches){

var cn=document.getElementById('check');
var btn_drop1=document.getElementById('btn-drop-1');
var btn_drop2=document.getElementById('btn-drop-2');
var btn_drop3=document.getElementById('btn-drop-3');
var btn_drop=document.getElementById('btn-drop-5');
var close_btn=document.getElementById('close-btn');

cn.addEventListener("change",changeNav);
function changeNav(){

    if(cn.checked==true){
    
    
    
        document.getElementById("mob-nav").style.display="block";
        document.querySelector("header .header").style.visiblity="hidden";
    
    
       
    }
       
    
    // }else{
    
    //     document.getElementById("mob-nav").style.display="none";
       
    
    // }
    
    }
changeNav();


close_btn.addEventListener("click",function(){

    document.querySelector('#mob-nav').style.display="none";
    document.querySelector("header .header").style.visiblity="visible";


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


}