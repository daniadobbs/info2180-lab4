"use strict";

var start= $$('#start');
var end= $$('#end');
var winner=true;//keeps track of whether or not the mouse hits a boundary
var status= $$('#status'); //changes status if player wins/loses/restarts
var boundaries=document.querySelectorAll(".boundary")//selects all boundaries

window.onload=function(){
    start.onclick= gameStart;
    end.onmouseover= gameOver;

}

function Loser(){
  if(winner){
    status.textContent="Winner!";
  }
  else{
      status.textContent="You Lose! Better Luck Next Time."
  }
}


function gameStart(){
  winner=true;
  status.textContent="Make it to the end. Good Luck!"
  for (var i = 0; i < boundary.length; i++) {
        boundary[i].removeClassName("youlose");
    }

}


function turnRed(){
  winner=false;

  for(var i=0; i= boundaries.length-1;i++){
    boundaries[i].addClassName= "youlose";
  }
}

function gameOver(){

}