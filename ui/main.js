
console.log('Loaded!');
//Change the tex of the main-text div

//var element = document.getElementById("main-text");
//element.innerHTML ="New Value";

//move the image
var img = document.getElementById("madi");

var marginLeft = 0;
function moveRight () {
    marginLeft= marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
 img.onclick= function() {
     var interval =setInterval(moveRight,100);
 };  
 
 //counter code
  var button =document.getElemenById("counter");
  var counter =0;
  button.onclick = function() {
      
      //Make a request to the  counter endpoint
      
      //Capture a  response  and store it in a variable
      
      //render the variable in a correct span
      counter=counter+1;
      var span =document.getElementById("count");
      span.innerHTML = counter.toString();
  };