
// one minute to learn and a lifetime to master...!!!
//https://stackoverflow.com/questions/
//1479319/simplest-cleanest-way-to-implement-a-singleton-in-javascript
// https://medium.com/swlh/node-js-and-singleton-pattern-7b08d11c726a

class Score {
  constructor(){
    
    if(!this.instance){
      this.instance = this; 
      this.scoreCount = [];
     
  }
   return this.instance;
  }
  
 
}

module.exports = Score;