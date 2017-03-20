import _ from 'lodash';
import moment from 'moment';

function component () {
  var element = document.createElement('div');

  console.log(moment().format());

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
