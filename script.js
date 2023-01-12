function trym(){
const img=["0.png","1.png",
"2.png","3.png",
"4.png","5.png","6.png"
,"7.png","8.png","9.png"]
var input=document.getElementById("numInput").value
let x =Math.floor(Math.random()*9)
var pic=document.getElementById("seee")
var p=document.getElementById("dhari")

 pic.src=img[x];
if(input==x){
    p.innerHTML="Great Job";
    p.style.color="red";
}


    
  
else{
    p.innerHTML="Try again";
    p.style.color="red";
}
   

   
}



