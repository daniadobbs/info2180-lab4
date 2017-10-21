
window.onload= function(){
	
	var winner=null; //keeps track of boundary hits
	var start= document.getElementById("start");
	var end=document.getElementById("end");
	var boundaries= document.querySelectorAll(".boundary");
	let _status= document.getElementById("status");
	var maze=document.getElementById("maze");
	//$(".boundary").onmouseover=turnRed;
	_status.textContent= "Click the S to begin";
	start.onclick=gameStart;
	end.onmouseover=gameEnd;
	maze.onmouseleave=noCheats;
	
  for(var i=0;i<boundaries.length;i++){
    boundaries[i].onmouseover=turnRed;
  }
  
  

function turnRed(){
	winner=false;//winner is set to false if boundary is crossed
	for(var i=0; i< boundaries.length; i++){
		boundaries[i].classList.add("youlose");
	}
	_status.textContent= "Awwwww better luck next time :( (Click the 'S' to play again)";
}//end of turnRed



function gameEnd(){
	if (winner){
		_status.textContent= "Congratulations! You Win! (Click the 'S' to play again)";	
	}
}//end of gameEnd



function gameStart(){
	winner=true;
	for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.remove("youlose");
    }
	_status.textContent="Try to get to the end without touching the borders";	
}//end gameStart



function restart(){
	start.onclick=gameStart;
}//end restart

function noCheats(){
	_status.textContent="Haha. No Cheating! (Click the 'S' to try again)";
	maze.onmouseleave=turnRed();//borders turn red if mouse leaves the maze after starting	
}

	

};//end of window.onload
