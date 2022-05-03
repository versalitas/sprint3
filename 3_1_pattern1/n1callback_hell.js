
//El codi adjunt llegeix un fitxer situat en un directori inbox i escriu el seu 
//contingut invertit en un altre fitxer al directori outbox. 
//Reestructura i simplifiqui el codi existent per a evitar el denominat Callback Hell.

const {promisify} = require('utils');
const {
  readdir,
  readFile,
  writeFile
} = require("fs");

const {
  join
} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

  /*
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

const promReaddir = util.promisify(readdir);
const promReadFile = util.promisify(readFile);
const promWriteFile = util.promisify(writeFile);


reverseReadSave = async () => {
  try {
      const files = await promReaddir(inbox);
      for await (const file of files) {
          const readData = await promReadFile(join(inbox, file), 'utf8');
          const reverseData = await reverseText(readData);
          await promWriteFile(join(outbox, file), reverseData);
          console.log(`${file} done`);
      }
  } catch (error) {
      console.log(error)
  }
}


readReverseSave();