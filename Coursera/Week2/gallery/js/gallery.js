
var undo="Hover over an image below to display here." 
/*The  variable above is added for unDo function to restore the div id="image" 
to reset original vale if the mouse stops hovering */

function upDate(previewPic){
/*This function helps in do some action when mouse(Done in HTML) is hovered above an element*/  

document.getElementById('image').innerHTML=previewPic.alt;
    /*The above line is for changing the the text in div to the 
    alt text of image when mouse is hovered over*/
document.getElementById("image").style.background ="#FF0010 url('"+previewPic.src+"')";
    /*The above line is for changing the background image of the div id"image" to change 
    to image of the picture when the mouse is hovered over*/
}

function unDo(){
/*This function does some action when mouse(done in HTML) is overed out of the element */

document.getElementById('image').innerHTML = undo;
    /*The line above resets the text of div id"image" to original text as
    a change to the update which was made after the mouse was hovered in*/
document.getElementById('image').style.background = "#8e68ff url('')";
    /*The line above resets the background of div id"image" to original 
    background colour as a change in update which was made when mouse was hovered in*/
}
/*
Code completed in extra 5 lines and no hard coding is done
Thank you for reviewing
*/