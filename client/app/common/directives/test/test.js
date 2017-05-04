import angular from 'angular';
import linkFunction from './test.directive';

export default angular
  .module('ng6Starter.test', [])
  .directive('test', () => {
    return {
      restrict: 'A',
      link: linkFunction
    };
  })
  .name;
