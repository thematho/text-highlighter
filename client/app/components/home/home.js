import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

import selectableTextComponent from './selectable-text/selectable-text';
import filterWordsEvent from '../../services/filter-words-event/filter-words-event';

let homeModule = angular.module('app.home', [
  uiRouter,
  selectableTextComponent,
  filterWordsEvent,
])
  // Basic Routing configuration only one view for this example
  // Is not really necessary now but it will help scaling the app further
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";
    // Default path 
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      component: 'home'
    });
  })

  .component('home', homeComponent)

  .name;

export default homeModule;
