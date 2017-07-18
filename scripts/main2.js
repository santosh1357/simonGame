var simonGame = {
		COUNT: 0,
		PATTERN: [],
		SOUND:[{file:'sounds/sa.mp3'},{file:'sounds/re.mp3'},{file:'sounds/ga.mp3'},{file:'sounds/ma.mp3'},{file:'sounds/pa.mp3'},{file:'sounds/dha.mp3'},{file:'sounds/nee.mp3'}],
		//If Count is zero;get randomId, push randomId into pattern;increase Count;call effect func and call countUpdate Func
		//If Count is not zero;for each member of pattern array call effect fun;
		//then DO - get randomId, push randomId into pattern;increase Count;call effect func and call countUpdate Func
		//Finally Call PatternMatcher fun.
		patternGenerator: function(){
				var randomId;
				randomId = Math.floor(Math.random() * 7);
				simonGame.PATTERN.push(randomId);
				var offset = 0;
				simonGame.PATTERN.forEach(function(id){
					setTimeout(function(){
						handlers.effect(id);
					}, 1000 + offset);
 						offset += 1000;
				});
				console.log("calling pm");
				//setTimeout(function(){
					//simonGame.patternMatcher();
				//}1000*simonGame.COUNT+2000);
		},
		patternMatcher: function(callPatternGenerator){
			var userPattern = [];var imageClickCount = 0;var flag = true;callPatternGenerator = simonGame.callPatternGenerator;
				console.log("callPatternGenerator888");
			    setTimeout(
				function(){
					callPatternGenerator();
				),2000};
			//return;
		},  //close PaternMatcher	
			/*$('img').click(function(){       //captures the user input of clicking images.
				userPattern.push(this.id);console.log(" imgCLK " + imageClickCount + " userP " + userPattern + " GamPatt " + simonGame.PATTERN );
				if(simonGame.PATTERN[imageClickCount] == userPattern[imageClickCount]) {
					setTimeout(function(){
						handlers.effect(userPattern[imageClickCount]);
						imageClickCount += 1;
					},1000*imageClickCount);
				} else if(simonGame.PATTERN[imageClickCount] !== userPattern[imageClickCount]){
					var audio = new Audio('sounds/wrong.mp3');
						if($('.chkStrict:checked').val() === "on"){
						var audio = new Audio('sounds/wrong.mp3');
						audio.play();
						setTimeout(function(){window.location.reload(true)},1000);
					} else {
						var audio = new Audio('sounds/wrong.mp3');
						audio.play();var offset = 0;
						userPattern = [];
						simonGame.PATTERN.forEach(function(id){
							setTimeout(function(){
								handlers.effect(id);
							},1000*offset);
							offset += 1;
						});	
					}	
				}	
			}); */
		callPatternGenerator:function(){	
			//setTimeout(function(){
				//if(simonGame.patternMatcher.flag == true){
					simonGame.COUNT += 1;
					handlers.displayCount();
					simonGame.patternGenerator();console.log("I");	
				//} 
			//},simonGame.COUNT*1000 + 5000);
		}	
			
	}	//close simon Game
		
		
		
		//patternMatcher2: function(){
			/*
			var userPattern = [];
			var index;
			$('img').click(function(){
				index = 0;var a = simonGame.PATTERN;var t = this.id;
				if(a.indexOf(t) === index){
					index += 1;
					console.log(simonGame.PATTERN.includes(this.id));
					console.log(this.id);
					console.log(simonGame.PATTERN);
					handlers.effect(this.id);
				} else {
					//if(strict checked is true) play sound wrong and reload the game
									if( $('.chkStrict:checked').val() === "on"){
												var audio = new Audio('sounds/wrong.mp3')
												audio.play();
												window.location.reload(true);
									} else{
						//play the wrong sound
						//call the patternGenerator to play the pattern again from start
												var audio = new Audio('sounds/wrong.mp3')
												audio.play();
												simonGame.patternGenerator();
										}
							}
			});  //closing imageClick Jquery callback
			//user pattern match success
					// Increase COUNT  BY 1 call // Display the COUNT Value // Call Pattern pattern generator
					//If Count is 20 alert User won the Game and reload the Game.
		setTimeout(function(){
			if((simonGame.PATTERN.length - 1) === index ){
				if(simonGame.PATTERN.length === 20){
							alert('Congratzulation, You have won the Game.');
							window.location.reload(true);
					} else {
							simonGame.COUNT += 1;
							handlers.displayCount();
							simonGame.patternGenerator();
					}
			}
						else {
							alert('No Response reloading the game');
							//window.location.reload(true);
						}},1000*simonGame.COUNT+10000)} */
		

var handlers = {
	COUNTREP: 0,
	start: function(){
    simonGame.patternGenerator();
	},
	effect: function(id){
		var img = document.getElementById(id);
		$( img ).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
		console.log("id " + id);
		var audio = new Audio(simonGame.SOUND[id].file);
		audio.play();
	},
	displayCount: function(){
		 document.getElementById("count").innerHTML = "Count: " + simonGame.COUNT;
	},
	patternPlayer: function(){
		//var clearCount = 0;
		var repeater = setInterval(function(){
			handlers.effect(simonGame.PATTERN[handlers.COUNTREP]);
			handlers.COUNTREP += 1;
			if(handlers.COUNTREP > simonGame.Count){
				clearInterval(repeater);
				handlers.COUNTREP == 0;
				simonGame.patternMatcher();
			}	
		},1000);
	}

}





















/*
function imageEffect(){
    $('img').click(function(){
        $(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // $('.selected').removeClass('selected');
    //$(this).addClass('selected');
    });
} //close function imageEffect

imageEffect();
*/
