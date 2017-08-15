/*

console.log('Loaded!');


//move the image by using Java script
var img=document.getElementById("madi");

var marginLeft=0;

function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+"px";
}

img.onclick = function(){
  var interval=setInterval(moveRight,20); 
};

*/

//this for the counter 

var button=document.getElementById('counter');
var span=document.getElementById('count');

button.onclick=function(){
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status == 200){
              var counter=request.responseText;
              span.innerHTML=counter.toString();
          }
      }  
    };
    
    request.open('GET','http://sonusaikishan.imad.hasura-app.io/counter',true);
    request.send(null);
};

