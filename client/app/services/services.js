import angular from 'angular';
import Item from './item/item';
import Test from './test/test';

let serviceModule = angular.module('app.services', [
  Item,
  Test
])

.name;

export default serviceModule;
