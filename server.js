var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = { 
'article-one' : {
    title : 'Article one| lokesh Gurbani',
    heading : 'Article-one',
    date: 'Aug 17',
    content : ` <p>
            This is my first content..  This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content..
        </p>
        <p>
            This is my first content..  This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content..
        </p>
        <p>
            This is my first content..  This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content.. This is my first content..
        </p>`
    
},
'article-two' : {
     title : 'Article two| lokesh Gurbani',
    heading : 'Article-two',
    date: 'Aug 18',
    content : ` <p>
            This is my second article
            </p>'
    
},
'article-three' : {
    title : 'Article three| lokesh Gurbani',
    heading : 'Article-three',
    date: 'Aug 19',
    content :  <p>
            This is my third content...
            </p>`
},
};
function createtemplate (data) {
    var title= data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
var htmltemplate =`
    <html>
    <head>
        
        <title>
            $ {title}
            </title>
        <meta name="viewport" content="width=device-width initial-scale=1">
         <link href="/ui/style.css" rel="stylesheet" />
    
   
    </head>
    <body>
        <div class="container">
        <div>
            <a href="\">Home </a>
        </div>
        <hr/>
        <h3>${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
        $ {content}
        </div>
        </div>
    </body>
    </html>`
;
return  htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

counter =0;
app.get('/counter', function (req, res) {
    counter = counter +1;
    res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname,'ui', 'style.css'));
});
app.get('/:articleName', function (req, res) {
//articleName== article-one
//articles[articleName] == contents of article one object
var articleName = req.params.articleName;
    res.send(createtemplate(articles(articleName)));
});
app.get('/article-two', function (req, res)  {
   
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res)  {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name/:name', function (req, res) {
    //Get the name from the request
    var name =req.params.name;
    names.push(JSON.stringify(names));
    res.send(names);
}

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
