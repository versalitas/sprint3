
// import all that is requiered
const Game = require('./game');
//const prompt = require('prompt-sync')({sigint: true});

// declare instance of the game
let game = new Game();

// add participant
game.addPlayer("Anne");
game.addPlayer("Bo");
game.addPlayer("Charlotte");
game.addPlayer("Deedee");
game.addPlayer("Elmer");
game.addPlayer("Fanny");
game.addPlayer("George");
game.addPlayer("Hannah");
game.addPlayer("Indy");
game.addPlayer("Louise");


//Let the game start...hopefully!!!
//const turns = prompt('How many turns do you want to play?')
//turns = Number(turns);

let turns = 1;
game.play(turns);
