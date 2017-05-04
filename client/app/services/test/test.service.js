function TestService($http) {
    'ngInject';

  this.name = 'TestService';

  let getName = () => {
    return this.name;
  }
  let getItems = () => {
    return $http({
      method: 'GET', url: '/services/items' }
    );
  }

  return {
    getName,
    getItems
  };
}

export default TestService;
