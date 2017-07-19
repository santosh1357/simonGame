var simonGame = {
	COUNT: 0,
	PATTERN: [],
	SOUND:[{file:'sounds/sa.mp3'},{file:'sounds/re.mp3'},{file:'sounds/ga.mp3'},{file:'sounds/ma.mp3'},{file:'sounds/pa.mp3'},{file:'sounds/dha.mp3'},{file:'sounds/nee.mp3'}],
	patternGen: function(){
		var randomId;
		randomId = Math.floor(Math.random() * 7);
		simonGame.PATTERN.push(randomId);
		if(simonGame.COUNT > 20){
			alert("You have won the game!!");
			window.location.reload(true);
		}
		simonGame.COUNT += 1;
		//debugger;
		//console.log("increase count true calling count display " + simonGame.COUNT);
		handler.countDisplay();
		//console.log("count gen true calling patternPlayer with PATTERN " + simonGame.PATTERN );
		handler.patternRepeatPlayer();
	}, //close patternGen
	patternMatcher: function(genPattern){
		//console.log("inside patternMatch");
		var genPattern = simonGame.patternGen;
		//setTimeout(function(){
			//console.log("PATEERN: " + simonGame.PATTERN + "COUNT " + simonGame.COUNT );
			//calling user input
			console.log("calling user Input");
			handler.userInput();
			setTimeout(function(){
				if(handler.repeatFlag === false){  //execute count gen only if repeat flag is false inside user INPUT
					genPattern();
				}
			},simonGame.COUNT*2000);
		 
			//console.log("pattern check true, calling pattern gen");
			
		//},simonGame.COUNT*5000); //close setTimeout
		
	}, //close patternMatcher
	
	
	
} //close simonGame

var handler = {
	countRepPlayer: 0,
	repeatFlag: false,
	patternRepeatPlayer: function(){
		var repeater = setInterval(function(){
				handler.effect(simonGame.PATTERN[handler.countRepPlayer]);
				handler.countRepPlayer += 1;
				if(handler.countRepPlayer > simonGame.COUNT){
					clearInterval(repeater);
					setTimeout(function(){simonGame.patternMatcher();},1000);
					handler.countRepPlayer = 0;
				}
			},1000);//close sestInterval
		
	}, //close patternRepeatPlayer
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
		var userPattern = new Array();var id;
		 $('img').click(function(){
				//console.log("Image Clicked by User " + this.id + simonGame.PATTERN);userPattern.push(this.id);
				//console.log("userPattern.indexOf(this.id) !== simonGame.PATEERN(this.id) " + userPattern.indexOf(this.id) !== simonGame.PATTERN.indexOf(this.id));						
				id = parseInt(this.id,10);console.log(" push ");
				userPattern.push(id);
				handler.effect(id);
				console.log(" user " + userPattern); 
				console.log(" pattern " + simonGame.PATTERN);
				if(userPattern.indexOf(id) !== simonGame.PATTERN.indexOf(id)){
					console.log(" WRONG USER INPUT ");
					if($('.chkStrict:checked').val() === "on"){
						var audio = new Audio('sounds/wrong.mp3');
						audio.play();
						setTimeout(function(){window.location.reload(true)},1000);
					} else {
						console.log("inside else " );
						var audio = new Audio('sounds/wrong.mp3');
						audio.play();
						userPattern.length = 0;
						handler.repeatFlag = true;
						handler.patternRepeatPlayer();
						return ;
						
					}
				}
				
				if(userPattern.length === simonGame.PATTERN.length){
					userPattern.length = 0;
				}
		});		
				//console.log(" Index Of this.id inside userPattern " + userPattern.indexOf(this.id));
				//console.log(" Index Of this.id inside PATTERN " + simonGame.PATTERN.indexOf(this.id));	
			
		
	}
	
	
} //close handler