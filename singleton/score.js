class Score {
 
  constructor(){
    this.score = [];
    if (!instance) {
      instance = this;
    }

    return instance;
  }
  //method addScore
  uppDateScore(playerName) { 
    let score = Math.random() * 10 + 1;
    let sign = (Math.floor(Math.random() * 2) % 2 === 0 ); 
    
    const playerIndex = this.scoreBoard.findIndex(player => player.name === playerName);
    if (playerIndex > -1 && sign) {
       this.score[playerIndex].scores += score;
    } 
    if (playerIndex > -1 && sign === false) {
        this.score[playerIndex].scores -= score;
    } 
    
  }
  /*
  //method removeScore
  removeScore(playerName, score){
    const playerIndex = this.score.findIndex(player => player.name === playerName);
    if(playerIndex > -1) {
      this.score[playerIndex].scores -= score; 
    }

  }
  */
   showWinner(){
   console.log(`And the winner is ${this.score.sort()[0].player}!`);
   }
   
   showScore(){
    console.log(`Scoreboard: ${this.score.sort()}`);
   }
 
}

module.exports = Score();