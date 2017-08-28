var button = document.getElementById('counter');

button.onclick = function() {
    //Create  a request
    var request = new XMLHttpRequest();
    
    //Capture the reesponse and store it in a variable
    request.onreadystatechanged = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
        ///Not done yet
    };
    
    // Make a request
    request.open('GET', 'http://lcgurbani12326.imad.hasura-app.io/counter', true);
    request.send(null);
};

//submit the name
var nameInput = document.getElementById('name'); 
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to the server and send the name
    
    // capture a list of name and render it as a list
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i=0; i<names.length; i++) {
    list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};