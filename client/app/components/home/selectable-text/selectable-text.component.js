import template from './selectable-text.html';
import controller from './selectable-text.controller';

import './selectable-text.scss';

const component = {
  bindings: {
    initText: '<',
    selectedColor: '<',
    colorList: '<',
    onSelection: '&',
  },
  template,
  controller
};

export default component;
