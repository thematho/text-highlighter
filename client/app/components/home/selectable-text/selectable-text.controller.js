function SelectableTextController($scope, $element, FilterWordsEventService) {
  'ngInject';

  let $ctrl = this;

  const parseText = (text = '') => (text.split('')
    .map(c => `<span class="">${c}</span>`)
    .join('')
  );

  const getFilterWords = (color) => {
    const nodeList = [];
    const tempList = Array.from($element.find('span'));
    let auxText = '';
    let index = 0;
    while (index < tempList.length) {
      if (tempList[index].className === color) {
        auxText += tempList[index].innerHTML;
      } else if (auxText) {
        nodeList.push(auxText);
        auxText = '';
      }
      index++;
    }
    if (auxText) nodeList.push(auxText);
    return nodeList;
  };

  $ctrl.$onInit = () => {
    FilterWordsEventService.onFilterRequest(getFilterWords);
  };

  $ctrl.$onChanges = (changes) => {
    if (changes.initText) {
      this.text = parseText(changes.initText.currentValue);
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
