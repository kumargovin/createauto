// Requiring the module
const reader = require('xlsx')
const fs = require('fs').promises;
const express = require('express');
const { google } = require("googleapis");
const { testing } = require('googleapis/build/src/apis/testing');
const getDirName = require('path').dirname;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  /**********************************Start function********************************************/
  

async function createTheFolder(folderpath, foldername) {
    try {
        let x= await fs.mkdir(folderpath + "/" + foldername);
        console.log(x);
    }
    catch (e) {
console.log(e);
    }
}

async function createFile(filepath) {
    try{  await  fs.mkdir(getDirName(filepath));}catch(e){console.log(e);}
    try{ await  fs.writeFile(filepath,"");}catch(e){console.log(e);}
}

async function copyFile(srcfile, destfile) {
    try{  await   fs.copyFile(srcfile, destfile);}catch(e){console.log(e);}
}

//async function replacefile(file1, text1, text2) {}

    async function replacetext(file1, text1, text2) {
    //console.log("Read Start");
    let filedata = "";
    try {
        filedata = String(await fs.readFile(file1));
    }
    catch (e) {
        console.log(e);
    }
    console.log(filedata.search(text1));
    console.log('start replace');
    if(filedata.search(text1)==-1) return "nothing found";
    console.log('start replace2');
    try {
        filedata =await filedata.replaceAll(text1, text2);
        filedata=await filedata.replaceAll("&#10;","\n");
    console.log('start replace3');
        await fs.writeFile(file1, filedata);
        if(filedata.search(text1)==-1) return "Replaced";
    }
    catch (e) {
        console.log(e);
    }

    async function unlinkFile(folderpath,req,res) {
        try {
         await fs.unlinkFile(folderpath);
            console.log();
        }
        catch (e) {
    console.log(e);
        }
     
    }
}

/********************************************************************/
// Reading our test file
//async function doTheTask() {
     var doTheTask = async()=>{
        const client = await auth.getClient();
        const googleSheets = google.sheets({ version: "v4", auth: client });
        const spreadsheetId = "1vA4I_vmFlWE4FdlN3jwWURB-ep4KtHzMDLqHfD9sKgA";
        const metaData = await googleSheets.spreadsheets.get({          auth,          spreadsheetId,        });
        const getRows = await googleSheets.spreadsheets.values.get({ auth, spreadsheetId, range: "Sheet1!A:E",  });
    
        console.log(getRows.data.values);

    //const file = reader.readFile('property.xlsx')

    let data = getRows.data.values;

//    const sheets = file.SheetNames

    for (let i = 1; i < data.length; i++) {
        console.log(data[i][0]);
     
        res=data[i];
          
            let command = res[0];
            let file1 = res[1];
            let file2 = res[2];
            let param1 = res[3];
            let param2 = res[4];

            console.log(command + "," + file1 + "," + file2 + "," + param1 + "," + param2);
           if (command == "Create new folder") {
                try {
                    console.log("creting");
                    console.log("creating folder " + param2 + "/" + param1);
                    await createTheFolder(param2, param1);
                    console.log("created");
                }
                catch (err)
                 {
                    console.log(err);
                }
            };
            if (command == "Create new file") {
                try {
                    console.log("createnewfile");
                    console.log("Creating file");
                    await createFile(param1);
                    console.log("creatednewfile");
                }
                catch (ex) {
                    console.log(ex);
                }
            };
            if (command == "Copy files") {
                try {
                    console.log("copyingstart");
                    console.log("Copyfiles");
                    await copyFile(file1, file2);
                    console.log("copied");
                }
                catch (ex) {
                    console.log(ex);
                }
            };

            if (command == "Replace file") {
        
                console.log("replacestart");
                 await  replacetext(file1, param1,param2);
                console.log("replaced");
            }
           /*
            if (command == "Delete File") {
                try{
        
                console.log("Deletestart");
                 await unlinkFile(filepath);
                console.log("Deleted");
            }
        
                catch(err){
                    console.log(err);
                }
            }
        */
        };


    };
doTheTask();