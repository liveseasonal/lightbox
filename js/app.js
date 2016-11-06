//When an image is clicked you go to a dead end

//Solution create an overlay with a large image

//When saving the jquery object to a variable, it is convention to add a $ in front of the variable name.
var $overlay = $('<div id="overlay"> </div>');
var $image = $("<img>") 

$overlay.append($image)

//2. Add an overlay
$("body").append($overlay)
  //2.1 Add an image
  //2.2 A caption


//1. Capture the click event on a link to an image

$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // console.log(href);


$image.attr("src", imageLocation);

$overlay.show();
  //1.1. Show the overlay
  //1.2 Updated overlay with the image in the link
  //1.3 Get child's alt attibute and set caption
});


//3. When overlay is clicked 
$("#overlay").click(function(){
  //3.1 Hide the overlay
  $("#overlay").hide();
});
  
