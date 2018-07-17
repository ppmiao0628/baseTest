/**
 * 用户代理字符串检查脚本
 * 检查呈现引擎，平台，Windows系统，移动设备和游戏系统
 */

var client = function () {
    //呈现引擎
    var engine = {
        ie: 0
    }
    var Book = function (name, price, time) {
        if (this instanceof Book){
            this.name = name;
            this.price = price;
            this.time = time;
        } else {
            return new Book(name, price, time);
        }
    }
    var book = Book('JavaScript设计模式', '￥99.00', '2017-12-25');
}

var exstend = function (target, source) {
    for (var property in source) {
        target[property] = source[property];
    }
    return target;
}
var book = {
    name: 'JavaScript设计模式',
    prop: ['css', 'js', 'html']
}
var anotherBook = {
    price: '$10.00'
}
exstend(anotherBook, book);
console.log(anotherBook);


function SuperClass() {
    this.spValue = true;
}
SuperClass.prototype.getSuperValue = function () {
    return this.spValue;
}
function SubClass() {
    this.subValue = false;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function () {
    return this.subValue;
}

//声明一个父类
function SuperClass(id) {
    this.books = ['html', 'css'];
    this.id = id;
}
SuperClass.prototype.showBooks = function () {
    console.log(this.books);
}
//声明子类
function SubClass(id) {
    SuperClass.call(this, id);
}

let instance1 = new SubClass(1);
let instance2 = new SubClass(2);
instance1.books.push('javaScript');
console.log(instance1);//{books:["html", "css", "javaScript"],id:1}
console.log(instance2);//{books:["html", "css"],id:1}
instance1.showBooks();  //error


//声明一个父类
function SuperClass(id) {
    this.books = ['html', 'css'];
    this.id = id;
}
SuperClass.prototype.showBooks = function () {
    console.log(this.books);
}
//声明子类
function SubClass(id, time) {
    SuperClass.call(this, id);
    this.time = time;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function () {
    console.log(this.time);
}

function inheritObejct(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

/**
 * 寄生式继承方法继承原型
 * @param subClass
 * @param superClass
 */
function inheritPrototype(subClass, superClass) {
    var p = inheritObejct(superClass.prototype);
    p.construct = subClass;
    subClass.prototype = p;
}
// function createObject(obj) {
//     let o = inheritObejct(obj);
//     o.getName = function () {
//         console.log(this.name);
//     }
//     return o;
// }
var house = {
    furniture: ['desk', 'sofa'],
    name: 'B211'
}

let newHouse = createObject(house);
let anotherHouse = createObject(house);
newHouse.furniture.push('chair');
newHouse.name = 'newB211';
anotherHouse.furniture.push('bed');
anotherHouse.name = 'anotherB211';
console.log(newHouse.furniture);    //["desk", "sofa", "chair", "bed"]
console.log(anotherHouse.furniture);//["desk", "sofa", "chair", "bed"]

//声明一个父类
function SuperClass(id) {
    this.books = ['html', 'css'];
    this.id = id;
}
SuperClass.prototype.showBooks = function () {
    console.log(this.books);
}
//声明子类
function SubClass(id, time) {
    SuperClass.call(this, id);
    this.time = time;
}
inheritPrototype(SubClass, SuperClass);
SubClass.prototype.getTime = function () {
    console.log(this.time);
}

var instance1 = new SubClass('js', 2017);
var instance2 = new SubClass('python', 2016);

instance1.books.push('设计模式');
console.log(instance1.books);
console.log(instance2.books);

var Person = function (name) {
    this.name = name;
    (function (name) {
        alert(name);
    })(name);
};
var p = new Person('MPP');


