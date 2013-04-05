# How the game starts

- Clients that passed the requirements tests are inserted in the pool of available players (PlayerList type of Object)
- A number of requirements have been specified in order of the game to start (manual start is also possible)
- For example, after PLIST.length > MIN-PLAYERS the game can *potentially* start. 
- A countdown to the beginning of the game is launched.
- However, some players could still be arriving to the game room (being redirected from the waiting room), so the countdown
    restarts after the last players is added to the PLIST. When the countdown reaches 0 the game is started
- If PLIST.LENGTH >= MAX-PLAYERS the countdown is not restarted anymore and the game eventually starts


# Game statuses

INITIALIZING
INITIALIZED
STARTING (countdown on)
ONGOING (everything is ok)
PAUSING
PAUSED
RESUMING
ERROR (a fatal error occurred)
GAMEOVER (game finished)


## player entry status

NOT_ENOUGH_PLAYERS (before the game starts and during the game)
ENOUGH_PLAYERS
FULL
 
## failures