
let instance = null;

class Score {
 
  constructor(){
    this.score = [];
    if (!instance) {
      instance = this;
    }

    return instance;
  }
  //method addScore
  addScore(playerName, score){ 
    const playerIndex = this.score.findIndex(player => player.name === playerName):
    if (playerIndex > -1) {
       this.score[playerIndex].scores += score;

    }
    
  }

  //method removeScore
  removeScore(playerName, score){
    const playerIndex = this.score.findIndex(player => player.name === playerName);
    if(playerIndex > -1) {
      this.score[playerIndex].scores -= score; 
    }

  }

   showWinner(){
   console.log(`And the winner is ${this.score.sort()[0].Player}!`);
   }
   
   showScore(){
    console.log(`Scoreboard: ${this.score.sort()}`);
   }
 
}

//The instance of the class is exported module.exports = new Singleton(). 
//Node.JS will cache and reuse the same object each time it’s required.
//https://ozenero.com/how-to-implement-singleton-in-node-js-example

//module.exports = new Score();

module.exports = score;