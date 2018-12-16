import angular from 'angular';
import contenteditable from './contenteditable/contenteditable';

let directivesModule = angular.module('app.common.directives', [
  contenteditable
])

  .name;

export default directivesModule;
