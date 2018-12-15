import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './selectable-text.component';

export default angular
  .module('ng6Starter.selectableText', [uiRouter])
  .component('selectableText', component)
  .name;
