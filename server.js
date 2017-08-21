var express = require('express');
var morgan = require('morgan');
var path = require('path');

//load node-postgres for database
var Pool=require('pg').Pool;
//config the database
var config={
    user:'sonusaikishan',
    database:'sonusaikishan',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
 title: 'Article-one',
 heading:'This is my first article',
 content:'content of article 1'
},
    'article-two':{
 title: 'Article-two',
 heading:'This is my second article',
 content:'content of article 2'
},
    'article-three':{
 title: 'Article-three',
 heading:'This is my third article',
 content:'content of article 3'
}
};
function createTemplate(data){
 var title=data.title;
 var heading=data.heading;
 var content=data.content;
 var HTMLtemplate=`<!doctype html>
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container">
        <div>
            <a href='/' >HOME</a>
            <hr>
        </div>
        <div>
            <h2>
                ${heading}
            </h2>
            <br>
            <br>
            <p>
                ${content}<br>
                ........<br>
                ........<br>
            </p>
        </div>
        <br>
        <hr>
        <br>
        <div>
            <p>
                &copy;K.SAI KISAHN
            </p>
        </div>
        </div>
    </body>
</html>
 `;
 return HTMLtemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool=new Pool (config);
app.get('/test-db',function(req,res){
   pool.query('SELECT *FROM test',function(err,result){
     if(err){
         res.status(500).send(err.toString());
     }  else{
         res.send(JSON.stringify(result.rows));
     }
   });
});

var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
   res.send(counter.toString()); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

//for name request and response

var names=[];
app.get('/submit-name',function(req,res){
   var name=req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});



app.get('/:articleName', function(req, res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
