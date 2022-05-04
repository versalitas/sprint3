
//require modules
const Player = require("./player.js");
const Score = require("./score.js");


class Game{

    constructor{
    this.players = [];
     // define scoreboard
     this.scoreBoard = new Score();
}

    //add player to game
    
    const addPlayer = (playerName) =>
     this.players.push(new Player(playerName));

 }



//export
module.exports = Game();