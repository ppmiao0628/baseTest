/**
 * Created by kellerme on 2019/10/20
 */
const fs = require('fs');

// fs.readFile('./package.json',(err, data)=>{
//     if (err) {
//         return console.log(err);
//     }
//     data = JSON.parse(data);
//     console.log(data.name);
// })

// function promiseReadFile(path) {
//     return new Promise((resolve, reject)=>{
//         fs.readFile(path,(err, data)=>{
//             if (err)
//                 reject(err);
//             else
//                 resolve(data);
//         })
//     })
// }
// promiseReadFile('./package.json').then(data=>{
//     data = JSON.parse(data);
//     console.log(data.name);
// }).catch(err=>{
//     console.log(err);
// })

// const co = require('co');
const util = require('util');
// co(function *() {
//     let data = yield util.promisify(fs.readFile)('./package.json');
//     data = JSON.parse(data);
//     console.log(data.name);
// });

// const readAsync = util.promisify(fs.readFile);
// async function init() {
//     let data = await readAsync('./package.json');
//     console.log(JSON.parse(data).name);
// }
// init();

const Koa = require('koa2');
const app = new Koa();

const mid1 = async(ctx, next)=>{
    ctx.type = 'text/html;charset=utf-8'
    await next()
    ctx.body += ' apend'
}
const mid2 = async(ctx, next)=>{
    ctx.body = 'hi'
    await next()
}
const mid3 = async(ctx, next)=>{
    ctx.body += ' ppm'
    // await next()
}
app.use(mid1)
app.use(mid2)
app.use(mid3)
app.listen(8080);
console.log(`listening 8080`)


