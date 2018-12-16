/**
 * @returns Array<DOM Nodes>
 * @param {DOM Node} firstNode first Node of the selection
 * @param {DOM Node} lastNode last Node of the selection
 */
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
      // Get the current Selected Text/Nodes and send the result to the output callback 
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const startParent = range.startContainer.parentNode;
      const endParent = range.endContainer.parentNode;
      $scope.onTextSelected({
        nodeList: getNodesBetween(startParent, endParent)
      });
    }
  });
  $scope.$on('$destroy', () => {
    // Unbind listeners
    el.off('mouseup blur')
  });
}
