//How can I run multiple npm scripts in parallel? 
//>> to be investigated >> https://stackoverflow.com/questions/30950032/how-can-i-run-multiple-npm-scripts-in-parallel//

//requiring
const Publisher = require('./publisher.js');
const Subscriber = require('./subscribe.jsr');


//instantiating Publisher and calling method
const publisher1 = new Publisher('DeliveryService');
publisher1.sendMessage('Delivery Updates', 'Your package has been shipped off.')

//instantiating Subscriber and calling method
const subscriber1 = new Subscriber("Hannah");
subscriber1.readMessage("Delivery Update");