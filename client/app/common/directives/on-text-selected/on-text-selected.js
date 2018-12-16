import angular from 'angular';
import linkFunction from './on-text-selected.directive';

export default angular
  .module('app.common.directives.onTextSelected', [])
  .directive('onTextSelected', () => {
    return {
      restrict: 'A',
      scope: {
        onTextSelected: '&'
      },
      link: linkFunction
    };
  })
  .name;
