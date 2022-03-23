let nextBtn=document.getElementById('post_next');
let prevBtn=document.getElementById('post_prev');
// let post_1_img=document.getElementById('post-1-img');
// let post_1_title=document.getElementById('post-1-title');
// let post_1_date=document.getElementById('post-1-date');
// let post_2_img=document.getElementById('post-2-img');
// let post_2_title=document.getElementById('post-2-title');
// let post_2_date=document.getElementById('post-2-date');
// let post_3_img=document.getElementById('post-3-img');
// let post_3_title=document.getElementById('post-3-title');
// let post_3_date=document.getElementById('post-3-date');
let temp_date;
let temp_img;
let temp_title;






nextBtn.addEventListener("click",()=>{
    
for(let i=1; i<6; i++){
temp_img=document.getElementById('post-'+i+'-img').src;
temp_title=document.getElementById('post-'+i+'-title').innerText;
temp_date=document.getElementById('post-'+i+'-date').innerText;
document.getElementById('post-'+i+'-img').src=document.getElementById('post-'+(i+1)+'-img').src
document.getElementById('post-'+i+'-title').innerText=document.getElementById('post-'+(i+1)+'-title').innerText;
document.getElementById('post-'+i+'-date').innerText=document.getElementById('post-'+(i+1)+'-date').innerText;
document.getElementById('post-'+(6-i)+'-img').src=temp_img;
document.getElementById('post-'+(6-i)+'-title').innerText=temp_title;
document.getElementById('post-'+(6-i)+'-date').innerText=temp_date;



}
    
    
 } );
prevBtn.addEventListener("click",()=>{
    
    
    for(let i=1; i<6; i++){
        temp_img=document.getElementById('post-'+i+'-img').src;
        temp_title=document.getElementById('post-'+i+'-title').innerText;
        temp_date=document.getElementById('post-'+i+'-date').innerText;
        document.getElementById('post-'+i+'-img').src=document.getElementById('post-'+(i+1)+'-img').src
        document.getElementById('post-'+i+'-title').innerText=document.getElementById('post-'+(i+1)+'-title').innerText;
        document.getElementById('post-'+i+'-date').innerText=document.getElementById('post-'+(i+1)+'-date').innerText;
        document.getElementById('post-'+(6-i)+'-img').src=temp_img;
        document.getElementById('post-'+(6-i)+'-title').innerText=temp_title;
        document.getElementById('post-'+(6-i)+'-date').innerText=temp_date;
        
        
        
        }
    
    
 } );