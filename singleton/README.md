## Singleton Pattern


Singleton is an object/ class restricted to having a single, unique instance, 
with a single point of access. 

The challenge is to create a game that creates various players. 
The players can be added to the game. A score counter tracks the scores and the winner. 
The game can add and substract from each player's score so the score counter class must be a 
implemented as a singleton pattern.*/

One variant would be
(based on https://medium.com/swlh/node-js-and-singleton-pattern-7b08d11c726a)


We need to ensure that the constructor is called only once and to reuse the instance.
Node.js modules caching system is an advantage when creating Singleton patterns.

Every call to require(‘score’) will get exactly the same object returned, since modules are cached after the first time they're loaded.

--
class Singleton {
    constructor() {
        this.message = 'I am an instance';
    }
}
module.exports = new Singleton();
--

The instance of the class is exported module.exports = new Singleton(). Node.JS will cache and reuse the same object each time it’s required.

More examples of implementing singleton Pattern.

https://stackoverflow.com/questions/53023332/javascript-good-way-to-create-or-design-singleton-class
https://ozenero.com/how-to-implement-singleton-in-node-js-example
https://www.digitalocean.com/community/tutorials/js-js-singletons