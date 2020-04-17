// function* demo() {
//     console.log('hello' + (yield 12));
// }
// let d = demo();
// console.log(d.next());
// console.log(d.next());
// console.log(d.next());

function* dataConsumer() {
    console.log('start');
    console.log(`1.${yield}`);
    console.log(`2.${yield}`);
    return 'result';
}
for (const o of dataConsumer()) {
    console.log(o);
}
// let genObj = dataConsumer();
// console.log(genObj.next());
// console.log(genObj.next('a'));
// console.log(genObj.next('b'));

// 斐波那数列
function* fibonacci() {
    let [pre, cur] = [0, 1];
    for(;;){
        yield cur;
        [pre, cur] = [cur, pre + cur];
    }
}
for (const n of fibonacci()) {
    if(n>1000) break;
    console.log(n);
}

function* objectEntries() {
    let propKeys = Object.keys(this);
    for (const propkey of propKeys) {
        yield [propkey, this[propkey]];
    }
}
let ppm = {first: 'pp', last:'m'};
ppm[Symbol.iterator] = objectEntries;
for (const [key, value] of ppm) {
    console.log(`${key}: ${value}`);
}