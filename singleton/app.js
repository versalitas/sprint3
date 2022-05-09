// import all that is requiered
const Game = require('./game');
<<<<<<< HEAD

=======
>>>>>>> 07b7f4abd8d37b7cf6fc40c57dbbc36244f31484
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
<<<<<<< HEAD
//const turns = prompt('How many turns do you want to play?')
//turns = Number(turns);

let turns = 8;
game.play(turns);
game.score.showWinner();
=======

//const turns = prompt('How many turns do you want to play?')
//turns = Number(turns);
let turns = 8;
game.play(turns);
game.showWinner();







//https://www.codecademy.com/article/getting-user-input-in-node-js
>>>>>>> 07b7f4abd8d37b7cf6fc40c57dbbc36244f31484
