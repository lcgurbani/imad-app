var button = document.getElementById('counter');
button.onclick = function() {
    //Create  a request
    var request = new XMLHttpRequest();
    
    //Capture the reesponse and store it in a variable
    request.onreadystatechanged = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            //Take some action
            if(status.request === 200) {
                var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
        ///Not done yet
    };
    
    // Make a request
    request.open('GET', 'http://lcgurbani12326.imaad.hasura-app.io/counter', true);
    request.send(null);
};