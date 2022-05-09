
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
    return this.players.push(player);
    }
    
   
    play(turns){
        
        let isTongo = false;
        if (turns > 0) {  
            for( let i = 0; i > turns; i++ ){
                for (let j = 0;  j < this.players.length; j++){
                    isTongo = ((Math.random() * 10) === 1);
                    if(isTongo) {
                        removeScore(this.scoreBoard[i].this.score);
                    } else {
                        addScore(this.scoreBoard[i]);
                    }
                } 
            }
        } else {
            console.log('Bye, bye');
        }   
    }
}
//export
module.exports = Game;