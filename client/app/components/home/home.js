import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

import selectableTextComponent from './selectable-text/selectable-text';

let homeModule = angular.module('home', [
  uiRouter,
  selectableTextComponent
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      });
  })

  .component('home', homeComponent)

  .name;

export default homeModule;
