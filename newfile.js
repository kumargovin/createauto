
const fs = require('fs').promises;
const express = require('express');

async function fAppend(file,text)
{
//*****************************************************************************8 */
console.log("Read Start");
let filedata="";
try{
 filedata = String(await fs.readFile(file));
 console.log("Read " + filedata);
}
catch(e)
{
   console.log(e);
}
console.log("Write " + filedata);
text=filedata + text;
try{
await fs.writeFile(file, text);
console.log("Write " + text);
}
catch(e)
{
   console.log(e);
}
}
async function doubleTask()
{
    await fAppend("test.js","\n{" + 
    "\npath: \"/menuVishal\"," + 
    "\nname: \"MenuVishal Bhaiiya\"," + 
    "\nicon: \"ni ni-bullet-list-67 text-red\"," + 
    "\ncomponent: MenuVishal," + 
    "\nlayout: \"/admin," + 
    "\n},"
); 
   
}

 doubleTask();
 
 console.log("Done");
  
