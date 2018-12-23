/**
 * Created by kellerme on 2018/12/23
 */
(function (window) {
    let data = 'ppmiao';
    function foo() {
        console.log(`foo() ${data}`);
    }
    function bar() {
        console.log(`bar() ${data}`);
        otherFun();
    }
    function otherFun() {
        console.log(`otherFun() ${data}`);
    }
    window.myModule = {foo, bar};
})(window)