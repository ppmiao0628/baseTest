function loadImageAsync(url){
    return new Promise((resolve, reject)=>{
        let img = new Image();
        img.src = url;
        img.onload = ()=>{
            resolve(img)
        };
        img.onerror = ()=>{
            reject(new Error('Could not load image at ' + url))
        }
    })
}
loadImageAsync('../src/bk.jpgs').then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})
console.log('done')