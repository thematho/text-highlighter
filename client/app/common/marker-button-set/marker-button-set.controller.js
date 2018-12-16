function MarkerButtonSetController() {
  'ngInject';

  let $ctrl = this;

  this.onClickMarker = (color) => {
    this.activeMarkerIndex = this.colorList.indexOf(color);
    this.onClick({ color });
  };

  this.isActive = index => index === this.activeMarkerIndex;
}

export default MarkerButtonSetController;
