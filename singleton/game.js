//rememebering https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/

//require modules
const Player = require("./player.js");
const Score = require("./score.js");

class Game{

    constructor(){
    
    this.scoreBoard = new Score();
    //game object containing Score object containing an with a Player object inside
    //containing another object...
   }

    //methods

    //add player to game
    addPlayer(playerName) {
        let player = new Player(playerName);
        return this.scoreBoard.scoreCount.push(player);
    }
    
    findPlayerIndex(playerName){
        return this.scoreBoard.score.findIndex(obj => obj.name === playerName);
    }
    
   //method addScore
    addScore(playerName){ 
        let playerIndex = this.findPlayerIndex(playerName);
        //random dice score generator
        let score = Math.random() * 5 + 1;
        if(playerIndex > -1) {
            this.scoreboard.scoreCount[playerIndex].score(score);
        }
   } 

   removeScore(playerName){
       let playerIndex = this.findPlayerIndex(playerName);
    //random generator
        let score = (Math.random() * 5 + 1) * -1;
        if(playerIndex > -1) {
            this.scoreBoard.scoreCount[playerIndex].score(score);
        }
   }

   //sort score
   sortScore(){
       return this.scoreBoard.scoreCount.sort((a,b) => {return b.score - a.score});
   }
 

   //show score
   
  showScore(){
    const sortedScore = sortScore();
    console.log(`Scoreboard: ${sortedScore}`);
   }
 

  //showWinner

  showWinner(){
    const sortedScore = sortScore();
    const playerIndex = findMaxScore();
    console.log(`The winner is ${this.scoreBoard.scoreCount[playerIndex].name}`);
  }

//a bit bizarre iterating through the gamer list and then calling
    //methods based on looking up index...
    
    playGame(turns){
        if(turns > 0) {
        let isTongo = false;
        for(let i = 0; i < turns; i++){
            for(let j = 0; j < this.scoreBoard.score.length; j++){
                isTongo = ((Math.random() * 10) === 1); 
                if(isTongo){
                    this.scoreBoard.removeScore(this.scoreBoard.scoreCount[j].name);
                } else { 
                    this.scoreBoard.addScore(this.scoreBoard.scoreCount[j].name);
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