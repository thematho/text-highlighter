import angular from 'angular';
import directives from './directives/directives';
import filters from './filters/filters';
import markerButtonSet from './components/marker-button-set/marker-button-set';
import onTextSelected from './directives/on-text-selected/on-text-selected';

let commonModule = angular.module('app.common', [
  directives,
  filters,
  markerButtonSet,
  onTextSelected,
])

  .name;

export default commonModule;
