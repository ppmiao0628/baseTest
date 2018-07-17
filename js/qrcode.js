var createQR = function () {
    var text = document.getElementById('text').value;
    var qrObj = {
        text: text,
        width: 128,
        height: 128,
        colorDark: '#000',
        colorLight: '#fff',
        corretLevel: QRCode.CorrectLevel.H
    }
    var qrcode = new QRCode(document.getElementById('qrcode'),qrObj);
}