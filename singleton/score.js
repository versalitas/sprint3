
<<<<<<< HEAD
=======
//this class is implemented as singleton


>>>>>>> 07b7f4abd8d37b7cf6fc40c57dbbc36244f31484

class Score {
  
  constructor(){
    
<<<<<<< HEAD
    this.score = []
    if (!instance) {
      instance = this;
  }
=======
    if (!Score.instance) {
      Score.instance = this;
      this.score = [];
    }
>>>>>>> 07b7f4abd8d37b7cf6fc40c57dbbc36244f31484

    return Score.instance;
  
  }


<<<<<<< HEAD

// https://medium.com/swlh/node-js-and-singleton-pattern-7b08d11c726a
/*
  class Score  {
    constructor() {
        throw new Error('Use Score.getInstance()');
    }
     static getInstance() {
        if (!Score.instance) {
            Score.instance = new PrivateScore();
        }
        return Score.instance;
    }

  */

  //method addScore
  upDateScore(playerName) { 
    let score = Math.random() * 10 + 1;
    let playerIndex = this.score.findIndex(player => player.name === playerName);
    if(playerIndex > -1) {
       this.score[playerIndex].scores += score;
=======
  addScore(playerName) { 
    let newScore = Math.random() * 10 + 1;
    const playerIndex = this.score.findIndex(player => player.name === playerName);
    if(playerIndex > -1) {
       this.score[playerIndex].scores += newScore;
>>>>>>> 07b7f4abd8d37b7cf6fc40c57dbbc36244f31484
    }
  }

  
<<<<<<< HEAD
  removeScore(playerName){
    let score = Math.random() * 10 + 1;
    const playerIndex = this.scoreBoard.findIndex(player => player.name === playerName);
    if(playerIndex > -1) {
      this.score[playerIndex].scores -= score;
   }

  }
   showWinner(){
   console.log(`And the winner is ${this.score.sort()[0].player}!`);
   }
   
  showScore(){
   console.log(`Scoreboard: ${this.score}`);
=======
 
  removeScore(playerName, score){
    let newScore = Math.random() * 10 + 1;
    const playerIndex = this.score.findIndex(player => player.name === playerName);
    if(playerIndex > -1) {
      this.score[playerIndex].scores -= newScore;
    }
  }

 
  
   // to do sort out score
   showScore(){
    console.log(`Scoreboard: ${this.score.sort()}`);
>>>>>>> 07b7f4abd8d37b7cf6fc40c57dbbc36244f31484
   }
 }

module.exports = Score;