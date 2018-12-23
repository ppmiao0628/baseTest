/**
 * Created by kellerme on 2018/12/23
 */
(function (window, dataService) {
    let name = 'keller'
    function showMsg() {
        alert(dataService.getMsg() + ',' + name)
    }
    window.myAlert = {showMsg}
})(window, dataService)