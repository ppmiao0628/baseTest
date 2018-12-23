/**
 * Created by kellerme on 2018/12/23
 */

// 定义没有依赖的模块
define(function () {
    let msg = 'hello ppm';
    function getMsg() {
        return msg.toString();
    }
    return {getMsg}
})