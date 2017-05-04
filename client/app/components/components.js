import angular from 'angular';
import Home from './home/home';
import Item from './item/item';
import Test from './test/test';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Home,
  Item,
  Test,
  About
])

.name;

export default componentModule;
