import _ from 'lodash';
import './style.css';
import './bk.jpg';
import {cube} from './math';

console.log(process.env.NODE_ENV);

function component() {
    var element = document.createElement('div');
    // const _ = await import(/* webpackChunkName: "lodash" */ "lodash");
    var str = '5 cubed is ' + cube(5);
    element.innerHTML = _.join(['hello', 'mpp', str], ' ');
    element.classList.add('hello');

    var btn = document.createElement('button');
    btn.innerHTML = 'click me to check console';
    element.appendChild(btn);
    btn.onclick = e => import(/* webpackChunkName: "print" */ "./print").then(module=>{
        var print = module.default;
        print();
    });
    return element;
}

let element = component();
// element.then(component => {
//     document.body.appendChild(component);
// });
document.body.appendChild(element);

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updatedd printMe module!');
//         // printMe();
//         document.body.removeChild(element);
//         element = component();
//         document.body.appendChild(element);
//     })
// }