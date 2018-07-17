var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
    console.log(this);
    console.log(e);
}

function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    }
}
var person = function () {
    var name = 'keller';
    return {
        getName:function () {
            return name;
        }
    }
}();

container.onmousemove = debounce(getUserAction, 1000);