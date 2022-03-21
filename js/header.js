
var menu=document.getElementById("header");



var login=false;


    if(login==true){
        document.querySelector("#login").classList.add("login");
    document.querySelector("#not-login").classList.add("not_login");
    document.querySelector("#tab-login").classList.add("tab_login");
    }
    else{
    
        document.querySelector("#not-login").classList.remove("not_login");
        document.querySelector("#login").classList.remove("login");
        document.querySelector("#tab-login").classList.remove("tab_login");
   
    }




window.onscroll=function () {

    if(window.pageYOffset>=menu.offsetTop){


        menu.classList.add("sticky");
    }else{


        menu.classList.remove("sticky");
    }


  }
