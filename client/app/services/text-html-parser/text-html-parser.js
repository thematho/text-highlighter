import angular from 'angular';
import service from './text-html-parser.service';

export default angular
  .module('app.service.textHtmlParser', [])
  .service('TextHtmlParserService', service)
  .name;
