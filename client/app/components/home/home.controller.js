function HomeController($rootScope, FilterWordsEventService) {
  'ngInject';

  let $ctrl = this;
  const onFilterResponse = wordList => this.wordList = wordList;

  this.onSelectMarker = (color) => {
    this.selectedColor = color;
  };
  this.showSelection = (color) => {
    this.selectedColorFilter = color;
    FilterWordsEventService.onFilterWords(color)
  };

  $ctrl.$onInit = () => {
    // Init variables
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
