/**
 * Created by kellerme on 2018/12/23
 */
(function (window) {
    let msg = 'hellp ppm';
    function getMsg() {
        return msg;
    }
    window.dataService = {getMsg};
})(window)