# How the game starts

- Clients that passed the requirements tests are inserted in the PLIST object
- After PLIST.length > MIN-PLAYERS the game can potentially start
- Some players could still be arriving to the game room (being redirected from the waiting room), so a countdown
  restarts after the last players is added to the PLIST. When the countdown reaches 0 the game is started
- If PLIST.LENGTH >= MAX-PLAYERS the countdown is not restarted anymore and the game starts


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