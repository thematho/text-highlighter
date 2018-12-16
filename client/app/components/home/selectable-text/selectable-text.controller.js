function SelectableTextController($scope, $element,
  FilterWordsEventService, TextContentSearchService, TextHtmlParserService) {
  'ngInject';

  let $ctrl = this;

  $ctrl.$onInit = () => {
    FilterWordsEventService.onFilterRequest((color) => {
      return TextContentSearchService.getTextContentFrom($element, 'span', 'className', color);
    });
  };

  $ctrl.$onChanges = (changes) => {
    if (changes.initText) {
      this.text = TextHtmlParserService.parseCharsToSpans(changes.initText.currentValue);
    }
  };

  this.onTextSelected = (list) => {
    if (!this.selectedColor) return;
    $scope.$applyAsync(() => {
      let classesToRemove = this.colorList.filter(color => color !== this.selectedColor);
      list.forEach(span => {
        let className = span.className;
        // If the node alread has as current class the selectedColor we don't override the className
        if (!~className.indexOf(this.selectedColor)) {
          // Remove old classes
          classesToRemove.forEach((classToRemove) => className = (className).replace(classToRemove, ''));
          span.className = `${(className ? ' ' : '')}${this.selectedColor}`;
        }
      })
    })
  };
}

export default SelectableTextController;
