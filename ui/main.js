var button = document.getElementById('counter');
var counter =0;
button.onclick = function() {
    //make a request to the counter endpoint
    
    //Capture the reesponse and store it in a variable
    
    //render tha vaariable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};