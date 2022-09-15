const fs = require('fs');
const express=require('express');

async function replaceFile(file,text1,text2)
{
    fs.replace(file,text1,text2);

}

replaceFile.replace("test.js","Vishal","Harsh");