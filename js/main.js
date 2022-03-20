

if(mediaQuery1.matches){
    var cb = document.getElementById('check-0');
    var cb1 = document.getElementById('check-1');
    var cb2 = document.getElementById('check-2');
    var cb3 = document.getElementById('check-3');
    var cb4 = document.getElementById('check-4');
    var cb5 = document.getElementById('check-5');
cb.addEventListener("change",changeVisibility);
cb1.addEventListener("change",changeVisibility1);
cb2.addEventListener("change",changeVisibility2);
cb3.addEventListener("change",changeVisibility3);
cb4.addEventListener("change",changeVisibility4);
cb5.addEventListener("change",changeVisibility5);
changeVisibility();
changeVisibility1();
changeVisibility2();
changeVisibility3();
changeVisibility4();
changeVisibility5();

function changeVisibility(){
  if(cb.checked==true){
    document.getElementById('ul-0').style.display="block";
    document.getElementById('down').style.display="none";
    document.getElementById('up').style.display="block";
}else{

    document.getElementById('ul-0').style.display="none";
    document.getElementById('down').style.display="block";
    document.getElementById('up').style.display="none";
}
}
function changeVisibility1(){
    if(cb1.checked==true){
      document.getElementById('ul-1').style.display="block";
      document.getElementById('down-1').style.display="none";
      document.getElementById('up-1').style.display="block";
  }else{
  
      document.getElementById('ul-1').style.display="none";
      document.getElementById('down-1').style.display="block";
      document.getElementById('up-1').style.display="none";
  }
  }

  function changeVisibility2(){
    if(cb2.checked==true){
      document.getElementById('ul-2').style.display="block";
      document.getElementById('down-2').style.display="none";
      document.getElementById('up-2').style.display="block";
  }else{
  
      document.getElementById('ul-2').style.display="none";
      document.getElementById('down-2').style.display="block";
      document.getElementById('up-2').style.display="none";
  }
  }

  function changeVisibility3(){
    if(cb3.checked==true){
      document.getElementById('ul-3').style.display="block";
      document.getElementById('down-3').style.display="none";
      document.getElementById('up-3').style.display="block";
  }else{
  
      document.getElementById('ul-3').style.display="none";
      document.getElementById('down-3').style.display="block";
      document.getElementById('up-3').style.display="none";
  }
  }

  function changeVisibility4(){
    if(cb4.checked==true){
      document.getElementById('ul-4').style.display="block";
      document.getElementById('down-4').style.display="none";
      document.getElementById('up-4').style.display="block";
  }else{
  
      document.getElementById('ul-4').style.display="none";
      document.getElementById('down-4').style.display="block";
      document.getElementById('up-4').style.display="none";
  }
  }
  function changeVisibility5(){
    if(cb5.checked==true){
      document.getElementById('ul-5').style.display="block";
      document.getElementById('down-5').style.display="none";
      document.getElementById('up-5').style.display="block";
  }else{
  
      document.getElementById('ul-5').style.display="none";
      document.getElementById('down-5').style.display="block";
      document.getElementById('up-5').style.display="none";
  }
  }
    


}



