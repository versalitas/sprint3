const fs = require('fs');
//https://www.freecodecamp.org/news/json-stringify-example-how-to-parse-a-json-object-with-javascript/

//the theory is simple... but I'm not to sure about the implementation

//original conversion function
const convertToEuro = (price, currency) => 
{return (allRates[currency + "_EUR"] * price).toFixed(2)};

//
const decoConvertToEuro = (convertToEuro) => {
    
    const currencyJSON = fs.readFileSync('./currency_conversions.json', 'utf8',);
    const allRates = JSON.parse(currencyJSON);
    
     return convertToEuro = (price, currency) => 
     {return (allRates[currency + "_EUR"] * price).toFixed(2)};
}



    
    
    

module.exports.decoConvertToEuro = decoConvertToEuro;

 
            
