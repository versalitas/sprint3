
//require modules
const Player = require("./player.js");
const Score = require("./score.js");

class Game{

    constructor(){
    
    this.players = [];
    this.scoreBoard = new Score();
     
    }

    //add player to game
    
    addPlayer (playerName) {
        const player = new Player(playerName);
        return this.players.push(player);
    }

   //  winner
   showWinner(){

    const max = Math.max.apply(null, this.scoreBoard.score);
    const index = this.scoreBoard.score.indexOf(max);

    console.log(`And the winner is ${this.players[index]}!`);
  }
    
    
    play(turns){
        if (turns > 0) {
        for(let i = 0; i < turns; i++){
            for(let player of this.players){
            this.scoreBoard.addScore(player);
            console.log(player);
            }
         } 
       }
     } 
    }    

    

//export
module.exports = Game;