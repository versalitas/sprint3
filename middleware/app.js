//transcripción de pistas crípticas de omar: 
//calc = new Calculator(); / sum, sub, multi, div, => calc.(param), calc.sub(param) etc
//app = new Middleware(calc);  /app.sum(param), app.sub(param)
// for (method in calc){this.method = for(method.par = par)} añadir como último middleware y ejecutar middleware.

const Calculator = require('./calculator');
const Middleware = require('./middleware');


const calc = new Calculator();
//setting target
const app = new Middleware(calc);

;



//uso de clase target (OJO que se invoca el método de la clase target llamando al Manager -que no tiene explícitamente declarado el método-)
console.log(app.add({a: 5, b: 10}));
console.log(app.subtract({a: 10, b: 6}));
console.log(app.multiply({a: 2, b: 3}));


