let obj = {
    _name: 'keller',
    set name(s){
        this._name = s;
    },
    get name(){
        console.log(this.name);
        return this._name;
    }
}
obj.name;

Object.defineProperty(Object,'isEquel',{
    value: function(x, y){
        if (x === y) {
            return x !== 0 || 1/x === 1/y;
        }
        return x !== x && y !== y;
    },
    configurable: true,
    enumerable: false,
    writable: true
});
Object.isEquel(NaN, NaN);


let source = {
    set foo(value){
        console.log(value);
    }
};
let target = {};
Object.assign(target, source);
Object.getOwnPropertyDescriptor(target, 'foo');

//__proto__ 的实现
Object.defineProperty(Object.prototype, '__proto__', {
    get() {
        let _thisObj = Object(this);
        return Object.getPrototypeOf((_thisObj));
    },
    set(proto) {
        if(this === undefined || this === null) {
            throw new TypeError();
        }
        if (!isObject(this)) {
            return undefined;
        }
        if (!isObject(this)) {

        }
    }
});
function isObject(value) {
    return Object(value) === value;
}