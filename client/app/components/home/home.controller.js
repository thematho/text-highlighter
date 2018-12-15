function HomeController() {
  'ngInject';
  let $ctrl = this;

  this.onSelectMarker = (color) => {
    this.selectedColor = color;
    console.log(color);
  }
  this.$onInit = () => { };
  this.$onChanges = (changes) => { };
  this.$onDestroy = () => { };
  this.$postLink = () => { };
};

export default HomeController;
