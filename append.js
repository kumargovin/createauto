const fs = require('fs').promises;
const express = require('express');
//fReplace
//fAppend
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

    //*************************************************************************** */
}
async function   fReplace(file1,text1,text2)
{
console.log("Read Start");
let filedata="";
try{
 filedata = String(await fs.readFile(file1));
 console.log("Read " + filedata);
}
catch(e)
{
   console.log(e);
}
console.log("Write " + filedata);
 filedata=filedata.replaceAll(text1,text2);
try{
await fs.writeFile(file1, filedata);
console.log("Write " + filedata);
}
catch(e)
{
   console.log(e);
}
}


async function doubleTask()
{
   //await f("test.js",'const Menu2 = React.lazy(() => import("pages/menu2/Menu2"))','const Menu2 = React.lazy(() => import("pages/menu2/Menu2"))\nconst Menu = React.lazy(() => import("pages/menu/Menu"))');
let text=`{
   path: "/menu2",
   name: "Menu2",
   icon: "ni ni-bullet-list-67 text-red",
   component: Menu2,
   layout: "/admin",
 },`;
 text=text.replaceAll(`
 `,"");
 text=text.replaceAll("\n","");
console.log(text);
   await fReplace("test.js",text,`{
      path: "/sceen",
      name: "Screen",
      icon: "ni ni-bullet-list-67 text-red",
      component:Screen,
      layout: "/admin",
    },
`); 
  // await fappend("test.js",`/admin`,
   //"Vishal Bhaiyya from Noida"
   //); 
}

 doubleTask();
 
 console.log("Done");
  
 
