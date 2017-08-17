//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    //Create the request
     var request = new XMLHttpRequest();
     
    //Capture the response and store the variable in it
       request.onreadystatechange = function() {
         if(request.readyState === XMLHttpRequest.DONE)   {
             //Take some action
             if(request.status===200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
             }
         }
       };
    
    
    //make the request
    request.open('GET','http://lcgurbani12326.imad.hasura-app.io/counter' , true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');
var sumit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request and send the name to the server
    
    //Capture a list of names and render it as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i< names.length;i++) {
    list +='<li>'+ names[i] + '</li>';
}
var ul=document.getElementById('namelist');
ul.innerHTML = list;
};