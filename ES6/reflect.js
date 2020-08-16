
let obj = {
    foo: 1,
    set bar(value){
        return this.foo = value;
    }
}
obj.bar = 2;
console.log(obj);

const queuedObservers = new Set();
const observe = fn => {
    return queuedObservers.add(fn)
}
const observable = obj => {
    return new Proxy(obj, {set})
}
function set(target, key, value, receiver){
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(observer=>{observer()});
    return result;
}
const person = observable({
  name: '张三',
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';

