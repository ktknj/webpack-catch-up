import _ from 'lodash'
import Lion from './utilities'
// import { NAME, Nijou } from './utilities'


// console.log(Nijou(4))
console.log(Lion.say())

function component() {
  const element = document.createElement('div');
  const array = ['hello', 'webpack','!!!'];
  element.innerHTML =  _.join(array, ' ')
  return element;
}

document.body.appendChild(component())