/**
 * Extra api... to be continued
 */


// Explanations of API

game.plot.init() // deletes current queue of stages
game.plot.next() // sets the next stage stage/step to be executed

game.plot.getNext(step) // returns the next


game.play() 	// go through all the stages of the game plot or until a gameover is called
				// depending on the \'onstepdone\' property may wait or not before executing
				// the next step

game.start()	// runs the init callback and the first stage returned by the game plot obj


game.exec(stage)// executes a stage withouth a context to the position in the game plot
								
				

// node Remotes
// remote commands

// Client
node.remote.register(name, cb, manifest) // register a functions that can be executed remotely

// Server

node.remote.getAvailableMethods(client);

node.remote.setup(args, clients); // remote setup. See current node.setup

node.remote.gameplot('add');

node.remote.gamecommand(args, clients); // play / pause / resume / exec / step / 

node.remote.env(args, clients);


// channel startGame


channel.startSubGame = function(game) {
	
	
	node.game.pl.alias(CLIENT_A, 'RESPONDENT');
	
	node.remote.env('BIDDER', CLIENT_A.id, CLIENT_B);
	node.remote.env('RESPONDENT', CLIENT_B.id, CLIENT_A);
	
	node.remote.gamecommand('exec', 'respondent', CLIENT_B);
	node.remote.gamecommand('exec', 'bidder', CLIENT_A);
}
