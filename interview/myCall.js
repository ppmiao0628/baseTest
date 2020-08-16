// call apply bind
let a = {
    name: 'ppm'
}
function f(){
    console.log(this.name);
}
f.call(a);
Function.prototype.myCall = function(context, ...args){
    const fn = Symbol();
    context[fn] = this;
    context[fn](...args);
    delete context[fn];
}
f.myCall(a);
Function.prototype.myApply = function(context, args){
    //TODO 对args做判空处理
    const fn = Symbol();
    context[fn] = this;
    context[fn](...args);
    delete context[fn];
}
f.myApply(a);