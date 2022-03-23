let nextBtn=document.getElementById('post_next');
let prevBtn=document.getElementById('post_prev');
let temp_date=new Array();
let temp_img=new Array();
let temp_title=new Array();
let tempr_date=new Array();
let tempr_img=new Array();
let tempr_title=new Array();


let post={

    1:{
        img:document.getElementById('post-1-img').src,
        title:document.getElementById('post-1-title').innerText,
        date:document.getElementById('post-1-date').innerText
    },
   2:{
        img:document.getElementById('post-2-img').src,
        title:document.getElementById('post-2-title').innerText,
        date:document.getElementById('post-2-date').innerText
    },
    3:{
        img:document.getElementById('post-3-img').src,
        title:document.getElementById('post-3-title').innerText,
        date:document.getElementById('post-3-date').innerText
    },
  
    4: {
        img:document.getElementById('post-4-img').src,
        title:document.getElementById('post-4-title').innerText,
        date:document.getElementById('post-4-date').innerText
    },
    5:{
        img:document.getElementById('post-5-img').src,
        title:document.getElementById('post-5-title').innerText,
        date:document.getElementById('post-5-date').innerText
    }
}


nextBtn.addEventListener("click",()=>{
 
 
temp_img[0]=post[5].img;
temp_title[0]=post[5].title;
temp_date[0]=post[5].date;


post[5].img=post[1].img;
post[5].title=post[1].title.substring(0,19)+"...";
post[5].date=post[1].date;




temp_img[1]=post[4].img;
temp_title[1]=post[4].title;
temp_date[1]=post[4].date;
post[4].img=temp_img[0];
post[4].title=temp_title[0];
post[4].date=temp_date[0];

temp_img[2]=post[3].img;
temp_title[2]=post[3].title;
temp_date[2]=post[3].date;
post[3].img=temp_img[1];
post[3].title=temp_title[1];
post[3].date=temp_date[1];

temp_img[3]=post[2].img;
temp_title[3]=post[2].title;
temp_date[3]=post[2].date;
post[2].img=temp_img[2];
post[2].title=temp_title[2];
post[2].date=temp_date[2];

post[1].img=temp_img[3];
post[1].title=temp_title[3];
post[1].date=temp_date[3];


for(let i=1; i<6; i++){

    document.getElementById('post-'+i+'-img').src=post[i].img;
    document.getElementById('post-'+i+'-title').innerText=post[i].title;
    document.getElementById('post-'+i+'-date').innerText=post[i].date;

}      
    
 } );
prevBtn.addEventListener("click",()=>{
 tempr_img[0]=post[1].img;
 tempr_title[0]=post[1].title.substring(0,19)+"...";
 tempr_date[0]=post[1].date;


 post[1].img=post[5].img;
 post[1].title=post[5].title;
 post[1].date=post[5].date;




 tempr_img[1]=post[2].img;
 tempr_title[1]=post[2].title;
 tempr_date[1]=post[2].date;
 post[2].img=tempr_img[0];
 post[2].title=tempr_title[0];
 post[2].date=tempr_date[0];

 tempr_img[2]=post[3].img;
 tempr_title[2]=post[3].title;
 tempr_date[2]=post[3].date;
post[3].img=tempr_img[1];
post[3].title=tempr_title[1];
post[3].date=tempr_date[1];

tempr_img[3]=post[3].img;
tempr_title[3]=post[3].title;
tempr_date[3]=post[3].date;
post[4].img=tempr_img[2];
post[4].title=tempr_title[2];
post[4].date=tempr_date[2];

post[5].img=tempr_img[3];
post[5].title=tempr_title[3];
post[5].date=tempr_date[3];
    
    for(let i=1; i<6 ; i++){

        document.getElementById('post-'+(6-i)+'-img').src=post[i].img;
        document.getElementById('post-'+(6-i)+'-title').innerText=post[i].title;
        document.getElementById('post-'+(6-i)+'-date').innerText=post[i].date;
    
    }      
    
    
 } );