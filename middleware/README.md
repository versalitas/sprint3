
Create a file with a calculator app (adds, subtracts, multiplies) receiving the parametres from a JSON. Create an external class that saves the middleware functions. Insert to the call middleware that executes square, cubic and divisional operations. Call the executions of adding, subtracting, and multiplying displaying the modifications of the initial values before the final result.


## Middleware

Execute from a terminal initiated within the middleware folder.

```
node app.js

```



- JSON **J**ava**S**cript **O**bject **N**otation
- JSON property names must be in double-quoted (" ")
- JSON do not allow trailing commas
- JSON do not represent types  (dates can be stored as a string and converted to a language-specific data structure)
- JSON is a string format.
#### JSON string
```
'{"name":"John", "surname":"Cage", "current":null}'
```
#### JSON object literal 
```
{"name":"John", "surname":"Cage", "current":null}
```

myJSON = '{"name":"John", "age":30, "car":null}';
myObj = JSON.parse(myJSON);

## JSON and node.js

### Synchronous 
```
const fs = require('fs');

let myJSON = fs.readFileSync('someData.json');
let myObj = JSON.parse(myJSON);
console.log(parametres);
```
### Asynchronous 
```
const fs = require('fs');

fs.readFile('someData.json', (err, data) => {
    if (err) throw err;
    let myObj = JSON.parse(data);
    console.log(myObj);
});
```
### Using require 
drawback: uses cached data and will not access updates.

```
let jsonData = require('./somedata.json');

console.log(jsonData);
```

https://stackabuse.com/reading-and-writing-json-files-with-node-js/

https://www.w3schools.com/js/js_json_objects.asp


