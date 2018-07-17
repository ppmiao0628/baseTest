import _ from 'lodash';
import printMe from './print.js';


function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'mpp'],' ');

    var btn = document.createElement('button');
    btn.innerHTML = 'click me to check console';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updatedd printMe module!');
        printMe();
    })
}