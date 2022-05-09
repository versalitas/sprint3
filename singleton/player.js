
class Player{
    constructor(playerName){
        this._name = playerName;
        this._score = 0; 
   }

    get name(){
     return this._name;
    }

    get score(){
        return this._score;
    }
    
    set score(scores){
    this._score += scores;
    }

}
module.exports = Player;