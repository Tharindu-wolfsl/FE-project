if(mediaQuery1.matches){

var cn=document.getElementById('check');
cn.addEventListener("change",changeNav);
changeNav();

function changeNav(){

if(cn.checked==true){



    document.getElementById("mob-nav").style.display="block";
    document.getElementById("mob-nav").style.height="fit-content";
    document.getElementById("mob-nav").style.opacity="1";

}else{

    document.getElementById("mob-nav").style.display="none";

}




}}