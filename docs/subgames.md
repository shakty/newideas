# Game and subgames

A subgame is a *game room* inside the game. This is better than creating a new channel for the communication 
because  we do not need to keep track of the session across pages

## Anatomy

- A game room is composed by a set of players (subset of the players currently playing the parent game)
- One or more stages to be played in the clients
- One or more stages to be played in the logics
- Special variables to be set in the clients / logic
- A reference to the parent room from which it was created
- A list of aliases for the players (to obfuscate their real ID). 

## The parent game

Would have - among others - the following objects:

- a pool of players
- a list of active players playing in the game at the moment
- a list of rooms (each containing the elements indicated in section Anatomy)

### Nesting rooms and players' location

A game room can create other subgames / rooms. Imagine the following:

1. 10 clients arrives to the game address
2. 8 clients enter the game, 2 stays in the pool (not selected, but ready to jump in, if necessary)
3. Two groups are created, each of which is pushed into a separate game room - for the two conditions of the game
4. Players' "location" in the game is updated. They were in the main pool, then into the list of players, now they are in one of the rooms
5. In each room players are divided in two groups, assigned to two rooms
6. Their location in the game is again updated.  
7. When they are done, they exit the current room and return to the parent room
8 The player location in the game acts like a stack, new location goes on top of the previous one, and when terminated, it is removed and player goes back to the previous location

### Changes in the GameServer

The game server should be able to:
  - emitting the message into the correct game room, 
  - and also resolving a recipient alias name (e.g. who is the BIDDER in the game room 3?) 



