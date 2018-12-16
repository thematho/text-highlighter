import TextContentSearchModule from './text-content-search';
import TextContentSearchService from './text-content-search.service';

describe('Module ng6Starter.textContentSearch', () => {

  // Load involved Modules
  beforeEach(window.module(TextContentSearchModule));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    // [CAVEAT] If you have several services in one module you should
    // create a separate spec file for the module and for each module and service
  });

  describe('TextContentSearchService', () => {
    let getService;

    beforeEach(inject(() => {
      getService = () => {
        // You can use injection to obtain the service but you really should
        // test the service alone as a function and provide the injections yourself
        // return $injector.get('TextContentSearchService');
        return new TextContentSearchService();
      };
    }));

    it('Should filter properly an HTMLElement with valid elements', () => {
      const service = getService();
      const HTMLElement = document.body.innerHTML = `<div class="parent">
          <span class="red">a</span>
          <span class="red">b</span>
          <span class="">c</span>
          <span class="red">d</span>
          <span class="red">e</span>
        </div>
      `;
      const parentElement = angular.element(HTMLElement);
      const childrenSelector = 'span';
      const attrToBeFilter = 'className';
      const filterValue = 'red';

      const filterList = service.getTextContentFrom(parentElement, childrenSelector, attrToBeFilter, filterValue);
      expect(filterList).toHaveLength(2);
      expect(filterList[0]).toEqual('ab');
      expect(filterList[1]).toEqual('de');
    });
    it('Should filter return an empty array when there are no valid elements', () => {
      const service = getService();
      const HTMLElement = document.body.innerHTML = `<div class="parent">
          <span class="red">a</span>
          <span class="red">b</span>
          <span class="">c</span>
          <span class="red">d</span>
          <span class="red">e</span>
        </div>
      `;
      const parentElement = angular.element(HTMLElement);
      const childrenSelector = 'span';
      const attrToBeFilter = 'className';
      const filterValue = 'yellow';

      const filterList = service.getTextContentFrom(parentElement, childrenSelector, attrToBeFilter, filterValue);
      expect(filterList).toHaveLength(0);
    });
  });
});