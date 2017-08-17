//counter code
var button=document.getElementById('counter');
var counter =0;

button.onclick = function() {
    
    //make the request to the counter endpoint
    
    //Capture the response and store the variable in it
    
    //render the variable in the correct span
     counter = counter +1;
     var span =document.getElementById('count');
     span.innerHTML = counter.toString();
};