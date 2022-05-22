//refactoring with promises from sprint 1
const {readdir, readFile, writeFile} = require("fs");

const {join, resolve} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

//readdir turned into promise
const promReadDir = (inbox) => {
  return new Promise((resolve, reject) => {
    readdir(inbox, (err, files) => {
      if(err) reject("Error: Folder inaccessible");
      resolve(files);
    });
  });
}

// readFile turned into promise
const promReadFiles = (inbox, file) => {
  return new Promise((resolve, reject) => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if(err) reject("Error: File error");
      resolve(data);
    });
   });
}



/* original callbackhell
// Read and reverse contents of text files in a directory
readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      });
    });
  });
});

*/

/*//El codi adjunt llegeix un fitxer situat en un directori inbox i escriu el seu 
//contingut invertit en un altre fitxer al directori outbox. 
//Reestructura i simplifiqui el codi existent per a evitar el denominat Callback Hell.




const {promisify} = require('util');
const {readdir, readFile, writeFile} = require("fs");

const {join} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

 
// en sprint 1 me topé con promisify. 
// muy cómodo pero no sé cómo mantener
// los mensajes de error más diversificados
// del resultado
const pReaddir = promisify(readdir);
const pReadFile = promisify(readFile);
const pWriteFile = promisify(writeFile);



const reverseReadSave = async () => {
  try {
      const files = await pReaddir(inbox);
      for (let file of files) {
          const readData = await pReadFile(join(inbox, file), 'utf8');
          await pWriteFile(join(outbox, file), reverseText(readData), "utf8");
          console.log(`${file} reversed and saved in the outbox.`);
      }
  } catch (err) {
      console.log("Some highly expected error.", err.message);
  }
}


reverseReadSave();
*/
