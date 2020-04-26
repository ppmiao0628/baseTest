function* demo(x) {
    let y = yield x +1;
    return y;
    // console.log('hello' + (yield 12));
}
let d = demo(1);
let d1 = d.next();
console.log(d1);
console.log(d.next(d1));
console.log(d.next());

function* dataConsumer() {
    console.log('start');
    console.log(`1.${yield}`);
    console.log(`2.${yield}`);
    return 'result';
}
let data = dataConsumer();
console.log(data.next());
// data.next(t.value);
// for (const o of dataConsumer()) {
//     console.log(o);
// }
// let genObj = dataConsumer();
// console.log(genObj.next());
// console.log(genObj.next('a'));
// console.log(genObj.next('b'));

// 斐波那数列
// function* fibonacci() {
//     let [pre, cur] = [0, 1];
//     for(;;){
//         yield cur;
//         [pre, cur] = [cur, pre + cur];
//     }
// }
// for (const n of fibonacci()) {
//     if(n>1000) break;
//     console.log(n);
// }

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
const Thunk = function(fn) {
    return function (...args) {
      return function (callback) {
        return fn.call(this, ...args, callback);
      }
    };
  };
function f(a,cb) {
    cb(a);
}
let cf = Thunk(f);
cf(1)(console.log)