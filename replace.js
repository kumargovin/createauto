const fs = require('fs').promises;



 function   replaceFile(file1,text1,text2)
{
//console.log("Read Start");
let filedata = "";
try{
   filedata:String(fs.readFile(file1));
 console.log("Read " + filedata);
}
catch(e)
{
   console.log(e);
}
console.log("Write " + filedata);
 filedata=filedata.replaceAll(text1,text2);
try{
 fs.writeFile(file1, filedata);
console.log("Write " + filedata);
}
catch(e)
{
   console.log(e);
}
}
 replaceFile("test.js","menu","addscreen");

 replaceFile("test.js","addscreen","Addscreen");

 //await replaceFile("test.js",'const Menu2 = React.lazy(() => import("pages/menu2/Menu2"))','const Menu2 = React.lazy(() => import("pages/menu2/Menu2"))\nconst Menu = React.lazy(() => import("pages/menu/Menu"))');

//doubleTask();
 console.log("Done");
