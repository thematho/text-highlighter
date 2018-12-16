function SelectableTextController($scope) {
  'ngInject';

  let $ctrl = this;

  const parseText = (text = '') => (text.split('')
    .map(c => `<span class="">${c}</span>`)
    .join('')
  );

  $ctrl.$onChanges = (changes) => {
    if (changes.initText) {
      this.text = parseText(changes.initText.currentValue);
    }
  };

  this.onTextSelected = (list) => {
    if (!this.selectedColor) {
      return;
    }
    $scope.$applyAsync(() => {
      let classesToRemove = this.colorList.filter(color => color !== this.selectedColor);
      list.forEach(span => {
        let className = span.className;
        // If the node alread has as current class the selectedColor
        // we don't execute anything
        if (!~className.indexOf(this.selectedColor)) {
          classesToRemove.forEach((clss) => {
            className = (className).replace(clss, '');
          });
          span.className = this.selectedColor;
        }
      })
    })
  };
}

export default SelectableTextController;
