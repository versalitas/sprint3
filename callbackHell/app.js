//refactoring with promises and async/await from sprint 1
const {readdir, readFile, writeFile} = require("fs");

const {join} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");


const getFiles = () =>
{
  readdir(inbox,(err,files) => {
    if (err) return console.log("err: Folder inaccessible");
    return files;
  })
}

const readFiles = (file) => {
  readFile(join(inbox, file), "utf8", (err, data) => {
  if (err) return console.log("err: File err");
  return data;})
  
}

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");


const writeFiles = (data) => {
  writeFile(join(outbox, file), data, err => {
  if (err) return console.log("err: File could not be saved!");
  console.log(`${file} was successfully saved in the outbox!`);})
  
}


const readReverseWrite = () =>
{ 
  try{
  let files =  getFiles();
  console.log(files);
 // for(let file of files){
    let data = readFiles(files);
    let reversedStr = reverseText(data);
    writeFiles(reversedStr);
    //}
  }catch (err) {console.error(err)}
}


readReverseWrite();
/* original callbackhell
// Read and reverse contents of text files in a directory
readdir(inbox, (err, files) => {
  if (err) return console.log("err: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (err, data) => {
      if (err) return console.log("err: File err");
      writeFile(join(outbox, file), reverseText(data), err => {
        if (err) return console.log("err: File could not be saved!");
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
// los mensajes de err más diversificados
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
      console.log("Some highly expected err.", err.message);
  }
}


reverseReadSave();
*/
