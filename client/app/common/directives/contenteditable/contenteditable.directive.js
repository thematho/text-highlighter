export default (scope, elem, attrs, $ctrl) => {
  const updateModelValue = () => {
    $ctrl.$setViewValue(elem.html());
  };
 
  $ctrl.$render = () => {
    elem.html(($ctrl.$viewValue || '') + elem.html());
  };

  elem.bind('keyup change blur', () => {
    scope.$applyAsync(updateModelValue);
  });

  scope.$on('$destroy', () => {
    elem.off('keyup change blur');
  });
}
