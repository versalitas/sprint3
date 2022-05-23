
///AAAAArggg...

const {readdir, readFile, writeFile} = require("fs");

const {join} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");


  
/*
const getFiles = () => {
return new Promise(function(resolve,reject){
  readdir(inbox, (err,files) =>{
    if (err) reject(err)
    else resolve(files)
  })
 })
}*/
const manipulateFiles = (err, files) => {
  if(err) return console.log("Error: Folder inaccessible");
  files.foreach(readReverseWrite);
}

const readReverseWrite = (file) => {
  //debug console.log(files);
  
  readFile(join(inbox, file), "utf8", (err, data) => {
  if (err) {return console.log("err: File err");
  } else { 
  //write reversed text to file
  writeFile(join(outbox, file), reverseText(data), err => {
    if (err) return console.log("Error: File could not be saved!");
    console.log(`${file} was successfully saved in the outbox!`);
  })
  }
 })
 }
}


///aaargggggg

/*
getFiles()
.then(files => {
  readReverseWrite(files)}) */




