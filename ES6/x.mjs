// import {c} from './mod'
// c.add();
import {readFile} from 'fs';
// let fs = require('fs');
readFile('./package.json', 'utf8', (err,data)=>{
    console.log(err || data);
})