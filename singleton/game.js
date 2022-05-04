
//require modules
const Player = require("./player.js");
const Score = require("./score.js");


class Game{

    constructor(){
    
     this.gamePlayers = [];
     this.scoreBoard = new Score();
     // define scoreboard
     
    }
    //add player to game
    
    addPlayer (playerName) {
    const player = new Player(playerName);
    return this.gamePlayers.push(player);
    }

    eliminatePlayer (playerName) {
        

     
    }
    


//export
module.exports = Game();