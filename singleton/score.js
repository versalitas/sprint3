
//this class is implemented as singleton



class Score {
 
  constructor(){
    
    if (!Score.instance) {
      Score.instance = this;
      this.score = [];
    }

    return Score.instance;
  
  }


  addScore(playerName) { 
    let newScore = Math.random() * 10 + 1;
    const playerIndex = this.score.findIndex(player => player.name === playerName);
    if(playerIndex > -1) {
       this.score[playerIndex].scores += newScore;
    }
  }

  
 
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
   }
 
}

module.exports = Score;