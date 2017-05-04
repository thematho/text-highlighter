import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './test.component';

export default angular
  .module('ng6Starter.test', [uiRouter])
  .component('test', component)
  .name;
