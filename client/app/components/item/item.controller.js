function ItemController (ItemService) {
  'ngInject';

  let $ctrl = this;

  this.$onInit =  () => {
    this.ItemService = ItemService;
    this.serviceName = this.ItemService.getName();
    this.ItemService.getItems()
      .then((response)=> {
        this.items = response.data;
      }, () => {
        this.errorMsg = 'Error retrieving items';
      });
  };
  this.$onChanges = (changes) => {};
  this.$onDestroy = () => {};
  this.$postLink = () => {};

};

export default ItemController;
