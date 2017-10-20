
//alert("this works");
//$(document).ready(function(){});
window.onload= function(){
	
	var winner=true; //keeps track of boundary hits
	var start= document.getElementById("start");
	var end=document.getElementById("end");
	var boundaries= document.querySelectorAll(".boundary");
	//$(".boundary").onmouseover=turnRed;
	
  for(var i=0;i<boundaries.length;i++){
    boundaries[i].onmouseover=turnRed;
  }
  



function turnRed(){
	//alert("this function works");
  //$("boundary1").addClassName("youlose"); //adds youlose CSS property (turns boundary red if touched by mouse)
 for(var i=0; i< boundaries.length; i++){
  boundaries[i].classList.add("youlose");
}
}

};
