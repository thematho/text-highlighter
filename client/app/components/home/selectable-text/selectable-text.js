import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './selectable-text.component';
import filterWordsEvent from '../../../services/filter-words-event/filter-words-event';
import contentEditable from '../../../common/directives/contenteditable/contenteditable';

export default angular
  .module('app.home.selectableText', [
    uiRouter,
    filterWordsEvent,
    contentEditable,
  ])
  .component('selectableText', component)
  .name;
