/**
 * This is a game that spawns sub-games 
 * 
 */
(function(node, channel) {
			
	// The client stages / steps and parameters 
	// are loaded. In this case from the file system, but it
	// could be from database. Everything should be loaded beforehand
	var client = channel.require('./includes/game.client'); // path needs to be resolved at exec time;
	
	// The logic for this game is also loaded
	var logic = channel.require('./includes/game.logic');  // path needs to be resolved at exec time;
	
	game.plot.addStage(logic.stages.tutorialStage);
	game.plot.addStage(logic.stages.gameStage);
	game.plot.addStage(logic.stages.questionnaireStage);
	
	// Set the game plot: the order and the conditions / repetitions
	// under which the stages of this game are executed
	
	game.plot.init()
		.next('tutorial')
		.next('game')
		.next('questionnaire')
		.gameover();	
		
	return game;
	
})(node, channel);