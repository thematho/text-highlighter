function TextContentSearchService() {
  'ngInject';

  /**
   * Description: This function will search for a particular type of children element, filter
   * those elements by a filter criteria and return a list of Text Node contained for those filtered
   * children nodes
   * @param {jQlite Element} parentElement in which we are going to apply our search
   * @param {String} childrenSelector Selector string for the children we are going to compare and filter
   * @param {String} attrToBeFilter Name of the attribute we are going to use for our comparisson
   *                                e.g. 'Classname'
   * @param {String} filterValue The value of the elements we want to return
   * @returns {Array<String>} List with innerText of each filter element
   */
  let getTextContentFrom = (parentElement, childrenSelector, attrToBeFilter, filterValue) => {
    const nodeList = [];
    const tempList = Array.from(parentElement.find(childrenSelector));
    let auxText = '';
    let index = 0;
    while (index < tempList.length) {
      if (tempList[index][attrToBeFilter] === filterValue) {
        auxText += tempList[index].innerHTML;
      } else if (auxText) {
        nodeList.push(auxText);
        auxText = '';
      }
      index++;
    }
    if (auxText) nodeList.push(auxText);
    return nodeList;
  }


  return {
    getTextContentFrom,
  };
}

export default TextContentSearchService;
