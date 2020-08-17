const http = require('http');
const koaStatic = require('koa-static')
const path = require('path');
const koa = require('koa2');
const koaBody = require('koa-body');
const fs = require('fs');

var app = new koa();
var port = process.env.PORT || '8100';

var uploadHost = `http://locallhost:${port}/uploads/`;
console.log('uploadHost', uploadHost);
app.use(koaBody({
    formidable:{
         //设置文件的默认保存目录，不设置则保存在系统临时目录下  os
        uploadDir: path.resolve(__dirname, '../static/uploads')
    },
    multipart: true// 支持文件上传
}));

//开启静态文件访问
app.use(
    koaStatic(path.resolve(__dirname, '../static'))
);

//二次处理文件，修改名称
app.use((ctx)=>{
    console.log(ctx.request.files);
    var files = ctx.request.files&&ctx.request.files.f1;
    var result = [];
    console.log(files);
    if(!Array.isArray(files)){
        files=[files];
    }
    files && files.forEach(file=>{
        // console.log('file.path',file.path);
        var path = file.path.replace(/\\/g, '/');
        var fname = file.name;
        var nextPath = path + fname;
        if(file.size>0&&path){
            var extArr = fname.split('.');
            var ext = extArr[extArr.length-1];
            nextPath = path+'.'+ext;
            console.log('nextPath',nextPath);
            fs.renameSync(path, nextPath);
            result.push(uploadHost+nextPath.slice(nextPath.lastIndexOf('/')+1));
        }
    })
    ctx.body =`{
        "fileUrl":${JSON.stringify(result)}
    }` ;
});

var server = http.createServer(app.callback());
server.listen(port);
console.log('server start:',port);