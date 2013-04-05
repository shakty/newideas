# Client connects

Is it a reconnecting player that previously disconnected ? (Cookie / local storage token)
  YES -> Is his game-session still active ?
    YES -> redirect him there / restore his place in the game

Can he join ? A set of requirements are checked   
  - technical requirements (as specified by nodegame)
  - user requirements (e.g. browser / id checkings: has the user already participated?)


Can user potentially join?
  - NO -> inform the player / redirects to another page of players that cannot play 
  - YES -> 
           1. emit PCONNECT,
           2. then initialize the client with the game stages and variables, 
           3. then adds it to pool of available players waiting for a game to start


# Client disconnects

His position in the game is saved

- Was he playing ? 
  - NO -> nothing happens
  - YES -> Do we still have enough player? 
    - YES -> game continues
    - NO -> Can players finish the current step / stage ?
      - YES -> Other players finish the current step / stage, then procedure for NO (below) is triggered
      - NO -> game waits and eventually fails if no recovery is possible: 
        1. game is paused in all the clients
        2. A countdown starts and we wait for the player to reconnect / or for another player to connect
        3. Time is up. An additional player can be requested / retrieved from the list of eligible players
        4. A FAILURE is declared, and catched. By default gameover is declared, but users could be ask to
              play another stage that does not require a minimum number of players (e.g. a final questionnaire)
        
 