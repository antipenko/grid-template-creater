import css from '../css/style.scss';
//import {initMap} from './map.js';

function app() {

    var styles = getComputedStyle(document.documentElement);
    var value = String(styles.getPropertyValue('--text-color')).trim();
    var wrapper = document.getElementsByClassName('wrapper');

    var button = document.getElementById('changeColor');
    console.log( getComputedStyle(wrapper[0].nodeName).getPropertyValue("--layout"));

    let twoColumns = '100px 1fr';
     button.addEventListener('click', function(){
         wrapper.documentElement.style.setProperty('--layout', twoColumns);
     });

}

window.addEventListener('load', app);
