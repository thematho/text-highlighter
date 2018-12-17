import markerButtonSet from './marker-button-set'
import MarkerButtonSetController from './marker-button-set.controller';
import markerButtonSetComponent from './marker-button-set.component';
import markerButtonSetTemplate from './marker-button-set.html';

describe('Component: markerButtonSet', () => {
  let $rootScope, makeController;

  beforeEach(window.module(markerButtonSet));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => new MarkerButtonSetController();
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('Validate Controller methods', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).toHaveProperty('onClickMarker');
      expect(controller).toHaveProperty('isActive');
    });
  });

  describe('Component Properties', () => {
    // component/directive specs
    let component = markerButtonSetComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(markerButtonSetTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(MarkerButtonSetController);
    });
  });

  describe('Compiled component', () => {
    let $compile, $scope, htmlStr, element, compiled;

    beforeEach(inject(($injector) => {
      $compile = $injector.get('$compile');
      $scope = $injector.get('$rootScope').$new();
      htmlStr = `<marker-button-set
        color-list="$ctrl.colorList"
        on-click="$ctrl.onClick(color)">
      `;
      // Make Angular resolve the string
      element = angular.element(htmlStr);

      // Trigger digest cycle in order to see changes if needed
      $scope.$digest();
      // Compile the Element into a new scope
      compiled = $compile(element)($scope);
    }));
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('To render children properly', () => {
      $scope.$ctrl = {
        colorList: ['red', 'blue'],
        onClick: jest.fn(),
      };
      $scope.$digest();
      const children = compiled.find('div');
      expect(children).toHaveLength(2);
      expect(angular.element(children[0]).hasClass('marker-button--red')).toBe(true);
      expect(angular.element(children[1]).hasClass('marker-button--blue')).toBe(true);
    });
    it('To render children properly', () => {
      $scope.$ctrl = {
        colorList: ['red', 'blue'],
        onClick: jest.fn(),
      };
      $scope.$digest();
      const redButton = angular.element(compiled.find('div')[0]);
      redButton.triggerHandler('click');
      expect($scope.$ctrl.onClick).toBeCalledWith('red');
      expect(redButton.hasClass('marker-button--active')).toBe(true);
    });
  });
});
