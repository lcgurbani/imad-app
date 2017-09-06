var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');


var config = {
    user: 'lcgurbani12326',
    database: 'lcgurbani12326',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password:  process.env.DB_PASSWORD
};
var app  =  express();
app.use(morgan('combined'));


var articles = { 
    'article-one': {
        title:"Article-one | Lokesh gurbani",
        heading:"Article-one",
        date: "25 Aug 2017",
        content:`
        <p>
            This is the content for my first arrtiicle. This is the content for my first arrtiicle. This is the content for my first arrtiicle.This is the content for my first arrtiicle. This is the content for my first arrtiicle. This is the content for my first arrtiicle. This is the content for my first arrtiicle. This is the content for my first arrtiicle.
            </p>
            <p>
                 This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle
            </p>
            <p>
                 This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle This is the content for my first arrtiicle
            </p>`
},
    'article-two': {
         title:"Article-two | Lokesh gurbani",
        heading:"Article-two",
        date: "30 Aug 2017",
        content:`
        <p>
         This is the content for my second article
            </p>`
    },
    'article-three': {
        title:"Article-three | Lokesh gurbani",
        heading:"Article-three",
        date: "30 Sep 2017",
        content:`
        <p>
         This is the content for my third article
            </p>`
    },
};
function createTemplate(data) {
    var title=data.title;
    var date= data.date;
    var heading= data.heading;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
         <meta name="viewport" content="width-device-width,initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
   </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
           ${date.toDateString()}
        </div>
        <div>
        ${content}
        </div>
        </div>
    </body>
    </html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var Pool = new Pool(config);
app.get('/test-db', function (req, res) {
   //Make  a select request
   //Return a response with the results
   Pool.query('SELECT * FROM test',function (err, result) {
       if (err) {
           res.status(500).send(err.toString());
       } else {
           res.send(JSON.stringify(result.rows));
       }
   });
});

var counter =0;
app.get('/counter', function (req, res) {
   counter=counter+1;
   res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) {
    //Get the name from the request
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/articles/:articleName', function (req,res) {
    //articleName == article-one
    //articles[articleName]== content object for article-one
    //To abstract the avlue of articleNme we use paarams
    
    
    Pool.query("SELECT * FROM article where title = $1" [req.param.articleName], function (err, result) {
        if (err) {
            res.send(500).send(err.toString());
        } else  {
            if(result.rows.length === 0) {
                res.status(404).send("Article not found");
            } else {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
});



app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname,'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(__dirname,'ui', 'main.js'));
});

function hash (input,salt) {
    //how do we create a hash?
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return hashed.toString('hex');
    
}

app.get('/hash/:input', function (req,res) {
    var hashedString = hash(req.params.input, 'this-is-some-random-string');
    res.send(hashedString);
})

app.get('ui/madi.png', function (req, res) {
    res.sendFile(path.join(__dirname,'ui', 'madi.png'));
});

var port = 80;    // Use 8080 only for local development if you already have apache running on 80
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
