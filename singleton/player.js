
class Player{
    constructor(playerName){
        this._name = playerName;
        this._score = 0; 
   }
    //getster
    get name(){
     return this._name;
    }

    get score(){
        return this._score;
    }
    
    //setter
    set score(scores){
    this._score += scores;
    }

}
module.exports = Player;