/**
 * Created by kellerme on 2018/12/23
 */

(function () {
    require.config({
        baseUrl: './',
        paths: {
            //映射: 模块标识名: 路径
            myAlert: '../../js/AMD/modules/myAlert',//此处不能写成myAlert.js,会报错
            dataService: '../../js/AMD/modules/dataService'
        }
    })
    require(['myAlert'], function (myAlert) {
        myAlert.showMsg();
    })
})()