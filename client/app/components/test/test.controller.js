function TestController() {
  'ngInject';

  let $ctrl = this;
  this.name = 'test';

  $ctrl.$onInit =  () => {};
  $ctrl.$onChanges = (changes) => {};
  $ctrl.$onDestroy = () => {};
  $ctrl.$postLink = () => {};
}

export default TestController;
