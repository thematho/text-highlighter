import angular from 'angular';
import service from './test.service';

export default angular
  .module('ng6Starter.test', [])
  .service('TestService', service)
  .name;
