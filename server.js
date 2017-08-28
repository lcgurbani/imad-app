var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
           ${date}
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

var counter =0;
app.get('/counter', function (req, res) {
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/:articleName', function (req,res) {
    //articleName == article-one
    //articles[articleName]== content object for article-one
    //To aabstract the avlue of articleNme we use paarams
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname,'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(__dirname,'ui', 'main.js'));
});


app.get('ui/madi.png', function (req, res) {
    res.sendFile(path.join(__dirname,'ui', 'madi.png'));
});


var port = 80;    // Use 8080 only for local development if you already have apache running on 80
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
