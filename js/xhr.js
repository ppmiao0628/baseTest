/**
 * Created by kellerme on 2019/6/22
 */

(function (window) {
    function xhr(cb) {
        let xhr = new XMLHttpRequest();
        // xhr.onreadystatechange = () => {
        //     console.log(xhr.readyState);
        //     if (xhr.readyState === 4) {
        //         if ((xhr.status>=200&&xhr.status<=300) || xhr.status===304){
        //             // console.log(xhr.responseText);
        //             cb(xhr.responseText);
        //         } else {
        //             console.log(xhr);
        //             cb(`<h1>空</h1>`);
        //             // return `<h1>空</h1>`;
        //         }
        //     }
        // };
        xhr.onload = () => {
            if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
                // console.log(xhr.responseText);
                // cb(xhr.responseText);
            } else {
                console.log(xhr);
                cb(`<h1>空</h1>`);
                // return `<h1>空</h1>`;
            }
        };
        xhr.onprogress = (event)=>{
            let divStatus = document.getElementById('statusdiv');
            if (event.lengthComputable) {
                divStatus.innerHTML = `Received${event.position}of${event.totalSize}bytes`;
                cb(divStatus.innerHTML);
            }
        };
        xhr.open('get', 'https://www.baidu.com/s?wd=mpp', false);
        xhr.setRequestHeader("myHeader", "myValue");
        xhr.send(null);
    }

    function addURLParam(url, key, value) {
        url += (url.indexOf('?') === -1 ? '?' : '&');
        url += encodeURIComponent(key) + '=' + encodeURIComponent(value);
        return url;
    }

    function father() {
        child();
        function child() {
            console.log(child.caller.a);
        }
    }
    father();
    window.MyModule = {xhr, addURLParam};
})(window)


window.onload = function () {
    MyModule.xhr((data) => {
        let node = document.createElement('div');
        node.innerHTML = data;
        document.body.appendChild(node);
    });
};