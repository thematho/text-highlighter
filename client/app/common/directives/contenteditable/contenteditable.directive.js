export default (scope, elem, attrs, $ctrl) => {
  const updateModelValue = () => {
    $ctrl.$setViewValue(elem.html());
  };

  // Override default render function, to the HTML content as Model
  $ctrl.$render = () => {
    elem.html(($ctrl.$viewValue || '') + elem.html());
  };

  // Every time we change the content editable off the HTMLElement we call Angular's update model
  // To modify the default render function, probabbly this would be more easy and readable 
  // if we use a React component
  elem.bind('keyup change blur', () => {
    scope.$applyAsync(updateModelValue);
  });

  scope.$on('$destroy', () => {
    // Cleanup event listener
    elem.off('keyup change blur');
  });
}
