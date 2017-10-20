"use strict";
var winner=true; //keeps track of boundary hits
var start= document.getElementById("start");
var end=document.getElementById("end");

window.onload= function(){
  $("boundary1").onmouseover= turnRed;
}

function turnRed(){
  $("boundary1").addClassName("youlose"); //adds youlose CSS property (turns boundary red if touched by mouse)
}

