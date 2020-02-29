var count = 1;
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var container4 = document.getElementById('container4');
var container5 = document.getElementById('container5');

function getUserAction(args) {
    this.innerHTML = count++;
    // container2.innerHTML = count++;
    console.log(this);
    console.log(args);
}

// 防抖，疯狂点击，每次点击的时间间隔都小于规定时间，那么相应的方法不会执行
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

// 节流函数：疯狂点击按钮，规定的时间间隔内只触发一次相应的方法
let Throttle = function (fn, delay=1000, immediate = false) {
    let preTime = 0;
    return function () {
        let self = this;
        let args = [...arguments];
        let nowTime = + new Date();
        let flag = nowTime - preTime >= delay;
        if (immediate) {
            if (!flag) return;
            preTime = nowTime;
            fn.apply(self, args);
        } else {
            if (!flag) return;
            preTime = nowTime;
            setTimeout(()=>{
                fn.apply(self, args);
                flag = true;
            },delay);
        }

    }
}

var person = function () {
    var name = 'keller';
    return {
        getName: function () {
            return name;
        }
    }
}();

container1.onmousemove = Debounce(getUserAction, 300);
container2.onmousemove = Debounce(getUserAction, 300, true);
container4.onmousemove = Throttle(getUserAction);
container5.onmousemove = Throttle(getUserAction,1000, true);