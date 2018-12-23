/**
 * Created by kellerme on 2018/12/23
 */

define(['dataService'], function (dataService) {
    let name = 'alert'
    function showMsg() {
        alert(dataService.getMsg() + ',' + name)
    }
    return {showMsg}
})