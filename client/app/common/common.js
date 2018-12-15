import angular from 'angular';
import directives from './directives/directives';
import filters from './filters/filters';
import markerButtonSet from './marker-button-set/marker-button-set';

let commonModule = angular.module('app.common', [
  directives,
  filters,
  markerButtonSet,
])

  .name;

export default commonModule;
