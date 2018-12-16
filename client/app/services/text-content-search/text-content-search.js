import angular from 'angular';
import service from './text-content-search.service';

export default angular
  .module('app.services.textContentSearch', [])
  .service('TextContentSearchService', service)
  .name;
