

//rememebering https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/

//require modules
const Player = require("./player.js");
const Score = require("./score.js");

class Game{

    constructor(){
    this.players = [];
    this.scoreBoard = new Score();
    /*this.scoreBoard = Score.getInstance();*/
     
     
    }
    
    //add player to game
    addPlayer(playerName) {
    const player = new Player(playerName);
    return this.players.push(player)
    }
    
    //a bit bizarre iterating through the gamer list and then calling
    //methods based on looking up index...
    playGame(turns){

    let isTongo = false;
    for(let i = 0; i < turns; i++){
            for(let j = 0; j < this.player.length; j++){
                isTongo = ((Math.random() * 10) === 1); 
                if(isTongo){
                    removeScore(this.player[j].name);
                } else { 
                    addScore(this.player[j].name);
                }
            }
        }

        this.scoreBoard.showWinner();
        this.scoreBoard.showScore();
     }
   
}
//export
module.exports = Game;