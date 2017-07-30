var simonGame = {
	COUNT: 0,
	PATTERN: [],
	SOUND:[{file:'sounds/sa.mp3'},{file:'sounds/re.mp3'},{file:'sounds/ga.mp3'},{file:'sounds/ma.mp3'},{file:'sounds/pa.mp3'},{file:'sounds/dha.mp3'},{file:'sounds/nee.mp3'}],
	patternGen: function(param){
		var randomId;
		if(param == undefined){ 
			param = {result:'fail'};
		}
		randomId = Math.floor(Math.random() * 7);
		simonGame.PATTERN.push(randomId);
		if(simonGame.COUNT > 20){
			alert("You have won the game!!");
			window.location.reload(true);
		} else if(simonGame.COUNT === 0 || param.result==='success'){
			simonGame.COUNT += 1;
			handler.countDisplay();
			handler.patternRepeatPlayer();	
		} else {
			window.location.reload(true);
		}
	} //close patternGen
} //close simonGame
	




var handler = {
	countRepPlayer: 0,
	divs:[0,1,2,3,4,5,6],
	effect: function(id){
	   var img = document.getElementById(id);
	   if(img !== null && id !== undefined){
			$( img ).fadeIn(100).fadeOut(100).fadeIn(100);//fadeOut(200).fadeIn(200);
			//debugger;
			var audio = new Audio(simonGame.SOUND[id].file);
			audio.play();
			//console.log("id inside effect " + id)
		}
	},//close effect
	countDisplay: function(){
		document.getElementById("count").innerHTML = "Count: " + simonGame.COUNT;
	}, //close countIncrease
	userInput: function(){
		var userPattern = new Array();var id;var success = true;
		 function handleWrongInput(){
			console.log(" WRONG USER INPUT ");
					if($('.chkStrict:checked').val() === "on"){
						var audio = new Audio('sounds/wrong.mp3');
						audio.play();
						setTimeout(function(){window.location.reload(true)},1000);
					} else {
						console.log("inside else " );
						//debugger;
						var audio = new Audio('sounds/wrong.mp3');
						audio.play();
						setTimeout(function(){handler.patternRepeatPlayer()},1200); //this is getting called recursivelly rather	 
						 
					}
		}
		console.log("Isde user in");
		handler.divs.forEach(function(div){	
				var img = document.getElementById(div);
				img.onclick = function(){
					var id = parseInt(img.id,10);
					userPattern.push(id);
					handler.effect(id);
					console.log(" div clicked " + id + " u p " + userPattern);
					if(userPattern.indexOf(id) !== simonGame.PATTERN.indexOf(id)){
						console.log(" if ");
						handleWrongInput();
					} else if(userPattern.length === simonGame.PATTERN.length){
						setTimeout(function(){simonGame.patternGen({result:"success"})},1200);
					}
				}
				
		});	console.log(" up " + userPattern + " SGP " + simonGame.PATTERN);
		
	},
	patternRepeatPlayer: function(param){
		var repeater = setInterval(function(){
				handler.effect(simonGame.PATTERN[handler.countRepPlayer]);
				handler.countRepPlayer += 1;
				if(handler.countRepPlayer > simonGame.COUNT){ //If all ids inside pattern has been played, clearInterval, reset repeat count and call patternMatch.
					clearInterval(repeater);
						handler.countRepPlayer = 0;
						handler.userInput();
				}
			},1000);//close sestInterval
	} //close patternRepeatPlayer

}	
















