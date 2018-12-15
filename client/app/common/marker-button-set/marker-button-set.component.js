import template from './marker-button-set.html';
import controller from './marker-button-set.controller';

import './marker-button-set.scss';

const component = {
  bindings: {
    onClick: '&'
  },
  template,
  controller
};

export default component;
