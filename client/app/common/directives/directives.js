import angular from 'angular';
// import someDirective from './some/some.directive';
 import testDirective from './test/test.directive';

let directivesModule = angular.module('app.common.directives', [])

// .filter('some-directive', someDirective)
.filter('some-directive', testDirective)
.name;

export default directivesModule;
