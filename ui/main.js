console.log('Loaded!');
//Change the tex of the main-text div

var element = document.getElementById("main-text");
element.innerHTML ="New Value";

//move the image
var element = document.getElementById("madi");

 var marginLeft = 0;
function moveRight () {
    marginLeft=marginLeft + 10;
    madi.style.marginLeft = marginLeft + 10;
}
 madii.onclick= function() {
     var interval =setInterval(moveRight,100);
 };  