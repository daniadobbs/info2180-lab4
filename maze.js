
//alert("this works");
//$(document).ready(function(){});
window.onload= function(){
	
	var winner=null; //keeps track of boundary hits
	var start= document.getElementById("start");
	var end=document.getElementById("end");
	var boundaries= document.querySelectorAll(".boundary");
	let _status= document.getElementById("status");
	//$(".boundary").onmouseover=turnRed;
	
	start.onmouseover=gameStart;
	end.onmouseover=gameEnd;
	
  for(var i=0;i<boundaries.length;i++){
    boundaries[i].onmouseover=turnRed;
  }
  
  

function turnRed(){
	winner=false;
	for(var i=0; i< boundaries.length; i++){
		boundaries[i].classList.add("youlose");
	}
	//winner is set to false if boundary is crossed
	gameEnd(winner);//calls gameEnd function if mouse crosses boundary
}//end of turnRed



function gameEnd(winner){
	if (winner){
		alert("Congratulations! You Win!");
	}
	else if(winner===false){
		alert("Awwwww better luck next time");
	}
	restart;	
}//end of gameEnd



function gameStart(){
	winner=true;
	for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
	status.textContent="Try to get to the end without touching the borders";	
}//end gameStart



function restart(){
	start.onclick=gameStart;
}//end restart



	

};//end of window.onload
