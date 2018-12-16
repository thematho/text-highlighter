export default (scope, el, attrs, ctrl) => {

  el.focus();
  el.on('click', function eventListener(e) { })
  scope.$on('$destroy', () => {
    // Unbind listeners
    el.off('click');
  });
}
