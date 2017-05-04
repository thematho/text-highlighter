import angular from 'angular';
// import someFactory from './someFactory/someFactory';
import testFactory from './test/test';

let serviceModule = angular.module('app.factories', [
  // someFactory
  testFactory
])
// .factory('someFactory', someFactory)
.factory('testFactory', testFactory)

.name;

export default serviceModule;
