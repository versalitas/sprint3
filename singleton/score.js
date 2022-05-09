

class Score {
  
  constructor(){
    
    this.score = []
    if (!instance) {
      instance = this;
  }

    return instance;
  }



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
    }
  }

  
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
   }
 }

module.exports = Score;