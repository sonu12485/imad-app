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
var counter=0;

button.onclick=function(){
    counter=counter+1;
    span.innerHTML(counter.toString());
};

