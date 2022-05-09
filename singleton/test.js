

class Game{

constructor(){

    this.scoreBoard = [{name:'Anna', score : 25}, {name:'Jon', score : 5}, {name:'Berta', score : 15}];
}


addScore(playerName){ 
    let score = Math.random() * 10 + 1;
    let playerIndex = this.scoreBoard.findIndex(player => player.name === playerName);
    if(playerIndex > -1) {
       this.scoreBoard[playerIndex] += score;
    }
  }


showWinner(scoreBoard){

    const sortedScore = this.scoreBoard.sort((a,b) => {return b.score - a.score});
    console.log(`The winner is ${sortedScore[0].name}`);
  
  }

}

let game = new Game();
game.showWinner();