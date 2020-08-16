import {foo} from './a.mjs';
// console.log(foo);
setTimeout(()=>{
    console.log('2')
},2000)
setTimeout(()=>{
    console.log('1')
},1000)