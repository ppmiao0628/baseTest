/**
 * Created by kellerme on 2018/8/26
 */

window.onload = function () {
    function loadImageAsync(url) {
        return new Promise(function (resolve, reject) {
            const image = new Image();

            image.onload = function () {
                resolve(image);
            };

            image.onerror = function () {
                reject(new Error('could not load image at' + url));
            };
            image.src = url;
        });
    }
    let dom = document.getElementById('myDiv') ;
    let url = './img.png';
    loadImageAsync(url).then(function (image) {
        dom.appendChild(image);
    });
};
