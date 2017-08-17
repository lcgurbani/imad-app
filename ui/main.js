//counter code
var button=document.getElementById('counter');
var counter =0;
button.onclick = function() {
    
    //Create the request
        var request = new XMLHttpRequest();
    //Capture the response and store the variable in it
        request.onreadystatechange = function() {
            if (request.readyState === XMLHttpRequest.DONE)  {
                    //Take some action
                    if (request.status ===200) {
                       var counter = request.responseText();
                       var span =document.getElementById('count');
                        span.innerHTML = counter.toString();
                    }
            }
            //not done yet
        };
        
     // Make the request
     request.open('GET', 'http://lcgurbani12326.imad.hasura.io/counter', true);
     request.send(null);
};