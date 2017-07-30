var simonGame = {
		COUNT: 1,
		PATTERN: [],
    SOUND:[{file:'sounds/sa.mp3'},{file:'sounds/re.mp3'},{file:'sounds/ga.mp3'},{file:'sounds/ma.mp3'},{file:'sounds/pa.mp3'},{file:'sounds/dha.mp3'},{file:'sounds/nee.mp3'}],
		patternGenerator: function(){
        var callCount = 0;
				var randomId;
				var repeater = setInterval(function(){
					if(simonGame.PATTERN.length === 0){
								randomId = Math.floor(Math.random() * 7);
								simonGame.PATTERN.push(randomId);
								simonGame.COUNT += 1;
								handlers.effect(simonGame.PATTERN[callCount]);
						}
					else if(simonGame.COUNT > callCount){
						console.log("COunt " + simonGame.COUNT + "callCount " + callCount)
						handlers.effect(simonGame.PATTERN[callCount]);
						callCount += 1;
					} else {
							randomId = Math.floor(Math.random() * 7);
							simonGame.PATTERN.push(randomId);
							handlers.effect(simonGame.PATTERN[callCount]);
							clearInterval(repeater);
					}
				},1000);
				//call patternMatcher
				simonGame.patternMatcher();
		},
		patternMatcher: function(){
			var userPattern = [];
			var index;
			$('img').click(function(){
				index = 0;
				if(simonGame.PATTERN.indexOf((this.id) === index){
					index += 1;
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

		setTimeout(
		if(simonGame.PATTERN.length - 1 === index ){ //user pattern match success
				// Increase COUNT  BY 1 call // Display the COUNT Value // Call Pattern pattern generator
				//If Count is 20 alert User won the Game and reload the Game.
				if(simonGame.PATTERN.length === 20){
							alert('Congratzulation, You have won the Game.');
							window.location.reload(true);
					} else {
							simonGame.COUNT += 1;
							hanlers.displayCount();
							simonGame.patternGenerator();
					}
			}
						else {
							alert('No Response reloading the game');
							window.location.reload(true);
						},1000*simonGame.COUNT+2000)}

var handlers = {
	start: function(){
    simonGame.patternGenerator();
	},
	effect: function(id){
		var img = document.getElementById(id);
		$( img ).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio(simonGame.SOUND[id].file);
    audio.play();
	},
	displayCount: function(){
		 document.getElementsById("count").innerHTML=simonGame.COUNT;
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
