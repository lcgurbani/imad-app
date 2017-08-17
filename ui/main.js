//counter code
var button=document.getElementById('counter');
var counter =0;
button.onclick = function() {
    
    //Create the request
    
    //Capture the response and store the variable in it
        
    //Render the variable in the correct span
     counter = counter +1;
     var span = document.getElementById('count');
     span.innerHTML = counter.toString();
};