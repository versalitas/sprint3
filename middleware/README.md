
Create a file with a calculator app (adds, subtracts, multiplies) receiving the parametres from a JSON. Create an external class that saves the middleware functions. Insert to the call middlewares that executes square, cubic and divisional operations. Call the executions of adding, subtracting, and multiplying displaying the modifications of the initial values before the final result.



## Middleware

Execute from a terminal initiated within the middleware folder.


```
node app.js

```

- JSON javascript object notation
- JSON property names must be in double-quoted (" ")
- JSON do not allow trailing commas
- JSON do not represent types  (dates can be stored as a string and converted to a language-specific data structure)



## JSON and node.js

### Synchronous 
```
const fs = require('fs');

let rawdata = fs.readFileSync('student.json');
let parametres = JSON.parse(rawdata);
console.log(parametres);
```
### Asynchronous 
```
const fs = require('fs');

fs.readFile('student.json', (err, data) => {
    if (err) throw err;
    let parametres = JSON.parse(data);
    console.log(parametres);
});
```
### Using require 
drawback: uses cached data and will not access any updates.

```
let jsonData = require('./parametres.json');

console.log(jsonData);
```

https://stackabuse.com/reading-and-writing-json-files-with-node-js/


