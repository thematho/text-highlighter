import angular from 'angular';
import service from './filter-words-event.service';
import constants from './filter-words-event.constants';

export default angular
  .module('app.services.filterWordsEvent', [])
  .service('FilterWordsEventService', service)
  .constant('FILTER_WORDS_CONSTANTS', constants)
  .name;
