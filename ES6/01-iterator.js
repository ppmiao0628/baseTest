let iteratorObj = makeIterator([1, 4]);
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
function makeIterator(arr) {
    let index = 0;
    return {
        next: ()=>{
            return index < arr.length ?
            {
                value: arr[index++], done: false
            } :
            {
                value: undefined, done: true
            }
        }
    }
    
}
/**
原生具备 Iterator 接口的数据结构如下。
Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象
下面的例子是数组的Symbol.iterator属性。
 */
let str = 'ppm';
let it = str[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

let arr = [1,2,3,4,5];
let arrCopy = arr.forEach(i=>{
    return i*i;
})
let arrCopy1 = arr.map(i=>{
    return i*i;
})
console.log('foreach',arrCopy)
console.log('map', arrCopy1)