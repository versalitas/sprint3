
// one minute to learn and a lifetime to master...!!!
//https://stackoverflow.com/questions/
//1479319/simplest-cleanest-way-to-implement-a-singleton-in-javascript
// https://medium.com/swlh/node-js-and-singleton-pattern-7b08d11c726a

class Score {
  constructor(){
    
    if(!this.instance){
      this.instance = this; 
      this.score = [];
     
  }
   return this.instance;
  }

   //method addScore
   addScore(playerName){ 
    let score = Math.random() * 10 + 1;
    let playerIndex = this.score.findIndex(player => player.name === playerName);
    if(playerIndex > -1) {
       this.score[playerIndex] += score;
    }
  }

  
   removeScore(playerName){
    let score = Math.random() * 10 + 1;
    const playerIndex = this.score.findIndex(player => player.name === playerName);
    if(playerIndex > -1) {
      this.score[playerIndex] -= score;
   }

  }
   //show score
   
  showScore(){
    const sortedScore = this.score.sort((a,b) => {return b.score - a.score});
    console.log(`Scoreboard: ${sortedScore}`);
   }
 

  //showWinner

  showWinner(){
    const sortedScore = this.score.sort((a,b) => {return b.score - a.score});
    console.log(`The winner is ${sortedScore[0].name}`);
  
  }

}

module.exports = Score;