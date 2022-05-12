const fs = require('fs');
//https://www.freecodecamp.org/news/json-stringify-example-how-to-parse-a-json-object-with-javascript/


//decorator in its simplest form as a wrapper around another piece of code
const getRates = () => { const currencyJSON = fs.readFileSync('./currency_conversions.json', 'utf8',);
return JSON.parse(currencyJSON);
}


function convertToEuro (price, currency, func){
    const allRates = getRates();
    const actualRate = allRates[currency + "_EUR"];
    return (actualRate * price).toFixed(2);
    } 
 
module.exports.convertToEuro = convertToEuro;
module.exports.getRates = getRates;
 
            
