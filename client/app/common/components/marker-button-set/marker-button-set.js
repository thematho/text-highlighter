import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './marker-button-set.component';

export default angular
  .module('app.commom.components.markerButtonSet', [uiRouter])
  .component('markerButtonSet', component)
  .name;
