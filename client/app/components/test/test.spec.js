import test from './test'
import TestController from './test.controller';
import testComponent from './test.component';
import testTemplate from './test.html';

describe('Component: test', () => {
  let $rootScope, makeController;

  beforeEach(window.module(test));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      let $ctrl = new TestController();
      $ctrl.$onInit();
      return $ctrl;
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(testTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = testComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(testTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TestController);
      });
  });
});
