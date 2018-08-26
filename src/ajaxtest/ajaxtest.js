/**
 * Created by kellerme on 2018/8/7
 */
function loadXmlDoc() {
    var xmlhttp ;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        console.log(xmlhttp.readyState);
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            // document.getElementById('myDiv').innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "https://www.baidu.com/", true);
    xmlhttp.send();
}
loadXmlDoc();