
//El codi adjunt llegeix un fitxer situat en un directori inbox i escriu el seu 
//contingut invertit en un altre fitxer al directori outbox. 
//Reestructura i simplifiqui el codi existent per a evitar el denominat Callback Hell.

// Node.js program to illustrate 
// util.promisify() methods
  
// Since promisify function 
// returns promise version 
// of a function, it can also
// operate using async and await
   
// Importing Utilities module
//const util = require('util')
   
// Importing File System module
//const fs = require('fs')
   
// Use promisify to convert callback
// based method fs.readdir to 
// promise based method
//const readdir = util.promisify(fs.readdir)
   
//const readFiles = async (path) => {
//    const files = await readdir(path)
//    console.log(files)
//  }
   
//  readFiles(process.cwd()).catch(err => {
//    console.log(err)
//  })

// https://javascript.info/async-await
//https://www.geeksforgeeks.org/node-js-util-promisify-method/?ref=gcse

const {promisify} = require('util');

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

const resReaddir = util.promisify(readdir);
const resReadFile = util.promisify(readFile);
const resWriteFile = util.promisify(writeFile);

const reverseInNewFile = async (inbox, outbox, files) => {
  
    const files = await resReaddir(inbox);
    files.forEach(file => {
      const readFile = await resReadFile(join (inbox, file), "utf8");
      const reverseFile = await reverseText(readFile);
      const result = writeFile(join(outbox, file), reverseFile);
      console.log("${reverseFile} was successfully saved in the outbox!");
    }
 


