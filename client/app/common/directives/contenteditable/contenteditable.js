import angular from 'angular';
import linkFunction from './contenteditable.directive';

export default angular
  .module('app.common.directives.contenteditable', [])
  .directive('contenteditable', () => {
    return {
      restrict: 'A',
      require: "ngModel",
      link: linkFunction
    };
  })
  .name;
