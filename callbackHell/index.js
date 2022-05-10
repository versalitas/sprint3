
//El codi adjunt llegeix un fitxer situat en un directori inbox i escriu el seu 
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
// que obtendría refactorando con promesas y .then
/* const getFileNames = () => {
   return new Promise((resolve, reject) => {
    fs.readdir(inbox, (error, filenames) => {
        error? reject('Folder inaccessible') : resolve(filenames);
    })
})
}*/



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


