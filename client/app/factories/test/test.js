import angular from 'angular';
import factory from './test.factory';

export default angular
  .module('ng6Starter.test', [])
  .factory('Testfactory', factory)
  .name;
