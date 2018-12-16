import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './selectable-text.component';

export default angular
  .module('app.home.selectableText', [uiRouter])
  .component('selectableText', component)
  .name;
