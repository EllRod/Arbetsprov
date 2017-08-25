import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  require(".././dist/css/style.scss");
  document.write(require("./content.js"));

  return element;
}

document.body.appendChild(component());