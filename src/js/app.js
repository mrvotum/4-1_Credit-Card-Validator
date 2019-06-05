import Validator from './validtorcreateclass.js';
import ValidLogic from './validclass.js';

const parent = document.querySelector('[data-id=widget]');

const validator = new Validator(parent);
const validLogic = new ValidLogic(validator);

validLogic.paySyst();
