function timeout(ts){
    return new Promise((resolve)=>{
        setTimeout(resolve, ts);
    });
}
async function asyncPrint(value,ts){
    await timeout(ts).then(()=>{console.log('promise')});
    console.log(value);
    // console.log(a);
}

// asyncPrint('hello ppm', 2000).then(()=>{console.log('done')});

function spawn(genF) {
    return new Promise((resolve, reject)=>{
        const gen = genF();
        function step(nextF){
            let next ;
            try {
                next = nextF();
            } catch (e) {
                return reject(e);
            }
            if(next.done) {
                return resolve(next.value)
            }
            Promise.resolve(next.value).then(v=>{
                step(()=>{return gen.next(v)})
            },e=>{
                step(()=>{return gen.throw(e)})
            });
        }
        step(()=>{return gen.next(undefined)});
    })
}
function asyncPrint1(value,ts){
    return spawn(function* (){
        yield timeout(ts).then(()=>{console.log('promise')});
        console.log(value);
    })
    // console.log(a);
}

asyncPrint1('hello ppm', 2000).then(()=>{console.log('done')});