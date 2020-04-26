const fs = require('fs');
const path = require('path');

function MD5(url) {
    // console.log(fs.existsSync(url));
    // console.log(fs.readdirSync(url));
    if (fs.existsSync(url)) {
        fileArr = fs.readdirSync(url);
        fileArr.forEach((file)=>{
            let currPath = url + '/' + file;
            if (fs.statSync(currPath).isDirectory()) {
                MD5(currPath);
            } else {
                console.log(currPath);
            }
        })
    }
}
let url = path.resolve('ES6');
MD5(url);
[
    {
      "wordName": "本人往来"
    },
    {
      "wordName": "定期存款"
    },
    {
      "wordName": "其他收入"
    },
    {
      "wordName": "基金理财"
    },
    {
      "wordName": "其他支出"
    },
    {
      "wordName": "转给他人"
    },
    {
      "wordName": "信"
    },
    {
      "wordName": "转"
    },
    {
      "wordName": "转出"
    },
    {
      "wordName": "外汇"
    }
  ].map((item)=>{
    return item.wordName;
  })