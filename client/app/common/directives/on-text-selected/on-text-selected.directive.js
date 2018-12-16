const getNodesBetween = (firstNode, lastNode) => {
  let nodes = [firstNode];
  let currentNode = firstNode;
  while (currentNode !== lastNode) {
    currentNode = currentNode.nextElementSibling;
    nodes.push(currentNode);
  }
  return nodes;
}
export default ($scope, el) => {
  el.on('mouseup blur', (e) => {
    if (window.getSelection) {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const startParent = range.startContainer.parentNode;
      const endParent = range.endContainer.parentNode;
      $scope.onTextSelected({
        nodeList: getNodesBetween(startParent, endParent)
      });
    }
    // else if (document.selection) {
    //   // Support for older browsers
    //   selection = document.selection.createRange();
    //   var ids = new Array();

    //   if (selection.htmlText.toLowerCase().indexOf('span') >= 0) {
    //     $(selection.htmlText).filter('span').each(function (index, span) {
    //       ids.push(span.id);
    //     });
    //     alert(ids);
    //   } else {
    //     alert(selection.parentElement().id);
    //   }
    // }
  })
  $scope.$on('$destroy', () => {
    // Unbind listeners
    el.off('mouseup blur')
  });
}
