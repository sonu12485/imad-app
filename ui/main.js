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
/*
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

//this is for name request and response

var submit=document.getElementById('submit-btn');
submit.onclick=function(){
  var request=new XMLHttpRequest();
  request.onreadystatechange=function(){
    if(request.readyState == XMLHttpRequest.DONE){
        if(request.status === 200){
            var names=request.responseText;
            names=JSON.parse(names);
            var list='';
            for(var i=0;i<names.length;i++){
                list+='<li>'+names[i]+'</li>';
            }
            var ul=document.getElementById('ullist');
            ul.innerHTML=list;
        }
    }
  };
  var nameInput=document.getElementById('name');
  var name=nameInput.value;
  request.open('GET','http://sonusaikishan.imad.hasura-app.io/submit-name?name='+name,true);
  request.send(null);
};

*/

//this id to login with username and password

var submit=document.getElementById('submit');
submit.onclick=function(){
  var request=new XMLHttpRequest();
  request.onreadystatechange=function(){
    if(request.readyState == XMLHttpRequest.DONE){
        if(request.status === 200){
            alert('logged in succesfully');
        }else if(request.status === 403){
            alert('invalid username/password');
        }else if(request.status === 500){
            alert('server error');
        }
    }
  };
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;
  
  console.log(username);
  console.log(password);
  
  request.open('POST','http://sonusaikishan.imad.hasura-app.io/login',true);
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username:username,password:password}));
};


var register=document.getElementById('register');
register.onclick=function(){
  var request=new XMLHttpRequest();
  request.onreadystatechange=function(){
    if(request.readyState == XMLHttpRequest.DONE){
        if(request.status === 200){
            alert('registration succesfully');
        }else if(request.status === 403){
            alert('registration failed');
        }else if(request.status === 500){
            alert('server error');
        }
    }
  };
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;
  
  console.log(username);
  console.log(password);
  
  request.open('POST','http://sonusaikishan.imad.hasura-app.io/create-user',true);
  request.setRequestHeader('Content-Type','application/json');
  request.send(JSON.stringify({username:username,password:password}));
};









