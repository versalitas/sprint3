//transcripción de pistas crípticas de omar: 
//calc = new Calculator(); / sum, sub, multi, div, => calc.(param), calc.sub(param) etc
//app = new Middleware(calc);  /app.sum(param), app.sub(param)
// for (method in calc){this.method = for(method.par = par)} añadir como último middleware y ejecutar middleware.

const Calculator = require('./calculator');
let calc = new Calculator();
const Middleware = require('./middleware');
const app = new Middleware(calc);


