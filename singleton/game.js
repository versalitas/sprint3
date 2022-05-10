
//require modules
const Player = require("./player.js");
const Score = require("./score.js");

class Game {

    constructor(){
    //terrible matryoska?? 
    this.scoreBoard = new Score();
    }
    
    //methods

    //add player to game
    addPlayer(playerName) {
        let player = new Player(playerName);
        return this.scoreBoard.scoreCount.push(player);
    }
    
    //locates player index
    findPlayerIndex(playerName){
        return this.scoreBoard.scoreCount.findIndex(obj => obj.name === playerName);
    }
    
    //method addScore
    addScore(playerName, score){ 
        let playerIndex = this.findPlayerIndex(playerName);
        //random dice score generator
        if(playerIndex > -1) {
            this.scoreBoard.scoreCount[playerIndex].score(score);
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

    //finds index of maxScore
    findMaxScoreIndex(){
        const sortedScore = sortScore();
        const maxScore = sortedScore[0];
        return this.scoreBoard.scoreCount.findIndex(obj => obj.score === maxScore);
    }
 

   //show score
   showScore(){
    const sortedScore = sortScore();
    console.log(`Scoreboard: ${sortedScore}`);
   }
 

  //showWinner
   showWinner(){
    const sortedScore = sortScore();
    const playerIndex = findMaxScoreIndex();
    console.log(`The winner is ${this.scoreBoard.scoreCount[playerIndex].name}`);
  }

  playGame(turns){
    if(turns > 0) {
    let isTongo = false;
        for(let i = 0; i < turns; i++){
            //realmente estoy pescando el objeto del array del scoreboard?
            for(let player in this.scoreBoard.scoreCount){
                isTongo = ((Math.random() * 10) === 1); 
                isTongo? this.removeScore(player.name):this.addScore(player.name);
            }
         }
       } else {
            console.log('Bye, bye');
       }   
    }
}
//export
module.exports = Game; 

//rememebering https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
