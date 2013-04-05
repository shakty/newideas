// Examples of alternative game plots	
							
game.plot.init()
	.next('tutorial')
	.repeat(6, 'game')
	.next('questionnaire')
	.gameover();


game.plot.init()
	.next('tutorial')
	.loop('game', function() { //doloop and whileloop available
			if (node.game.pl.avg('win') > 10) 
				return true;
			})
	.next('questionnaire')
	.gameover();
	

game.plot.init()
	.next('tutorial'); // The stage after tutorial is decided and added at the end of the tutorial stage
			
game.plot.init()
	.next('tutorial')
	.fork(function(plot){
		if (game.globals.A) {
			return plot.repeat(6, 'gameA');
		}
		else {
			return plot.repeat(6, 'gameB');
		}
	})
	.next('questionnaire')
	.gameover();