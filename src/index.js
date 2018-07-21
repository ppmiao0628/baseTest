import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import './bk.jpg';
import {cube} from './math';

console.log(process.env.NODE_ENV);

function component() {
    var element = document.createElement('div');
    var str = '5 cubed is ' + cube(5);
    element.innerHTML = _.join(['hello', 'mpp', str], ' ');
    element.classList.add('hello');

    var btn = document.createElement('button');
    btn.innerHTML = 'click me to check console';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updatedd printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}