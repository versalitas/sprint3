//refactoring with promises and async/await from sprint 1
const {readdir, readFile, writeFile} = require("fs");

const {join} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");


  const reverseReadWrite = () => {
     
    let files;
    let data;
    let reverseData;
    
     //readdir
    try {
      files = readdir(inbox);
    } catch (err) {
      return console.error("Error: Folder inaccessible");
    }
   
     //iterate through the files
      files.forEach(file => {
        
        //read files  
        try { 
          data = readFile(join(inbox, file), "utf8")
        } catch (err) {
          return console.log("Error: File error");
        }
        //reverse text
        let reverseData = reverseText(data);
        
        //write reversed text to file
        try { 
          writeFile(join(outbox, file), reverseData);
        } catch (err) {
          return console.log("Error: File could not be saved!");
        }
        
        console.log(`${file} was successfully saved in the outbox!`);
      }
      
    


  


/*
  //readdir turned into promise resolves with the files
const promReadDir = (inbox) => {
  return new Promise((resolve, reject) => {
    readdir(inbox, (err, files) => {
      if(err) reject("Error: Folder inaccessible");
      resolve(files);
    });
  });
}

// readFile turned into promise resolves reading the data from the files
const promReadFile = (inbox, file) => {
  return new Promise((resolve, reject) => {
    readFile(join(inbox, file), "utf8", (err, data) => {
      if(err) reject("Error: File error");
      resolve(data);
    });
   });
}

//writefile turned into promise resolves with message 
const promWriteFile = (outbox, file, data) => {
  return new Promise((resolve, reject) => {
    writeFile(join(outbox, file), data, err => {
      if(err) reject("Error: File could not be saved!");
      resolve(console.log(`${file} was successfully saved in the outbox!`));
    });
  });
}

// puting the promises together

const reverseReadWrite = async () => {
  try {
    let allFiles = await promReadDir(inbox);
      for(let file of allFiles){
        let data = await promReadFile(inbox, file);
        let reverseData = reverseText(data);
        await promWriteFile(outbox, file, reverseData);
      }
    } catch (err) {
      console.error(err);
  }
}
*/
reverseReadWrite();





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
