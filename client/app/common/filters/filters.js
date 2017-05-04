import angular from 'angular';
import camelcase from './camelcase';
import test from './test';

let filtersModule = angular.module('app.common.filters', [])

.filter('camelcase', camelcase)
.filter('test', test)

.name;

export default filtersModule;
