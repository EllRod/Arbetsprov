import _ from 'lodash';
import 'jquery';
import './style.scss';
import header from './content.js';


  function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    return element;
  }

  document.body.appendChild(component());