//When an image is clicked you go to a dead end

//Solution create an overlay with a large image

//1. Capture the click event on a link to an image
$("img").click(function(){
  alert("I have been clicked")
});
  //1.1. Show the overlay
  //1.2 Updated overlay with the image in the link
  //1.3 Get child's alt attibute and set caption

//2. Add an overlay
var overlay = jQuery('<div id="overlay"> </div>');
overlay.appendTo(document.body)
  //2.1 Add an image
  //2.2 A caption

//3. When overlay is clicked 
$("#overlay").click(function(){
  $("#overlay").hide();
});
  //3.1 Hide the overlaycd ~
  