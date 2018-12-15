import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './marker-button-set.component';

export default angular
  .module('ng6Starter.markerButtonSet', [uiRouter])
  .component('markerButtonSet', component)
  .name;
