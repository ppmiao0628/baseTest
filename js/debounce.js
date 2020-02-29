var count = 1;
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');

function getUserAction(args) {
    this.innerHTML = count++;
    // container2.innerHTML = count++;
    console.log(this);
    console.log(args);
}


let Debounce = function (fn, delay = 300, immediate = false) {
    let timer = null // 闭包存储setTimeout状态
    return function () {
        let self = this // 事件源this
        let args = arguments // 接收事件源的event
        if (timer) clearTimeout(timer) // 存在就清除执行fn的定时器
        if (immediate) { // 立即执行
            let callNow = !timer // 执行fn的状态
            timer = setTimeout(function () {
                timer = null
            }, delay)
            if (callNow) fn.apply(self, args)
        } else { // 非立即执行
            timer = setTimeout(function () { // 或者使用箭头函数将this指向dom
                fn.apply(self, args)
            }, delay)
        }
    }
};

var person = function () {
    var name = 'keller';
    return {
        getName: function () {
            return name;
        }
    }
}();

container1.onmousemove = debounce(getUserAction, 300);
container2.onmousemove = debounce(getUserAction, 300,true);