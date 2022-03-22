if(mediaQuery1.matches){

var cn=document.getElementById('check');
var 
cn.addEventListener("change",changeNav);
changeNav();

function changeNav(){

if(cn.checked==true){



    document.getElementById("mob-nav").style.display="block";

   
  
   

}else{

    document.getElementById("mob-nav").style.display="none";
   

}

}}