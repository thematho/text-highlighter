import contenteditableDirective from '../../../common/directives/contenteditable/contenteditable';
import SelectableTextController from './selectable-text.controller';
import SelectableTextComponent from './selectable-text.component';
import selectabletTextTemplate from './selectable-text.html';
import selectableText from './selectable-text';

describe('Component: selectabletText', () => {
  let $rootScope, makeController,
    FilterWordsEventMock = { onFilterRequest: jest.fn() },
    TextContentSearchMock = { getTextContentFrom: jest.fn() },
    TextHtmlParserMock = { parseCharsToSpans: jest.fn() };

  beforeEach(window.module(selectableText, ($provide) => {
    // $provide.value('$scope', $scope);
    // $provide.value('$element', element);
    $provide.value('FilterWordsEventService', FilterWordsEventMock);
    $provide.value('TextContentSearchService', TextContentSearchMock);
    $provide.value('TextHtmlParserService', TextHtmlParserMock);
  }));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      const $ctrl = new SelectableTextController(null, null, {
        onFilterRequest: jest.fn()
      });
      $ctrl.$onInit();
      return $ctrl;
    };
  }));

  describe('Controller', () => {
    // controller specs
    it('Validate Controller output methods', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).toHaveProperty('onTextSelected');
    });
  });

  describe('Component Properties', () => {
    // component/directive specs
    let component = SelectableTextComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(selectabletTextTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(SelectableTextController);
    });
  });

  describe('Compiled component', () => {
    let $compile, $scope, htmlStr, element, compiled;

    beforeEach(inject(($injector) => {
      // $scope, $element,FilterWordsEventService, TextContentSearchService, TextHtmlParserService
      $compile = $injector.get('$compile');
      $scope = $injector.get('$rootScope').$new();
      htmlStr = `<selectable-text
        init-text="$ctrl.initText"
        color-list="$ctrl.colorList"
        selected-color="$ctrl.selectedColor"
        on-selection="$ctrl.onTextSelected(selectionList)">
        </selectable-text>
      `;
      // Make Angular resolve the string
      element = angular.element(htmlStr);
      // Trigger digest cycle in order to see changes if needed
      $scope.$digest();
      // Compile the Element into a new scope
      compiled = $compile(element)($scope);
    }));

    it('To render children properly', () => {
      $scope.$ctrl = {
        initText: 'test',
        colorList: ['red', 'blue'],
        selectedColor: 'red',
        onSelection: jest.fn(),
      };
      TextHtmlParserMock.parseCharsToSpans.mockReturnValue('<div>Parsed Mock</div>');
      $scope.$digest();
      expect(FilterWordsEventMock.onFilterRequest).toBeCalled();
      expect(TextContentSearchMock.getTextContentFrom).not.toBeCalled();
      expect(TextHtmlParserMock.parseCharsToSpans).toBeCalled();
      expect(compiled.text()).toEqual('Parsed Mock');
    });
  });
});
