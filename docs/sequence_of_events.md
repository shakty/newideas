# Clients connects

Is it a reconnecting player that previously disconnected ? (Cookie / local storage token)
  YES -> Is his game-session still active ?
    YES -> redirect him there

Can he join ? A set of requirements are checked   
  - technical requirements (as specified by nodegame)
  - user requirements (e.g. browser / id checkings: has the user already participated?)

Can user potentially join? 
  - YES -> does the game need more players ? 
    - YES -> 1. emit PCONNECT,
             2. then initialize the client with the game stages and variables, 
             3. then adds it to the PLIST
    - NO -> redirects to another page of eligible players
  - NO -> redirects to another page of players that cannot play

# Player disconnects

The latest player state is saved

Do we still have enough player? 
  YES -> game continues
  NO -> Can players finish the current step / stage ?
    YES -> 1. Other players finish the current step / stage, then procedure for NO (below) is triggered
    NO -> 1. game is paused in all the clients
          2. A countdown starts and we wait for the player to reconnect / or for another player to connect
          3. Time is up. An additional player can be requested / retrieved from the list of eligible players
          4. A FAILURE is declared, and catched. By default gameover is declared, but users could be ask to
              play another stage that does not require a minimum number of players (e.g. a final questionnaire)
        

        
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


 