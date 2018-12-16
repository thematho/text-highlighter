function HomeController($rootScope, orderByFilter, FilterWordsEventService) {
  'ngInject';

  let $ctrl = this;
  let sortedProperty;
  let reverseSorted;
  let originalList;
  const onFilterResponse = wordList => {
    originalList = wordList
    this.wordList = wordList;
    this.sortBy(sortedProperty, reverseSorted);
  }

  this.onSelectMarker = (color) => {
    this.selectedColor = color;
  };

  this.showSelection = (color) => {
    this.selectedColorFilter = color;
    FilterWordsEventService.onFilterWords(color)
  };

  this.sortBy = (sort, reverse) => {
    sortedProperty = sort ? 'toString()' : null;
    reverseSorted = reverse;
    this.wordList = sortedProperty ? orderByFilter(this.wordList, sortedProperty, reverseSorted)
      : originalList;
  };

  $ctrl.$onInit = () => {
    // Init variables
    this.filterOrder = 'original';
    this.colorList = ['red', 'yellow', 'green'];
    this.initText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
    been the industry’s standard dummy text ever since the 1500s, when an unknown printer took
    a galley of type and scrambled it to make a type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining essentially`;
    //Subscribe to Filter Words Response events
    FilterWordsEventService.onFilterResponse(onFilterResponse);
  };
};

export default HomeController;
