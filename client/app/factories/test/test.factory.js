export default (/* injections*/) => {
  'ngInject';

  let name = 'TestService',
    getName = function () {
      return name;
    };

  return {
    getName
  };
};
