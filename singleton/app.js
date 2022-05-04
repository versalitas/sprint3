// import all that is requiered
const {Game} = require('./game');

// declare instance of the game
const game = new Game();

// add participant
game.addPlayer("Anne");
game.addPlayer("Bo");
game.addPlayer("Charlotte");
game.addPlayer("Deedee");
game.addPlayer("Elmer");
game.addPlayer("Fanny");
game.addPlayer("George");
game.addPlayer("Hannah");


//Let the game start...hopefully!!!
game.play();