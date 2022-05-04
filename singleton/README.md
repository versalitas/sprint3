## Singleton Pattern


Singleton is an object/ class restricted to having a single, unique instance, 
with a single point of access. We need to ensure that the constructor is called 
only once and to reuse that instance.

The challenge is to code a game where various players can be created. 
The players can be added to the game. A score counter tracks the scores and the winner. 
The game can add and substract from each player's score thus the score counter class should be 
implemented with the singleton pattern.*/

One variant would be:

```
class Singleton {
  constructor() {
    if (!Singleton._instance) {
      Singleton._instance = this;
    }
    return Singleton._instance;
  }
}
```
Source: https://bretcameron.medium.com/singletons-in-javascript-59655927b7d7

Another variant is the "singletonish" pattern taking advantage of Node.js modules caching system. 
(source: https://medium.com/swlh/node-js-and-singleton-pattern-7b08d11c726a)

Every call to require(‘score’) will get exactly(though not in all circumstances) the same object returned since modules are cached after the first time they're loaded. The -ish is since it's not 100% foolproof.

```
class Singleton {
    constructor() {
        this.message = 'I am an instance';
    }
}
module.exports = new Singleton();
```

The instance of the class is exported module.exports = new Singleton(). 
Node.JS will cache and reuse the same object each time it’s required.


Implementing singleton patterns.
https://stackoverflow.com/questions/53023332/javascript-good-way-to-create-or-design-singleton-class
https://ozenero.com/how-to-implement-singleton-in-node-js-example
https://www.digitalocean.com/community/tutorials/js-js-singletons
