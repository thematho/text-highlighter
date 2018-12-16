import FilterWordsEventModule from './filter-words-event';
import FilterWordsEventService from './filter-words-event.service';

describe('Module ng6Starter.filterWordsEvent', () => {

  // Load involved Modules
  beforeEach(window.module(FilterWordsEventModule));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    // [CAVEAT] If you have several services in one module you should
    // create a separate spec file for the module and for each module and service
  });

  describe('FilterWordsEventService', () => {
    let $httpBackend, getService, mockHttp;

    beforeEach(inject(() => {
      let injections = [];

      getService = () => {
        // You can use injection to obtain the service but you really should
        // test the service alone as a function and provide the injections yourself
        // return $injector.get('FilterWordsEventService');
        return new FilterWordsEventService(...injections);
      };
    }));

    it('Properties should load', () => { // erase if removing this.items from the service
      let service = getService();
      expect(service).toHaveProperty('onFilterWords');
      expect(service).toHaveProperty('onFilterRequest');
      expect(service).toHaveProperty('onFilterResponse');
    });

  });
});
