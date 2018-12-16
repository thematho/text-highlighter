import angular from 'angular';
import FilterWordsEvent from './filter-words-event/filter-words-event';
import TextContentSearch from './text-content-search/text-content-search';
import TextHtmlParser from './text-html-parser/text-html-parser';

let serviceModule = angular.module('app.services', [
  FilterWordsEvent,
  TextContentSearch,
  TextHtmlParser,
])

  .name;

export default serviceModule;
