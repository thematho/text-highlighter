import template from './selectable-text.html';
import controller from './selectable-text.controller';

import './selectable-text.scss';

const component = {
  // Component's bindings examples:
  // Inputs:
  //  data: '='(two way binding
  //  data: '<' one-way bindings, bound properties in the component scope are not watched.
  //          However if both parent and component scope reference the same object
  //          then  changes on Object and Arrays will be reflected without triggering watchers.
  //  data: '@' one-way bindings for String inputs.
  // Outputs:
  //  onDelete: '&' function as callbacks to component events.
  //                Instead of manipulating Input Data, the component calls
  //                the correct Output Event with the changed data.
  bindings: {},
  template,
  controller
};

export default component;
