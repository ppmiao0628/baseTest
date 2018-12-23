/**
 * Created by kellerme on 2018/12/23
 */

(function () {
    require.config({
        baseUrl: './',
        paths: {
            myAlert: '../../js/AMD/modules/myAlert',
            dataService: '../../js/AMD/modules/dataService'
        }
    })
    require(['myAlert'], function (myAlert) {
        myAlert.showMsg();
    })
})()