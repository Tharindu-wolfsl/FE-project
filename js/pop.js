
document.querySelector('.drop-list .selection #radio1').checked=true;

document.querySelector('.section-1 .list .item #drop-1').onclick=function(){

    document.getElementById("list").style.visibility="hidden";
    document.getElementById("drop-list").style.visibility="visible";
    
};
document.querySelector('.section-1 .list .item .drop-list #close').onclick=function(){

    document.getElementById("list").style.visibility="visible";
    document.getElementById("drop-list").style.visibility="hidden";
    
};





