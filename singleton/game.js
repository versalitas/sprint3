
//require modules
const Player = require("./player.js");
const Score = require("./score.js");

class Game{

    constructor(){
    
    this.players = [];
    this.scoreBoard = new Score();
<<<<<<< HEAD
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
=======
     
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

    

>>>>>>> 07b7f4abd8d37b7cf6fc40c57dbbc36244f31484
//export
module.exports = Game;