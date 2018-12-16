import angular from 'angular';
import FilterWordsEventService from './filter-words-event/filter-words-event';

let serviceModule = angular.module('app.services', [
  FilterWordsEventService
])

  .name;

export default serviceModule;
